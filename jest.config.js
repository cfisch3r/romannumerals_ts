module.exports = {
  testPathIgnorePatterns: ["/node_modules/","dist"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  preset: 'ts-jest/presets/default',
  testEnvironment: 'node'
};