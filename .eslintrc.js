module.exports = {
	"env": {
		"browser": true,
		"es2021": true,
		"commonjs": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended"
	],
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": 12,
		"sourceType": "module"
	},
	"plugins": [
		"react"
	],
	"rules": {
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"windows"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"always"
		],
		"object-curly-spacing": [
			"error",
			"always"
		],
		"array-bracket-spacing": [
			"error",
			"always"
		],
		"space-in-parens": [
			"error",
			"always",
			{
				"exceptions": [
					"{}",
					"[]",
					"()",
					"empty"
				]
			}
		]
	}
};