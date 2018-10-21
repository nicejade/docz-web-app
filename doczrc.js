import * as path from 'path'

const PUBLIC = path.resolve(__dirname, 'public')
const SRC = path.resolve(__dirname, 'src')
const themeConfig = require('./themeConfig').default
import { css } from 'docz-plugin-css'

const modifyBundlerConfig = config => {
  config.resolve.alias = Object.assign({}, config.resolve.alias, {
    '@fonts': `${PUBLIC}/fonts`,
    '@images': `${PUBLIC}/images`,
    '@components': `${SRC}/components`,
    '@styles': `${SRC}/styles`
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
  modifyBundlerConfig,
  plugins: [
    css({
      preprocessor: 'sass',
      // cssmodules: true,
      loaderOpts: {
        /* whatever your preprocessor loader accept */
      }
    })
  ]
}