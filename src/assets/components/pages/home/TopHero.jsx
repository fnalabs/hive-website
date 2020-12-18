import React from 'react'
import { NavLink } from 'react-router-dom'

import { Container, Tile } from 'common'
import { Hero, HeroBody, HeroFooter } from 'common/hero'
import { ArrowDown, HiveIO, OpenTelemetry } from 'icons'

export const TopHero = () => (
  <Hero size='fullheight' color='light' bold>
    <HeroBody>
      <Container>
        <Tile type='ancestor'>
          <Tile type='parent'>
            <Tile type='child' size={6} vertical centered>
              <h1 className='title'><HiveIO className='svg-inline' height='32' />Hive<sup>io</sup></h1>
              <h2 className='subtitle'>A reactive, cloud-native framework for building microservices.</h2>
              <h2 className='subtitle'>
                <OpenTelemetry className='svg-link' height='32' />
                Now integrated with <NavLink to='/telemetry'>OpenTelemetry</NavLink>!
              </h2>
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

    <HeroFooter centered><span className='icon is-medium'><ArrowDown height='32' /></span></HeroFooter>
  </Hero>
)
