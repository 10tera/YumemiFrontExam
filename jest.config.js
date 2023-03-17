/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'jsdom',
  verbose: true,
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  moduleFileExtensions:["js","ts","tsx","jsx"],
  globals: {
    'ts-jest': {
      tsConfigFile: './tsconfig.jest.json',
      useESM: true
    },
  }
};