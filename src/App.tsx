import type { FC } from 'react'

import { lazy } from 'react'
import { getInstance, preloadRemote, registerRemotes } from '@module-federation/enhanced/runtime'
import { remoteContainer } from './remotes'
import cfg, { ASSETS } from './config'

getInstance()
registerRemotes([
  {
    name: cfg.remotes[ASSETS].name,
    entry: cfg.remotes[ASSETS].entry,
  },
])
preloadRemote([{ nameOrAlias: ASSETS }])

const Container = lazy(remoteContainer)

const App: FC = () => (
  <Container>
    <p>TODO</p>
  </Container>
)
export default App
