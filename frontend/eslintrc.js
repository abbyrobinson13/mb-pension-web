module.exports = {
    env: {
      browser: true,
      es2021: true,
      es6: true,
      jest: true,
      node: true
    },
    extends: [
      'eslint:recommended',
      'plugin:react/jsx-runtime',
      'plugin:react/recommended',
      'plugin:prettier/recommended'
    ],
    globals: {
      BUILT_AT: true,
      BUILD_VERSION: true,
      AUTH0_SETTINGS: true,
      prettier: true,
      prettierPlugins: true
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
        modules: true
      },
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    plugins: ['prettier', 'react'],
    rules: {
      curly: 'error',
      eqeqeq: 'error',
      // 'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-console': ['off'],
      'no-prototype-builtins': 'off',
      'no-unused-vars': 'warn',
      'prettier/prettier': 'error',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off'
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  };