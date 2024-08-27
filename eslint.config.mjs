import eslintJs from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import eslintPluginReact from 'eslint-plugin-react'
import eslintPluginSimpleImportSort from 'eslint-plugin-simple-import-sort'
import eslintPluginTailwindCss from 'eslint-plugin-tailwindcss'
import eslintTs from 'typescript-eslint'

export default eslintTs.config(
  eslintJs.configs.recommended,
  ...eslintTs.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          experimentalObjectRestSpread: true, // Allow object rest/spread properties
          jsx: true, // Allow JSX syntax
          arrowFunctions: true, // Allow arrow functions
          classes: true, // Allow classes
          modules: true, // Allow modules
          defaultParams: true, // Allow default parameters
        },
        ecmaVersion: 12, // Use ECMAScript 12
        sourceType: 'module', // Use module imports
        allowImportExportEverywhere: false, // Do not allow import/export everywhere
        codeFrame: true, // Enable code frame
      },
    },
    settings: {
      react: {
        version: 'detect', // Detect the version of React
      },
    },
    rules: {
      indent: 0, // No indentation requirement
      'arrow-body-style': 0, // No preference in using block or implicit return in arrow functions
      'no-plusplus': 0, // Allow the use of ++ and --
      'no-confusing-arrow': 0, // Allow arrow functions to return assignments
      'no-console': 0, // Allow the use of console
      'no-const-assign': 2, // Prevent re-assigning const variables
      'no-param-reassign': 0, // Allow reassigning function parameters
      'no-shadow': 0, // Allow variable shadowing
      'no-unused-vars': 0, // Allow unused variables
      'no-return-assign': 0, // Allow return assignment
      'no-prototype-builtins': 0, // Allow calling some Object.prototype methods directly
      'no-restricted-syntax': 0, // No restrictions on syntax
      'no-use-before-define': 0, // Allow usage of variables before they are defined
      'no-unused-expressions': 0, // Allow unused expressions
      'object-curly-newline': 0, // No styling requirements for object literal newline
      'implicit-arrow-linebreak': 0, // No requirements for line breaks inside arrow functions
      'function-paren-newline': 0, // No newline requirements for function parentheses
      'jsx-quotes': [0, 'prefer-double'], // No enforcement of JSX quotes style
      'comma-dangle': 0, // No enforcement on trailing commas
      'consistent-return': 0, // Allow different return types from functions
      'max-classes-per-file': 0, // No restriction on the number of classes per file
      'operator-linebreak': 0, // No enforcement on operator linebreak style
      'nonblock-statement-body-position': 0, // Allow block-like bodies in single-line statements
      'generator-star-spacing': 0, // No spacing requirement around * in generator functions
      'max-len': 0, // No maximum length enforcement on a line
      'class-methods-use-this': 0, // Allow class methods not using 'this'
      camelcase: 0, // No enforcement of camelcase style
      semi: [2, 'never'], // Disallow the use of semicolons
      '@typescript-eslint/no-explicit-any': 0, // Allow explicit any types
      '@typescript-eslint/no-var-requires': 0, // Allow require statements
      '@typescript-eslint/no-unused-vars': 2, // Disallow unused variables
    },
  },
  {
    plugins: { 'simple-import-sort': eslintPluginSimpleImportSort },
    rules: {
      'simple-import-sort/imports': 'error', // Enforce import sorting
      'simple-import-sort/exports': 'error', // Enforce export sorting
    },
  },
  {
    plugins: { prettier: eslintPluginPrettier },
    rules: {
      'prettier/prettier': ['error', eslintConfigPrettier], // Enforce prettier rules
    },
  },
  {
    plugins: { 'jsx-a11y': eslintPluginJsxA11y },
    rules: {
      'jsx-a11y/click-events-have-key-events': 0, // Allow click elements without a key event
      'jsx-a11y/no-static-element-interactions': 0, // Allow interactions on static elements
      'jsx-a11y/anchor-is-valid': 0, // Do not enforce anchors to have href
    },
  },
  {
    plugins: { react: eslintPluginReact },
    rules: {
      'react/no-unstable-nested-components': 0, // Allow unstable nested components
      'react/no-array-index-key': 0, // Allow usage of array index as a key
      'react/function-component-definition': 0, // Allow function components to be defined in any form
      'react/react-in-jsx-scope': 0, // No requirement for React to be in scope
      'react/prop-types': 0, // Do not enforce prop types validation
      'react/jsx-curly-brace-presence': 2, // Enforce curly braces around string literals in JSX attributes
      'react/jsx-filename-extension': 0, // No requirement for JSX file extensions
      'react/jsx-one-expression-per-line': 0, // Allow multiple JSX expressions per line
      'react/jsx-props-no-spreading': 0, // Allow spreading of props
      'react/jsx-curly-newline': 0, // No enforcement of linebreaks in JSX attributes
    },
  },
  {
    plugins: { tailwindcss: eslintPluginTailwindCss },
    rules: {
      'tailwindcss/migration-from-tailwind-2': 0, // No enforcement of tailwindcss v2 migration
      'tailwindcss/classnames-order': 0, // No enforcement of tailwindcss classnames order
      'tailwindcss/no-contradicting-classname': 0, // No enforcement of tailwindcss contradicting classnames
      'tailwindcss/enforces-negative-arbitrary-values': 0, // No enforcement of tailwindcss negative arbitrary values
    },
  }
)
