module.exports = {
  root: true,
  env: { browser: true, es2021: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    "plugin:perttier/recommended",
    "standard-with-typescript"
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  plugins: ['react','@typescript-eslint','perttire'],
  rules: {
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'comma-dangle': ['error', 'never'],
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-explicit-any': ['off']
}
}
