module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
  },
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1'
  }
}