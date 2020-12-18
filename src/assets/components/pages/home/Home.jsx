import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactGA from 'react-ga'

import Consent from 'contexts/Consent'

import { Header } from 'layout'

import { TopHero } from './TopHero'
import { MidHero } from './MidHero'
import NextPageHero from '../NextPageHero'

import meta from 'metadata'

export default class Home extends Component {
  static contextType = Consent
  static contextTypes = {
    isConsent: PropTypes.bool
  }

  componentDidMount () {
    if (this.context.isConsent) {
      ReactGA.pageview(this.props.location.pathname, undefined, meta.common.siteName)
    }
  }

  render () {
    const { description, url } = meta['/']

    return (
      <>
        <Header title={meta.common.siteName} description={description} url={url} />

        <TopHero />
        <MidHero />

        <NextPageHero toRight='/overview' />
      </>
    )
  }
}
