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
    'pages/(.*)': '<rootDir>/src/components/pages/$1'
  },
  setupFilesAfterEnv: ['<rootDir>/setup-jest.js'],
  testEnvironment: 'jsdom',
  transform: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/fileTransformer.js',
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
};

module.exports = config;