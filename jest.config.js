module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom', // Use jsdom to simulate a browser environment for React components
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest', // Transform TypeScript/TSX files using ts-jest
  },
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'identity-obj-proxy', // Mock CSS modules
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // Setup file for jest-dom
};
