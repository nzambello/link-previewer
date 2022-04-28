import getLinkPreview, { ILinkPreviewInfo } from '../src';

const youtubeSample: ILinkPreviewInfo = {
  description:
    'How much do we know about the impact of technologies we use everyday? How much the web industry is responsible for carbon emissions? Can we define an ethic d...',
  favicon: 'https://www.youtube.com/s/desktop/ce262d3b/img/favicon.ico',
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
