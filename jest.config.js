module.exports = {
  verbose: true,
  moduleDirectories: ['node_modules', 'src/components', 'src/environments'],
  moduleNameMapper: {
    'environment': '<rootDir>/src/environments/development.js',
    '\\.(css|scss)': '<rootDir>/__mocks__/styleMock.js',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js'
  }
}
