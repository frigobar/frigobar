module.exports = {
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/scripts/'],
  setupFilesAfterEnv: ['./config/setupTest.js'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|ico)$':
      '<rootDir>/config/fileMock.js',
    '\\.(css|less)$': '<rootDir>/config/styleMock.js',
  },
};
