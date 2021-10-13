const isProduction = process.env.NODE_ENV === 'production'

const defaultPlugins = {
  'postcss-import': {},
  tailwindcss: {},
  autoprefixer: {},
}
const productionPlugins = {
  cssnano: {},
}

const plugins = isProduction
  ? { ...defaultPlugins, ...productionPlugins }
  : defaultPlugins

module.exports = {
  plugins,
}
