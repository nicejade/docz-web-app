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
  title: '静晴轩',
  description: 'Web applications built with Docz.',
  source: './',
  dest: '.docz/dist',
  typescript: true,
  files: '**/*.mdx',
  indexHtml: 'index.html',
  themeConfig: {
    colors: {
      primary: 'tomato'
    },
    styles: {
      h1: {
        fontSize: 100
      }
    }
  },
  plugins: [babel()],
  modifyBundlerConfig
}
