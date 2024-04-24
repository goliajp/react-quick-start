/** @type {import('postcss-load-config').Config} */
export default {
  plugins: {
    'postcss-import': {},
    tailwindcss: {},
    autoprefixer: {}, // Use the autoprefixer plugin, which adds vendor prefixes to CSS rules
  },
}
