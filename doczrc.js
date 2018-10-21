import * as path from 'path'

const PUBLIC = path.resolve(__dirname, 'public')
const SRC = path.resolve(__dirname, 'src')
const themeConfig = require('./themeConfig').default

const modifyBundlerConfig = config => {
  config.resolve.alias = Object.assign({}, config.resolve.alias, {
    '@fonts': `${PUBLIC}/fonts`,
    '@images': `${PUBLIC}/images`,
    '@components': `${SRC}/theme/components`,
    '@styles': `${SRC}/theme/styles`
  })
  return config
}

export default {
  base: '/',
  title: '吾意静晴轩',
  description: 'Web applications built with Docz.',
  dest: '.docz/dist',
  typescript: true,
  htmlContext: {
    head: {
      links: [{
        rel: 'stylesheet',
        href: 'https://codemirror.net/theme/dracula.css'
      }]
    }
  },
  themeConfig: themeConfig,
  modifyBundlerConfig
}