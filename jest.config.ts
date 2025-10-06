import type { JestConfigWithTsJest } from 'ts-jest';

const config: JestConfigWithTsJest = {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/test/**/*.test.ts'], // mais específico para sua pasta
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testPathIgnorePatterns: ['/node_modules/'],
};

export default config;
