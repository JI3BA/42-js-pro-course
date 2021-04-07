module.exports = {
  transform: {
    '\\.[jt]sx?$': 'babel-jest'
  },
  modulePathIgnorePatterns: ['e2e'],
  collectCoverage: true,
  collectCoverageFrom: ['src/functions.js']
};
