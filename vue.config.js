const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  configureWebpack: {
    resolve: {
      extensions: ['js', 'vue'],
      alias: {
        'pages': resolve('src/pages'),
        'components': resolve('src/components')
      }

    }
  },
  css: {
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            remUnit: 75
          })
        ]
      }
    }
  }
}