import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import playwright from 'eslint-plugin-playwright';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import globals from 'globals';

export default tseslint.config(
  {
    ignores: [
      'node_modules/',
      'playwright-report/',
      'test-results/',
      'allure-results/',
      'dist/',
      'build/',
    ],
  },

  eslint.configs.recommended,
  ...tseslint.configs.recommended,

  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    plugins: {
      prettier: prettier,
    },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.node,
      },
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    rules: {
      ...prettierConfig.rules,
      'prettier/prettier': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'no-console': 'warn',
    },
  },

  {
    files: ['tests/**/*.spec.ts', 'e2e/**/*.spec.ts'],
    plugins: {
      playwright: playwright,
    },
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
    rules: {
      ...playwright.configs.recommended.rules,
      'playwright/no-conditional-in-test': 'off',
    },
  },

  {
    files: ['**/*.config.js', '**/*.config.mjs', '**/*.config.ts'],
    ...tseslint.configs.disableTypeChecked,
  }
);
