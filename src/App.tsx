import type { FC } from 'react'

import { lazy } from 'react'
import { init, preloadRemote } from '@module-federation/enhanced/runtime'
import { remoteContainer } from './remotes'
import cfg, { ASSETS } from './config'

init({
  name: cfg.name,
  remotes: [
    {
      name: cfg.remotes[ASSETS].name,
      entry: cfg.remotes[ASSETS].entry,
      alias: cfg.remotes[ASSETS].alias,
    },
  ],
})

preloadRemote([{ nameOrAlias: ASSETS }])

const Container = lazy(remoteContainer)

const App: FC = () => (
  <Container>
    <p>TODO</p>
  </Container>
)
export default App
