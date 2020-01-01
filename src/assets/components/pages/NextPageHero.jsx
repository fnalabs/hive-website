import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { AnalyticsLink, Breadcrumbs } from 'common'
import { Hero, HeroBody } from 'common/hero'
import { ArrowLeft, ArrowRight } from 'icons'

const toRegex = /^https:\/\//

export default class NextPageHero extends Component {
  static propTypes = {
    breadcrumbs: PropTypes.func,
    toLeft: PropTypes.string,
    toRight: PropTypes.string.isRequired
  }

  render () {
    const { breadcrumbs, toLeft, toRight } = this.props

    return (
      <Hero size='small' className='is-hive'>
        <HeroBody centered>
          {toLeft && <Link to={toLeft}><ArrowLeft height='48' /></Link>}

          {breadcrumbs && <Breadcrumbs breadcrumbs={breadcrumbs} />}

          {toRegex.test(toRight)
            ? <AnalyticsLink to={toRight}><ArrowRight height='48' /></AnalyticsLink>
            : <Link to={toRight}><ArrowRight height='48' /></Link>}
        </HeroBody>
      </Hero>
    )
  }
}
