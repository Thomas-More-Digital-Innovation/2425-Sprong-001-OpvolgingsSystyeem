module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageReporters: ['lcov', 'text'],
    coveragePathIgnorePatterns: ['/node_modules/', '/dist/', '/test/'], // Exclude unnecessary directories
  };
  