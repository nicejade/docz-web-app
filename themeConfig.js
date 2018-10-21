const colors = {
  white: '#FFFFFF',
  grayExtraLight: '#EEF1F5',
  grayLight: '#CED4DE',
  gray: '#7D899C',
  grayDark: '#2D3747',
  grayExtraDark: '#1D2330',
  dark: '#13161F',
  blue: '#20a0ff',
  skyBlue: '#1FB6FF',
}

export default {
  /**
   * ****************Mode
   */
  mode: 'dark', // you can use: 'dark' or 'light'
  /**
   * ****************Customize codemirror theme
   */
  codemirrorTheme: 'dracula',
  /**
   * ****************Logo
   */
  // logo: {
  //   src: '',
  //   width: null,
  // },
  /**
   * ****************Colors (depends on select mode)
   */
  colors: {
    /** properties bellow depends on mode select */
    primary: colors.blue,
    link: colors.blue,
    // theadColor: colors.gray,
    // theadBg: colors.grayExtraLight,
    // text: colors.white,
    // footerText: colors.grayDark,
    // sidebarBg: colors.grayExtraLight,
    // sidebarPrimary: colors.grayDark,
    // sidebarText: colors.white,
    // background: colors.dark,
    // border: colors.grayLight,
    // tableColor: colors.white,
    // tooltipBg: colors.white,
    // tooltipColor: colors.grayExtraLight,
    // codeBg: colors.grayExtraLight,
    // codeColor: colors.white,
    // preBg: colors.grayExtraLight,
    // blockquoteBg: colors.grayExtraLight,
    // blockquoteBorder: colors.grayLight,
    // blockquoteColor: colors.white,
  },
  /**
   * ****************Styles
   */
  styles: {
    body: {
      fontFamily: "'Source Sans Pro', Helvetica, sans-serif",
      fontSize: 16,
      lineHeight: 1.6,
    },
    container: {
      width: '100%',
      padding: ['20px 30px', '30px 40px 40px'],
    },
    h1: {
      margin: ['40px 0 20px', '60px 0 20px', '40px 0'],
      fontSize: [36, 42, 48],
      fontWeight: 100,
      letterSpacing: '-0.02em',
    },
    h2: {
      margin: ['20px 0 20px', '35px 0 20px'],
      lineHeight: ['1.2em', '1.5em'],
      fontSize: 28,
      fontWeight: 600,
      letterSpacing: '-0.02em',
    },
    h3: {
      margin: '25px 0 10px',
      fontSize: [22, 24],
      fontWeight: 400,
    },
    h4: {
      fontSize: 20,
      fontWeight: 400,
    },
    h5: {
      fontSize: 18,
      fontWeight: 400,
    },
    h6: {
      fontSize: 16,
      fontWeight: 400,
    },
    list: {
      padding: 0,
      margin: '10px 0 10px 20px',
    },
    playground: {
      padding: ['1.5em', '2em'],
    },
    code: {
      margin: '0 3px',
      padding: '2px 6px',
      borderRadius: '3px',
      fontFamily: '"Source Code Pro", monospace',
      fontSize: 14,
    },
    pre: {
      fontFamily: '"Source Code Pro", monospace',
      fontSize: 14,
      lineHeight: 1.8,
    },
    table: {
      marginBottom: [20, 40],
      fontFamily: '"Source Code Pro", monospace',
      fontSize: 14,
    },
    blockquote: {
      margin: '25px 0',
      padding: '20px',
      fontStyle: 'italic',
      fontSize: 18,
    },
    img: {
      width: 100,
    },
  }
}