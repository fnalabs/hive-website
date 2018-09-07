import React from 'react'

import { Container, Tile } from '../../common'
import { Hero, HeroBody, HeroFooter } from '../../common/hero'

export const TopHero = () => (
  <Hero size='fullheight' color='light' bold>
    <HeroBody>
      <Container>
        <Tile type='ancestor'>
          <Tile type='parent'>
            <Tile type='child' size={6} vertical centered>
              <h1 className='title'>Hive<sup>io</sup></h1>
              <h2 className='subtitle'>A reactive, cloud-native framework for building RESTful microservices.</h2>
            </Tile>

            <Tile type='child' size={6}>
              <div className='svg-animation-container'>
                <div className='svg-animation is-mongo-svg is-svg-1' />
                <div className='svg-animation is-hive-svg is-svg-2' />
                <div className='svg-animation is-envoy-svg is-svg-3' />

                <div className='svg-animation is-elastic-svg is-svg-4' />
                <div className='svg-animation is-hive-svg is-svg-5' />
                <div className='svg-animation is-hive-svg is-svg-6' />
                <div className='svg-animation is-envoy-svg is-svg-7' />

                <div className='svg-animation is-redis-svg is-svg-8' />
                <div className='svg-animation is-kafka-svg is-svg-9' />
                <div className='svg-animation is-hive-svg is-svg-10' />
                <div className='svg-animation is-hive-svg is-svg-11' />
                <div className='svg-animation is-hive-svg is-svg-12' />
                <div className='svg-animation is-envoy-svg is-svg-13' />
                <div className='svg-animation is-envoy-svg is-svg-14' />
              </div>
            </Tile>
          </Tile>
        </Tile>
      </Container>
    </HeroBody>

    <HeroFooter centered>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512' height='24'><path d='M143 256.3L7 120.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0L313 86.3c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.4 9.5-24.6 9.5-34 .1zm34 192l136-136c9.4-9.4 9.4-24.6 0-33.9l-22.6-22.6c-9.4-9.4-24.6-9.4-33.9 0L160 352.1l-96.4-96.4c-9.4-9.4-24.6-9.4-33.9 0L7 278.3c-9.4 9.4-9.4 24.6 0 33.9l136 136c9.4 9.5 24.6 9.5 34 .1z' /></svg>
    </HeroFooter>
  </Hero>
)
