import * as path from 'path'
import FaviconsWebpackPlugin from 'favicons-webpack-plugin'
import externalLinks from 'remark-external-links'

const PUBLIC = path.resolve(__dirname, 'public')
const SRC = path.resolve(__dirname, 'src')

const modifyBundlerConfig = config => {
  config.resolve.alias = Object.assign({}, config.resolve.alias, {
    '@fonts': `${PUBLIC}/fonts`,
    '@images': `${PUBLIC}/images`,
    '@components': `${SRC}/theme/components`,
    '@styles': `${SRC}/theme/styles`,
  })

  config.plugins.push(
    new FaviconsWebpackPlugin({
      logo: `${PUBLIC}/images/favicon.png`,
      inject: true,
    })
  )

  return config
}

export default {
  base: '/',
  dest: '.docz/dist',
  title: '吾意静晴轩',
  description: 'Web applications built with Docz.',
  indexHtml: 'src/index.html',
  theme: 'src/theme/index',
  themeConfig: {
    mode: 'dark',
    /*logo: {
      src: null,
      width: null
    },*/
    colors: {
      primary: '#281f1d',
      main: '#00bf8f',
      link: '#00bf8f',
      grayExtraLight: '#ed1941',
    },
  },
  propsParser: false,
  mdPlugins: [externalLinks.default],
  modifyBundlerConfig,
}
