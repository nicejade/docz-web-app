export const imports = {
  'home/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "home-index" */ 'home/index.mdx'),
  'works/pages/docz/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "works-pages-docz-index" */ 'works/pages/docz/index.mdx'),
  'works/pages/vuepress/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "works-pages-vuepress-index" */ 'works/pages/vuepress/index.mdx'),
}
