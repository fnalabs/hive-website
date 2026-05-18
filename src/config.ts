import pkg from '../package.json'

export const HOST = process.env.HOST || 'http://localhost:3001'
export const ROUTE = process.env.ROUTE || '/hive'

export const NODE_ENV = process.env.NODE_ENV || 'development'
export const IS_DEV = NODE_ENV === 'development'
export const SW_ROUTE = `${HOST}${ROUTE}/sw.js`

export const ASSETS = 'fnalabs_assets'
export const FEDERATION_HOSTS = IS_DEV
  ? {
      [ASSETS]: 'http://localhost:2999',
    }
  : {
      [ASSETS]: 'https://fnalabs.github.io/fnalabs-assets',
    }

export interface IConfig {
  name: string
  remotes: {
    [key: string]: {
      name: string
      entry: string
    }
  }
}
const CONFIG = {
  name: pkg.name,
  remotes: {
    [ASSETS]: {
      name: ASSETS,
      entry: `${FEDERATION_HOSTS[ASSETS]}/assets/mf-manifest.json`,
    },
  },
}
export default CONFIG
