import pkg from '../package.json'

export const ASSETS = 'fnalabs_assets'

const CONFIG = {
  name: pkg.name,
  remotes: {
    [ASSETS]: {
      name: ASSETS,
      entry: `http://localhost:2999/assets/mf-manifest.json`,
      alias: ASSETS,
    },
  },
}
export default CONFIG
