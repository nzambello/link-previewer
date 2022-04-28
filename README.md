# link-previewer

[![npm version](https://img.shields.io/github/package-json/v/nzambello/link-previewer)](https://www.npmjs.com/package/link-previewer)
![Tests](https://github.com/nzambello/link-previewer/workflows/CI/badge.svg?branch=main)
![TypeScript Support](https://img.shields.io/badge/TypeScript-Support-blue)

Node util to retrieve preview info from a link (og tags, meta tags, images, videos).

## Installation

```bash
yarn add link-previewer
```

```bash
npm install link-previewer
```

## Usage

```ts
import getLinkPreview from 'link-previewer';

getLinkPreview('https://www.youtube.com/watch?v=feH26j3rBz8').then(console.log);
```

### Result

```json
{
  "description": "How much do we know about the impact of technologies we use everyday? How much the web industry is responsible for carbon emissions? Can we define an ethic d...",
  "favicon": "https://www.youtube.com/s/desktop/ce262d3b/img/favicon.ico",
  "image": "https://i.ytimg.com/vi/feH26j3rBz8/maxresdefault.jpg",
  "imageHeight": 720,
  "imageWidth": 1280,
  "images": [],
  "mediaType": "video.other",
  "siteName": "YouTube",
  "title": "A sustainable web: is it possible? - Nicola Zambello",
  "video": "https://www.youtube.com/embed/feH26j3rBz8",
  "videos": []
}
```

## Development

To run TSDX, use:

```bash
npm start # or yarn start
```

This builds to `/dist` and runs the project in watch mode so any edits you save inside `src` causes a rebuild to `/dist`.

To do a one-off build, use `npm run build` or `yarn build`.

To run tests, use `npm test` or `yarn test`.

### Formatting and linting

Code quality is set up with `prettier`, `husky`, and `lint-staged`.

### Jest

Jest tests are set up to run with `npm test` or `yarn test`.

### Bundle Analysis

[`size-limit`](https://github.com/ai/size-limit) is set up to calculate the real cost of your library with `npm run size` and visualize the bundle with `npm run analyze`.

### Rollup

TSDX uses [Rollup](https://rollupjs.org) as a bundler and generates multiple rollup configs for various module formats and build settings. See [Optimizations](#optimizations) for details.

### TypeScript

`tsconfig.json` is set up to interpret `dom` and `esnext` types, as well as `react` for `jsx`. Adjust according to your needs.

### Continuous Integration

#### GitHub Actions

Two actions are added by default:

- `main` which installs deps w/ cache, lints, tests, and builds on all pushes against a Node and OS matrix
- `size` which comments cost comparison of your library on every pull request using [`size-limit`](https://github.com/ai/size-limit)

### Optimizations

Please see the main `tsdx` [optimizations docs](https://github.com/palmerhq/tsdx#optimizations). In particular, know that you can take advantage of development-only optimizations:

```js
// ./types/index.d.ts
declare var __DEV__: boolean;

// inside your code...
if (__DEV__) {
  console.log('foo');
}
```

You can also choose to install and use [invariant](https://github.com/palmerhq/tsdx#invariant) and [warning](https://github.com/palmerhq/tsdx#warning) functions.

### Module Formats

CJS, ESModules, and UMD module formats are supported.

The appropriate paths are configured in `package.json` and `dist/index.js` accordingly. Please report if any issues are found.

### Commitlint

We use [commmitlint](https://commitlint.js.org/) for commit message validation based on [Conventional Commits](https://www.conventionalcommits.org/en/).

### Release

Changelog and release management with [release-it](https://github.com/release-it/release-it), using [convential changelog](https://github.com/release-it/conventional-changelog).
