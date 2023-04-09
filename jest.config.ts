/** @type {import('ts-jest').JestConfigWithTsJest} */
const { defaults } = require('jest-config');
import type { Config } from 'jest'

const config: Config = {
  verbose: true,
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    'src/(.*)': '<rootDir>/src/$1',
    'elements/(.*)': '<rootDir>/src/components/elements/$1',
    'globalAssets/(.*)': '<rootDir>/src/globalAssets/$1',
    'globalConfig/(.*)': '<rootDir>/src/globalConfig/$1',
    'layouts/(.*)': '<rootDir>/src/components/layouts/$1',
    'modules/(.*)':  '<rootDir>/src/components/modules/$1',
    'pages/(.*)': '<rootDir>/src/components/pages/$1'
  },
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/fileTransformer.js',
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  roots: ["./src"],
  setupFilesAfterEnv: ['<rootDir>/setup-jest.js'],
  preset: 'ts-jest',
  collectCoverage: true,
  collectCoverageFrom: ["./src/**"],
  coverageThreshold: {
    global: {
      lines: 90
    }
  },
  coveragePathIgnorePatterns: [
    '.*__snapshots__/.*',
    '.*globalConfig/templates/.*',
    '.*globalAssets/.*',
    '.*.d.ts',
    '.*.interface.ts'
  ]
};

module.exports = config;