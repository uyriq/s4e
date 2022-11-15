/* eslint-disable prettier/prettier */
module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    settings: {
        'import/resolver': {
            typescript: {
                extensions: ['.ts', '.tsx'],
            },
        },
    },

    extends: ['react-app', 'react-app/jest', 'plugin:react/recommended', 'prettier'],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', 'prettier', 'import'],
    rules: {
        'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx', '.tsx', '.ts'] }],
        'prettier/prettier': 0,
        'linebreak-style': 0,

        // Indent with 4 spaces
        indent: ['off', 4],

        // Indent JSX with 4 spaces
        'react/jsx-indent': ['off', 4],

        // Indent props with 4 spaces
        'react/jsx-indent-props': ['off', 4],
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
    },
}
