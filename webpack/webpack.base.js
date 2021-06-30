/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const StylelintPlugin = require('stylelint-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const { env, getSharedModules } = require('./utils');
const PACKAGE_JSON = require('../package.json');

module.exports = {
  entry: {
    typography: path.join(__dirname, '../src/typography.ts'),
    spacing: path.join(__dirname, '../src/spacing.ts'),
    components: path.join(__dirname, '../src/components.ts'),
    colors: path.join(__dirname, '../src/colors.ts'),
  },
  output: {
    uniqueName: env.MICROFRONTEND_HOST_NAME,
    path: path.join(__dirname, '../build'),
    // webpack uses `publicPath` to determine where the app is being served from.
    // It requires a trailing slash, or the file assets will get an incorrect path.
    publicPath: `${env.MICROFRONTEND_HOST_URL}/`,
    // Clean the output directory before emit.
    clean: true,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  resolve: {
    // This allows you to set a fallback for where webpack should look for modules.
    // We placed these paths second because we want `node_modules` to "win"
    // if there are any conflicts.
    modules: ['node_modules', path.join(__dirname, '../node_modules')],
    // These are the reasonable defaults supported by the Node ecosystem.
    // We also include JSX as a common component filename extension to support
    // some tools.
    extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json'],
    fallback: {
      fs: false,
    },
  },
  module: {
    // Makes missing exports an error instead of warning.
    strictExportPresence: true,
    rules: [
      // First, run the linter.
      // It's important to do this before Babel processes the JS.
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        include: path.join(__dirname, '../src'),
        enforce: 'pre',
        use: [
          {
            loader: 'eslint-loader',
            options: {
              cache: true,
              eslintPath: 'eslint',
              resolvePluginsRelativeTo: __dirname,
            },
          },
        ],
      },
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            // This is a feature of `babel-loader` for webpack (not Babel itself).
            // It enables caching results in ./node_modules/.cache/babel-loader/
            // directory for faster rebuilds.
            cacheDirectory: true,
          },
        },
      },
      {
        // https://github.com/jantimon/html-webpack-plugin/issues/1589#issuecomment-768418074
        exclude: [/(^|\.(js|mjs|jsx|ts|tsx|html|css|scss|sass|json|jsonp))$/],
        type: 'asset/resource',
        generator: {
          filename: 'static/[name].[hash:8][ext]',
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: env.MICROFRONTEND_HOST_NAME,
      filename: 'js/remoteEntry.js',
      exposes: {
        './typography': path.join(__dirname, '../src/typography.ts'),
        './spacing': path.join(__dirname, '../src/spacing.ts'),
        './components': path.join(__dirname, '../src/components.ts'),
        './colors': path.join(__dirname, '../src/colors.ts'),
      },
      shared: getSharedModules(PACKAGE_JSON.dependencies),
    }),
    // A linter for CSS-like syntaxes like SCSS, Sass, Less and SugarSS
    new StylelintPlugin({
      files: '**/*.{scss,sass,css,ts,tsx,js,jsx}',
    }),
  ],
};
