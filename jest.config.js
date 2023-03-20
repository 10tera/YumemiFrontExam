/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'jsdom',
  snapshotSerializers: ["@emotion/jest/serializer"],
  verbose: true,
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.tsx?$": ["ts-jest",{
      tsconfig: "./tsconfig.jest.json",
      useESM: true,
    }]
  },
  moduleFileExtensions:["js","ts","tsx","jsx"],
  globals: {
  }
};