module.exports = {
  verbose: true,
  moduleDirectories: ['node_modules', 'src/components', 'src/environments'],
  moduleNameMapper: {
    'environment': '<rootDir>/src/environments/development.js',
    '\\.(css|scss)': '<rootDir>/__mocks__/styleMock.js'
  }
}
