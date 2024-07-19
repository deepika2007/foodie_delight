module.exports = {
    transform: {
      "^.+\\.jsx?$": "babel-jest",
    },
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
    moduleFileExtensions: ["js", "jsx"],
    transformIgnorePatterns: [
      "node_modules/(?!axios)"
    ],
  };
  