import React, { type FC, lazy } from 'react'

import {
  remoteColumn,
  remoteColumns,
  remoteContainer,
  remoteHero,
  remoteIcon,
  remoteIconHiveIO,
} from '../../remotes'

const Column = lazy(remoteColumn)
const Columns = lazy(remoteColumns)
const Container = lazy(remoteContainer)
const Hero = lazy(remoteHero)
const Icon = lazy(remoteIcon)
const IconHiveIO = lazy(remoteIconHiveIO)

const Home: FC = () => (
  <Hero color='dark' size='fullheight' bold>
    <Container>
      <Columns vcentered>
        <Column numericSize={6} content>
          <h1 className='title'>
            <Icon size='medium' wrapper>
              <IconHiveIO />
            </Icon>
            Hive<sup>io</sup>
          </h1>
          <h2 className='subtitle'>A reactive, cloud-native framework for building microservices</h2>
        </Column>
        <Column numericSize={6}>
          graphic here
        </Column>
      </Columns>
    </Container>
  </Hero>
)
export default Home
