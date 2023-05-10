module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:jest/recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    'jest'
  ],
  rules: {
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'arrow-body-style': ['error', 'always'],
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-expect-assertions': 'off',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
    'jsx-a11y/no-static-element-interactions': ['always'],
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
  settings: {
    react: {
      version: 'detect'
    },
    jest: {
      version: require('jest/package.json').version
    },
    'import/resolver': {
      alias: {
        map: [
          ['src', './src'],
          ['public', './public'],
          ['elements', './src/components/elements'],
          ['globalAssets', './src/globalAssets'],
          ['globalConfig', './src/globalConfig'],
          ['modules', './src/components/modules'],
          ['layouts', './src/components/layouts'],
          ['pages', './src/components/pages']
        ],
        extensions: ['.ts', '.js', '.jsx', '.json']
      }
    }
  }
}
