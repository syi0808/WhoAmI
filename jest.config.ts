/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  clearMocks: true,
  testEnvironment: './src/tests/environment.ts',
  setupFilesAfterEnv: ['./src/tests/setupTests.ts'],
  testEnvironmentOptions: {
    customExportConditions: [''],
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testMatch: ['**/__tests__/**/?(*.)+(spec|test).[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
  verbose: false,
  injectGlobals: true,
};

export default createJestConfig(config);
