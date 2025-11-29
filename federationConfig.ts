import * as pkg from './package.json' with { type: 'json' }

export default {
  name: pkg.name,
  manifest: true,
  exposes: {
    './Routes': './src/routes',
  },
  shared: {
    ...pkg.dependencies,
    react: { singleton: true, requiredVersion: pkg.dependencies['react'] },
    'react-dom': { singleton: true, requiredVersion: pkg.dependencies['react-dom'] },
    'react-router': { singleton: true, requiredVersion: pkg.dependencies['react-router'] },
  },
}
