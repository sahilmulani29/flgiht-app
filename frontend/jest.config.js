module.exports = {
	testEnvironment: "jest-environment-jsdom",
	setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
	moduleFileExtensions: ["ts", "tsx", ".js"],
	moduleDirectories: ["node_modules", "src"],
	moduleNameMapper: {
		"\\.(css|less|scss)$": "identity-obj-proxy",
	},
	transform: {
		"^.+\\.(ts|tsx)?$": "ts-jest",
		"^.+\\.(js|jsx)$": "babel-jest",
	},
};
