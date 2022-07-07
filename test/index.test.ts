import getLinkPreview, { ILinkPreviewInfo } from '../src';

const youtubeSample: ILinkPreviewInfo = {
  description:
    'How much do we know about the impact of technologies we use everyday? How much the web industry is responsible for carbon emissions? Can we define an ethic d...',
  favicon: 'https://www.youtube.com/s/desktop/97650662/img/favicon.ico',
  image: 'https://i.ytimg.com/vi/feH26j3rBz8/maxresdefault.jpg',
  imageHeight: 720,
  imageWidth: 1280,
  images: [],
  mediaType: 'video.other',
  siteName: 'YouTube',
  title: 'A sustainable web: is it possible? - Nicola Zambello',
  video: 'https://www.youtube.com/embed/feH26j3rBz8',
  videos: [],
};

const rawmaterialSample: ILinkPreviewInfo = {
  description:
    'RawMaterial is an innovative and emerging company at the forefront of providing sustainable web solutions and environmental consulting services for a sustainable, inclusive, equitable and community future.',
  favicon: 'https://rawmaterial.it/favicon.ico',
  image:
    'https://rawmaterial.it/en/@@images/33b46076-8aca-430e-bdf5-4c6154d4a3a7.png',
  imageHeight: 295,
  imageWidth: 800,
  images: [
    'https://rawmaterial.it/it/risorse/plone-logo.svg/@@images/image/icon',
    'https://rawmaterial.it/it/risorse/rawmaterial-it.png/@@images/image/icon',
    'https://rawmaterial.it/it/risorse/logo_treedom_friend_green.png/@@images/image/icon',
  ],
  mediaType: undefined,
  siteName: undefined,
  title: 'RawMaterial',
  video: undefined,
  videos: [],
};

const wikipediaSample: ILinkPreviewInfo = {
  description: undefined,
  favicon: 'https://en.wikipedia.org/static/favicon/wikipedia.ico',
  image:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Plone_5.2.png/1200px-Plone_5.2.png',
  imageHeight: 1423,
  imageWidth: 1200,
  images: [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Plone-logo.svg/121px-Plone-logo.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Plone_5.2.png/300px-Plone_5.2.png',
    'https://upload.wikimedia.org/wikipedia/en/thumb/8/8a/OOjs_UI_icon_edit-ltr-progressive.svg/10px-OOjs_UI_icon_edit-ltr-progressive.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Free_and_open-source_software_logo_%282009%29.svg/28px-Free_and_open-source_software_logo_%282009%29.svg.png',
    'https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Commons-logo.svg/30px-Commons-logo.svg.png',
    'https://upload.wikimedia.org/wikipedia/en/thumb/8/8a/OOjs_UI_icon_edit-ltr-progressive.svg/10px-OOjs_UI_icon_edit-ltr-progressive.svg.png',
    'https://en.wikipedia.org/static/images/footer/wikimedia-button.png',
    'https://en.wikipedia.org/static/images/footer/poweredby_mediawiki_88x31.png',
  ],
  mediaType: 'website',
  siteName: undefined,
  title: 'Plone (software) - Wikipedia',
  video: undefined,
  videos: [],
};

it('gets correct info for RawMaterial website', async () => {
  const info = await getLinkPreview('https://rawmaterial.it/en');
  expect(info).toEqual(rawmaterialSample);
});

it('gets correct info for YouTube video link', async () => {
  const info = await getLinkPreview(
    'https://www.youtube.com/watch?v=feH26j3rBz8'
  );
  expect(info).toEqual(youtubeSample);
});

it('gets correct info for Wikipedia url', async () => {
  const info = await getLinkPreview(
    'https://en.wikipedia.org/wiki/Plone_(software)'
  );
  expect(info).toEqual(wikipediaSample);
});
