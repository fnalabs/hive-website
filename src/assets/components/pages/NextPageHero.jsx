import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { AnalyticsLink } from 'common'
import { Hero, HeroBody } from 'common/hero'
import { ArrowLeft, ArrowRight } from 'icons'

const toRegex = /^https:\/\//

export default class NextPageHero extends Component {
  static propTypes = {
    toLeft: PropTypes.string,
    toRight: PropTypes.string.isRequired
  }

  render () {
    const { toLeft, toRight } = this.props

    return (
      <Hero size='small' className='is-hive'>
        <HeroBody>
          <nav className='level is-mobile'>
            {toLeft && (
              <div className='level-item has-text-centered'>
                <Link to={toLeft} aria-label='previous page'><span className='icon is-large'><ArrowLeft height='48' /></span></Link>
              </div>)}

            <div className='level-item has-text-centered'>
              {toRegex.test(toRight)
                ? <AnalyticsLink to={toRight} aria-label='next page'><span className='icon is-large'><ArrowRight height='48' /></span></AnalyticsLink>
                : <Link to={toRight} aria-label='next page'><span className='icon is-large'><ArrowRight height='48' /></span></Link>}
            </div>
          </nav>
        </HeroBody>
      </Hero>
    )
  }
}
