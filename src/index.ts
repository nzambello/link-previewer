import cheerio from 'cheerio';
import { fetch } from 'cross-fetch';

export type ILinkPreviewerOptions = {
  headers?: Record<string, string>;
  proxyUrl?: string;
  followRedirects?: boolean;
};

export type ILinkPreviewInfo = {
  title?: string | undefined;
  siteName?: string | undefined;
  description?: string | undefined;
  mediaType?: string | undefined;
  image?: string | undefined;
  imageWidth?: number | undefined;
  imageHeight?: number | undefined;
  favicon?: string | undefined;
  images?: string[] | undefined;
  video?: string | undefined;
  videos?: string[] | undefined;
};

const getMeta = ($: cheerio.Root, metaName: string) => {
  return (
    $("meta[name='" + metaName + "']").attr('content') ||
    $("meta[property='" + metaName + "']").attr('content')
  );
};

const parseUrl = (url?: string, baseUrl?: string) => {
  if (!url) return undefined;
  if (!baseUrl || url.startsWith('http')) return url;

  return `${baseUrl}${url}`;
};

export const parseResponse = (
  data: string,
  baseUrl: string
): ILinkPreviewInfo => {
  const $ = cheerio.load(data);
  const siteName = getMeta($, 'og:site_name');
  const title = getMeta($, 'og:title') || $('title').text();
  const description = getMeta($, 'og:description') || getMeta($, 'description');
  const mediaType = getMeta($, 'og:type');
  const image = parseUrl(
    getMeta($, 'og:image') || getMeta($, 'og:image:url'),
    baseUrl
  );
  const imageWidth = getMeta($, 'og:image:width');
  const imageHeight = getMeta($, 'og:image:height');
  const favicon = parseUrl(
    $('link[rel="shortcut icon"]').attr('href'),
    baseUrl
  );
  const images = $('img')
    .map((_i, el) => parseUrl($(el).attr('src'), baseUrl))
    .get() as string[] | undefined;
  const video = parseUrl(
    getMeta($, 'og:video:secure_url') ||
      getMeta($, 'og:video:url') ||
      getMeta($, 'og:video'),
    baseUrl
  );
  const videos = $('video')
    .map((_i, el) => parseUrl($(el).attr('src'), baseUrl))
    .get() as string[] | undefined;

  return {
    title,
    siteName,
    description,
    mediaType,
    image,
    imageWidth: imageWidth ? parseInt(imageWidth, 10) : undefined,
    imageHeight: imageHeight ? parseInt(imageHeight, 10) : undefined,
    favicon,
    images,
    video,
    videos,
  };
};

const getLinkPreview = async (url: string, options?: ILinkPreviewerOptions) => {
  const fetchUrl = options?.proxyUrl ? options.proxyUrl.concat(url) : url;

  const fetchOptions = {
    headers: options?.headers ?? {},
    redirect: options?.followRedirects
      ? ('follow' as 'follow')
      : ('error' as 'error'),
  };

  const response = await fetch(fetchUrl, fetchOptions).catch(e => {
    if (e.name === 'AbortError') {
      throw new Error('Request timeout');
    }

    throw e;
  });

  const data = await response.text();

  const baseUrl = new URL(
    options?.proxyUrl
      ? response.url.replace(options.proxyUrl, '')
      : response.url
  ).origin;

  return parseResponse(data, baseUrl);
};

export default getLinkPreview;
