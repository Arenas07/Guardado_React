module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', // Asegura que Prettier se ejecute como regla de ESLint
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
    'prettier', // Añade Prettier como plugin
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto', // Ayuda con diferencias de sistema operativo
      },
    ],
    'react/react-in-jsx-scope': 'off', // No es necesario con React 17+ y la nueva JSX transform
    'react/prop-types': 'off', // Deshabilita si usas TypeScript para validación de props
    // Añade aquí reglas específicas de ESLint que quieras sobrescribir o añadir
  },
  settings: {
    react: {
      version: 'detect', // Detecta automáticamente la versión de React
    },
  },
};