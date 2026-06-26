import * as pkg from './package.json' with { type: 'json' }

export default {
  name: pkg.name,
  manifest: true,
  exposes: {
    './Routes': './src/routes',
  },
  shared: {
    ...pkg.dependencies,
    '@module-federation/enhanced': { singleton: true, requiredVersion: pkg.dependencies['@module-federation/enhanced'] },
    react: { singleton: true, requiredVersion: pkg.dependencies['react'] },
    'react-dom': { singleton: true, requiredVersion: pkg.dependencies['react-dom'] },
    'react-router': { singleton: true, requiredVersion: pkg.dependencies['react-router'] },
  },
}
