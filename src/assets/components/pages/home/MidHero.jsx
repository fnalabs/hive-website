import React from 'react'

import { Container, Tile } from 'common'
import { Hero, HeroBody } from 'common/hero'
import { HiveIO } from 'icons'

import {
  CloudNative,
  Elastic,
  FlexibleRobust,
  MessageDriven,
  Resilient,
  Responsive
} from './cards'

export const MidHero = () => (
  <Hero className='neon-tiles' size='medium' color='dark' bold>
    <HeroBody>
      <Container>
        <Tile type='ancestor'>
          <Tile size={8}>
            <Tile vertical>
              <Tile type='parent'>
                <Tile type='child'>
                  <Responsive />
                </Tile>
              </Tile>

              <Tile type='parent'>
                <Tile type='child'>
                  <Resilient />
                </Tile>
              </Tile>
            </Tile>

            <Tile vertical>
              <Tile type='parent'>
                <Tile type='child'>
                  <Elastic />
                </Tile>
              </Tile>

              <Tile type='parent'>
                <Tile type='child'>
                  <MessageDriven />
                </Tile>
              </Tile>
            </Tile>
          </Tile>

          <Tile type='parent'>
            <Tile type='child'>
              <CloudNative />
            </Tile>
          </Tile>
        </Tile>

        <Tile type='ancestor'>
          <Tile type='parent' size={8}>
            <Tile type='child'>
              <FlexibleRobust />
            </Tile>
          </Tile>

          <Tile type='parent'>
            <Tile type='child' centeredMobile>
              <HiveIO className='is-hive' height='72' />
            </Tile>
          </Tile>
        </Tile>
      </Container>
    </HeroBody>
  </Hero>
)
