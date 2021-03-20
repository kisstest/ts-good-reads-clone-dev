// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  devServer: {
    host: 'localhost',
    port: 3333,
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src/'),
      },
    },
    devtool: 'source-map',
    performance: {
      hints: false,
    },
    module: {
      rules: [
        {
          test: /\.(s*)css$/,
          use: ['postcss-loader'],
        },
      ],
    },
  },
};
