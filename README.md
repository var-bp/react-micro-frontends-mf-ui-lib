# React UI Library Template

This is a ReactJS UI Library built to provide custom elements. Small UI building blocks that are assembled in order to create the UX.

## Features
- support for `.css` & `.js` files
- TypeScript
- Normalize.css
- styled-components
- browserslist
- ESLint
- Prettier
- Storybook
- Babel
- webpack 5
  - code splitting (css & js)
  - tree shaking
  - terser
  - zopfli/brotli/gzip
  - module Federation
- Jest & React Testing Library
- optional libraries
  - styled-media-query
  - polished

## Important notes
Adhere to [10 npm Security Best Practices](https://snyk.io/blog/ten-npm-security-best-practices/).

All your npm packages from `dependencies` must be the same version across all you react-micro-frontends repositories.

react-micro-frontends-mf-ui-lib communicates with react-micro-frontends-mf-root/react-micro-frontends-mf-repository-1/react-micro-frontends-mf-repository-2 only through `exposes`. No bi-directional hosts.

Build Storybook as a static web application and [publish it](https://storybook.js.org/docs/riot/workflows/publish-storybook).

For a better understanding of the material please see this [course of lectures](https://www.youtube.com/playlist?list=PLNqp92_EXZBLr7p7hn6IYa1YPNs4yJ1t1) and [official documentation](https://webpack.js.org/concepts/module-federation/).

Transpiling to ES5 is not really a good idea these days. Around [95% of browsers support ES2017](https://caniuse.com/async-functions,object-values,object-entries,mdn-javascript_builtins_object_getownpropertydescriptors,pad-start-end,mdn-javascript_grammar_trailing_commas_trailing_commas_in_functions) features, So transpiling to ES2017 should reduce bundle size by 10-15%. If there is need to support older browsers(like IE11) there could be two build one with ES5 and one with 2017. Because of 3% of users 97% of user experience should not be compromised.

## Installation
Create `.env` file on the root of the project.
```
MICROFRONTEND_HOST_NAME=ui_library
MICROFRONTEND_HOST_URL=http://localhost:3003
MICROFRONTEND_HOST_PORT=3003

```

Install the project dependencies.
```bash
$ npm i
```

We recommend using the [Redux DevTools Chrome Extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) and [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en). Using the chrome extension allows your monitors to run on a separate thread and affords better performance and functionality. It comes with several of the most popular monitors, is easy to configure, filters actions, and doesn't require installing any packages in your project.

## Running the Project
After completing the [installation](#installation) step, you're ready to start the project!

```bash
$ npm run start  # Start the development server
```

While developing, you will probably rely mostly on `npm run start` however, there are additional scripts at your disposal:

|`npm run <script>` |Description|
|-------------------|-----------|
|`build`            |Build prod app to ./build|
|`build:storybook`  |Build build to ./build/storybook|
|`lint:js`          |Lint the project for potential errors|
|`lint:js:fix`       |Lint the project and fixes all correctable errors|
|`start`            |Serve your dev app at `localhost:3000`|
|`start:prod`       |Serve your prod app at `localhost:3000`|
|`storybook`        |Serve storybook at `localhost:6006`|
|`test`             |Run unit tests with Jest|
|`test:watch`       |Run `test` in watch mode to re-run tests when changed|
|`test:coverage`    |Generate information about coverage to ./coverage|

## Testing
To add a unit test, create a `.spec.tsx` or `.test.tsx` file anywhere inside of `./src`. Jest and webpack will automatically find these files.
