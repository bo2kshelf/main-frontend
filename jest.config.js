module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: './src',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
};
