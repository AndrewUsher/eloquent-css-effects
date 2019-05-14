export default {
  css: ['~/assets/main.css'],
  plugins: ['~/plugins/highlight.js', '~/plugins/clipboard.js'],
  head: {
    title: 'Eloquent CSS Effects',
    meta: [
      { charset: 'utf8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        property: 'og:title',
        content: 'Eloquent CSS Effects'
      }
    ],
    link: [
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Nunito:400,700|Roboto+Mono'
      }
    ]
  }
}
