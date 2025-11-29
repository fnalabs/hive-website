import pkg from '../package.json'

export const ASSETS = 'fnalabs_assets'

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
      entry: `http://localhost:2999/assets/mf-manifest.json`,
    },
  },
}
export default CONFIG
