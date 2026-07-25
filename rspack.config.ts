import { DefinePlugin, ProgressPlugin } from '@rspack/core'
import { ReactRefreshRspackPlugin } from '@rspack/plugin-react-refresh'
import { InjectManifest } from '@aaroon/workbox-rspack-plugin'
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack'
import federationConfig from './federationConfig'

const HOST = process.env.HOST ?? 'http://localhost:3001'
const ROUTE = process.env.ROUTE ?? '/hive'

const NODE_ENV = process.env.NODE_ENV || 'production';
const IS_DEV = NODE_ENV === 'development'

const defaultConfig = {
  entry: { main: './src/index.tsx' },
  resolve: { extensions: ['...', '.ts', '.tsx', '.jsx'] },
  output: {
    name: '[name].[contenthash].js',
    path: `./dist${ROUTE}`,
    publicPath: `${HOST}${ROUTE}/`,
    clean: true
  },
  module: {
    rules: [
      { test: /\.svg$/, type: 'asset' },
      {
        test: /\.(jsx?|tsx?)$/,
        exclude: /(node_modules|\.webpack)/,
        use: [
          {
            loader: 'builtin:swc-loader',
            options: {
              sourceMap: true,
              jsc: {
                externalHelpers: true,
                parser: { syntax: 'typescript', tsx: true },
                transform: { react: { runtime: 'automatic', development: IS_DEV, refresh: IS_DEV } },
              },
              env: { targets: [
                'defaults and fully supports es6-module',
              ]},
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ProgressPlugin({}),
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
      'process.env.ROUTE': JSON.stringify(ROUTE),
      'process.env.HOST': JSON.stringify(HOST),
    }),
    new ModuleFederationPlugin(federationConfig),
  ],
}

const config = () => {
  return IS_DEV
    ? {
        ...defaultConfig,
        devServer: {
          port: 3001,
          static: { directory: `./dist${ROUTE}` },
          liveReload: true,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
          },
        },
        devtool: 'eval',
        plugins: [
          ...defaultConfig.plugins,
          new ReactRefreshRspackPlugin(),
        ],
        watch: true,
      }
    : {
        ...defaultConfig,
        output: { ...defaultConfig.output, path: `./docs${ROUTE}` },
        devtool: 'source-map',
        optimization: { minimize: true },
        plugins: [
          ...defaultConfig.plugins,
          new InjectManifest({
            swDest: 'sw.js',
            swSrc: './src/Worker.ts',
          }),
        ],
      }
}
export default config
