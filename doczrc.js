import * as path from 'path'

const PUBLIC = path.resolve(__dirname, 'public')
const SRC = path.resolve(__dirname, 'src')

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
  themeConfig: {
    mode: 'dark',
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
  modifyBundlerConfig
}