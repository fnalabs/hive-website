import React, { type FC, lazy } from 'react'

import { remoteContainer } from '../../remotes'

const Container = lazy(remoteContainer)

const Api: FC = () => (
  <Container>
    <h1 className='title'>API Reference</h1>
  </Container>
)
export default Api
