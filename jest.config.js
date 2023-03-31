/** @type {import('jest').Config} */
const { defaults } = require('jest-config');

const config = {
  verbose: true,
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'mts', 'cts'],
  moduleNameMapper: {
    'src/(.*)': '<rootDir>/src/$1',
    'elements/(.*)': '<rootDir>/src/components/elements/$1',
    'globalAssets/(.*)': '<rootDir>/src/globalAssets/$1',
    'globalConfig/(.*)': '<rootDir>/src/globalConfig/$1',
    'layouts/(.*)': '<rootDir>/src/components/layouts/$1',
    'modules/(.*)':  '<rootDir>/src/components/modules/$1',
    'pages/(.*)': '<rootDir/src/components/pages/$1'
  },
  setupFilesAfterEnv: ['<rootDir>/setup-jest.js'],
  testEnvironment: 'jsdom',
};

module.exports = config;