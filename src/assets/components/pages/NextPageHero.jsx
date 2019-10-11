import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { AnalyticsLink } from 'common'
import { Hero, HeroBody } from 'common/hero'
import { ArrowRight } from 'icons'

const toRegex = /^https:\/\//

export default class NextPageHero extends Component {
  static propTypes = {
    to: PropTypes.string.isRequired
  }

  render () {
    const to = this.props.to

    return (
      <Hero size='small' className='is-hive'>
        <HeroBody centered>
          {toRegex.test(to)
            ? <AnalyticsLink to={to}><ArrowRight height='48' /></AnalyticsLink>
            : <Link to={to}><ArrowRight height='48' /></Link>}
        </HeroBody>
      </Hero>
    )
  }
}
