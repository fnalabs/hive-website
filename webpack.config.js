const path = require('path')

const autoprefixer = require('autoprefixer')
const nodeExternals = require('webpack-node-externals')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const { InjectManifest } = require('workbox-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const NodemonPlugin = require('nodemon-webpack-plugin')
const PWAManifestPlugin = require('webpack-pwa-manifest')
const TerserPlugin = require('terser-webpack-plugin')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')
const WebpackShellPluginNext = require('webpack-shell-plugin-next')

const pkg = require('./package.json')

const isDev = process.env.NODE_ENV === 'development'

// define webapp plugins
const plugins = [
  new CleanWebpackPlugin(),
  new Dotenv(),
  new MiniCssExtractPlugin({
    filename: '[name].[contenthash:8].css'
  })
]
if (isDev) {
  plugins.push(
    new WebpackManifestPlugin({
      fileName: '../server/manifest.json'
    }),
    new WebpackShellPluginNext({
      onBuildEnd: {
        scripts: ['node ./bin/critical-css']
      },
      dev: false
    })
  )
} else {
  plugins.push(
    new PWAManifestPlugin({
      name: 'Hive^io Framework',
      short_name: 'Hive^io',
      description: 'A reactive, cloud-native framework for building microservices.',
      orientation: 'any',
      background_color: '#363636',
      theme_color: '#363636',
      icons: [
        {
          src: './src/assets/icons/icon_32x32.png',
          size: '32x32'
        },
        {
          src: './src/assets/icons/icon_57x57.png',
          size: '57x57'
        },
        {
          src: './src/assets/icons/icon_72x72.png',
          size: '72x72'
        },
        {
          src: './src/assets/icons/icon_114x114.png',
          size: '114x114'
        },
        {
          src: './src/assets/icons/icon_144x144.png',
          size: '144x144'
        },
        {
          src: './src/assets/icons/icon_192x192.png',
          size: '192x192'
        },
        {
          src: './src/assets/icons/icon_512x512.png',
          size: '512x512'
        }
      ],
      fingerprints: false,
      inject: false
    }),
    new InjectManifest({
      dontCacheBustURLsMatching: /\.\w{8}\./,
      manifestTransforms: [async manifest => {
        manifest.push(
          { url: '.', revision: pkg.version },
          { url: '/overview', revision: pkg.version },
          { url: '/model', revision: pkg.version },
          { url: '/domain', revision: pkg.version },
          { url: '/infrastructure', revision: pkg.version },
          { url: '/telemetry', revision: pkg.version },
          { url: '/start', revision: pkg.version },
          { url: '/setup', revision: pkg.version },
          { url: '/basic', revision: pkg.version },
          { url: '/rest', revision: pkg.version },
          { url: '/cqrs-es', revision: pkg.version },
          { url: '/documentation', revision: pkg.version },
          { url: '/environments', revision: pkg.version },
          { url: '/cookie', revision: pkg.version },
          { url: '/privacy', revision: pkg.version }
        )
        return { manifest, warnings: [] }
      }],
      swSrc: './src/client/sw.js'
    }),
    new WebpackManifestPlugin({
      fileName: '../server/manifest.json'
    }),
    new WebpackShellPluginNext({
      onBuildExit: {
        scripts: ['node ./bin/critical-start', 'node ./bin/critical-css'],
        parallel: true
      }
    })
  )
}

module.exports = [
  // client-side config
  {
    name: '- Web App',
    bail: !isDev,
    mode: process.env.NODE_ENV,
    entry: './src/client/index.jsx',
    output: {
      filename: '[name].[contenthash:8].js',
      path: path.resolve(__dirname, 'dist/client'),
      pathinfo: false,
      publicPath: ''
    },
    target: 'web',
    module: {
      rules: [
        {
          test: /\.m?jsx?$/,
          include: /src/,
          exclude: /node_modules/,
          use: 'babel-loader?cacheDirectory'
        }, {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2,
                sourceMap: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [
                    autoprefixer
                  ]
                },
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        }
      ]
    },
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          test: /\.m?jsx?$/,
          terserOptions: {
            compress: true,
            ie8: false,
            keep_classnames: false,
            keep_fnames: false,
            mangle: true,
            module: false,
            nameCache: null,
            safari10: false,
            sourceMap: true,
            warnings: false
          }
        }),
        new CssMinimizerPlugin({
          minimizerOptions: {
            preset: ['default', { discardComments: { removeAll: true } }]
          }
        })
      ]
    },
    plugins,
    resolve: {
      modules: [
        path.resolve(__dirname, 'src'),
        path.resolve(__dirname, 'src/assets'),
        path.resolve(__dirname, 'src/assets/components'),
        'node_modules'
      ],
      extensions: ['.jsx', '.js', '.json', '.mjs']
    },
    devtool: isDev ? 'cheap-source-map' : 'source-map',
    watch: isDev
  },
  // server-side config
  {
    name: '- SSR',
    bail: !isDev,
    mode: process.env.NODE_ENV,
    entry: './src/server/index.js',
    externals: [nodeExternals()],
    externalsPresets: { node: true },
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'dist/server'),
      pathinfo: false
    },
    target: 'node',
    module: {
      rules: [
        {
          test: /\.m?jsx?$/,
          include: /src/,
          exclude: /node_modules/,
          use: 'babel-loader?cacheDirectory'
        }
      ]
    },
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          test: /\.m?jsx?$/,
          terserOptions: {
            compress: true,
            ie8: false,
            keep_classnames: false,
            keep_fnames: false,
            mangle: true,
            module: false,
            nameCache: null,
            safari10: false,
            sourceMap: true,
            warnings: false
          }
        })
      ]
    },
    plugins: [
      new NodemonPlugin({
        script: './bin/start',
        watch: './dist/server'
      })
    ],
    resolve: {
      modules: [
        path.resolve(__dirname, 'src'),
        path.resolve(__dirname, 'src/assets'),
        path.resolve(__dirname, 'src/assets/components'),
        'node_modules'
      ],
      extensions: ['.jsx', '.js', '.json', '.mjs']
    },
    watch: isDev
  }
]
