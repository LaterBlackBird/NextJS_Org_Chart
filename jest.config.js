// module.exports = {
//   setupFilesAfterEnv: ["./jest.setup.js"],
//   collectCoverageFrom: [
//     '**/*.{js,jsx,ts,tsx}',
//     '!**/*.d.ts',
//     '!**/node_modules/**',
//   ],
//   moduleNameMapper: {
//     // Handle CSS imports (with CSS modules)
//     // https://jestjs.io/docs/webpack#mocking-css-modules
//     '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',

//     // Handle CSS imports (without CSS modules)
//     '^.+\\.(css|sass|scss)$': './__mocks__/styleMock.js',

//     // Handle image imports
//     // https://jestjs.io/docs/webpack#handling-static-assets
//     '^.+\\.(png|jpg|jpeg|gif|webp|avif|ico|bmp|svg)$/i': `./__mocks__/fileMock.js`,

//     // Handle module aliases
//     '^@/components/(.*)$': './components/$1',
//   },
//   // Add more setup options before each test is run
//   // setupFilesAfterEnv: ['./jest.setup.js'],
//   testPathIgnorePatterns: ['./node_modules/', './.next/'],
//   testEnvironment: 'jsdom',
//   transform: {
//     // Use babel-jest to transpile tests with the next/babel preset
//     // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
//     '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
//   },
//   transformIgnorePatterns: [
//     '/node_modules/',
//     '^.+\\.module\\.(css|sass|scss)$',
//   ],
// };


const nextJest = require("next/jest");
const createJestConfig = nextJest({
  dir: "./",
});
const customJestConfig = {
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
};
module.exports = createJestConfig(customJestConfig);