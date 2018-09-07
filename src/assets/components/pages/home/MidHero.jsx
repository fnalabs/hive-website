import React from 'react'

import { Container, Tile } from '../../common'
import { Hero, HeroBody } from '../../common/hero'

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
              <svg className='is-hive' height='72' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 117.31758 135.46667'><path d='m 58.658792,6.7627869 52.802038,30.4852731 0,60.970543 L 58.658789,128.70387 5.8567507,98.2186 l 1.7e-6,-60.970543 z' fill='none' strokeWidth='12' /></svg>
            </Tile>
          </Tile>
        </Tile>
      </Container>
    </HeroBody>
  </Hero>
)
