/** @type {import("prettier").Config} */
export default {
  trailingComma: 'es5', // Include trailing commas where valid in ES5 (objects, arrays etc.)
  tabWidth: 2, // Indent lines with 2 spaces
  printWidth: 80, // Wrap lines when they exceed 80 characters
  semi: false, // Omit semicolons at the end of statements
  singleQuote: true, // Use single quotes instead of double quotes
  jsxSingleQuote: false, // Use double quotes in JSX
  plugins: ['prettier-plugin-tailwindcss'],
}
