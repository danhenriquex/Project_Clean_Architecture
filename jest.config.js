module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  }
}