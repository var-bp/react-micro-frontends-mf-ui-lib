/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const fs = require('fs');
const dotenv = require('dotenv');

const env = fs.existsSync(path.join(__dirname, '../.env')) ? dotenv.config().parsed : {};

const getSharedModules = (dependencies) => {
  const packageNames = Object.keys(dependencies);
  return packageNames.reduce(
    (accumulator, currentValue) => ({
      ...accumulator,
      [currentValue]: {
        singleton: true,
        requiredVersion: dependencies[currentValue],
      },
    }),
    {},
  );
};

module.exports = {
  env,
  getSharedModules,
};
