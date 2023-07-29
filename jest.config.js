module.exports = {
    testEnvironment: 'jest-environment-jsdom', // Update the test environment to jest-environment-jsdom
    transform: {
      '^.+\\.(js|jsx)$': 'babel-jest',
    },
    moduleNameMapper: {
      '\\.(css|less)$': '<rootDir>/client/src/styles/styleMock.js',
    },
    testRegex: '(/tests/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  };