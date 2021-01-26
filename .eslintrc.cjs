module.exports = {
	extends: [
		"eslint-config-airbnb-base",
		"eslint-config-prettier",
		"plugin:jsdoc/recommended",
	],
	plugins: [
		"jsdoc"
	],
	parserOptions: {
		ecmaVersion: 2020,
	},
	env: {
		browser: true,
	},
	rules: {
		"import/prefer-default-export": "off",
		"import/extensions": ["error", "always", { ignorePackages: true }]
	}
};
