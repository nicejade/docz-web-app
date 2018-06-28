import * as path from 'path'
import { babel } from 'docz-plugin-babel6'
import FaviconsWebpackPlugin from 'favicons-webpack-plugin'

const PUBLIC = path.resolve(__dirname, 'public')
const SRC = path.resolve(__dirname, 'src')

const modifyBundlerConfig = config => {
  config.resolve.alias = Object.assign({}, config.resolve.alias, {
    '@fonts': `${PUBLIC}/fonts`,
    '@images': `${PUBLIC}/images`,
    '@components': `${SRC}/theme/components`,
    '@styles': `${SRC}/theme/styles`
  })

  config.plugins.push(
    new FaviconsWebpackPlugin({
      logo: `${PUBLIC}/images/favicon.png`,
      inject: true
    })
  )

  return config
}

export default {
  base: '/',
  title: '吾意静晴轩',
  description: 'Web applications built with Docz.',
  source: './',
  dest: '.docz/dist',
  typescript: true,
  files: '**/*.mdx',
  indexHtml: 'index.html',
  themeConfig: {
    mode: 'dark',
    /*logo: {
      src: null,
      width: null
    },*/
    colors: {
      primary: '#281f1d',
      main: '#20a0ff',
      link: '#20a0ff',
      grayExtraLight: '#ed1941'
    },
    styles: {
      h1: {
        fontSize: 32
      },
      h2: {
        margin: ['25px 0 20px', '30px 0 20px'],
        lineHeight: ['1.2em', '1.5em'],
        fontSize: [30, 32],
        fontWeight: 400,
      },
    }
  },
  plugins: [babel()],
  modifyBundlerConfig
}
