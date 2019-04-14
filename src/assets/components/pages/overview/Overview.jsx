import React, { Component, Fragment } from 'react'
import Helmet from 'react-helmet'
import { Cookies } from 'react-cookie-consent'
import ReactGA from 'react-ga'

import { Container } from 'common'

import { Intro } from './Intro'
import { Business } from './Business'
import { Model } from './Model'
import { Infrastructure } from './Infrastructure'
import NextPageHero from '../NextPageHero'

import meta from 'metadata'

export default class Overview extends Component {
  componentDidMount () {
    if (Cookies.get('CookieConsent')) {
      const title = `${meta['/overview'].title} | ${meta.common.siteName}`
      ReactGA.pageview(this.props.location.pathname, undefined, title)
    }
  }

  render () {
    const { title, description, url } = meta['/overview']
    const siteName = meta.common.siteName

    return (
      <Fragment>
        <Helmet>
          <title>{title} | {siteName}</title>
          <meta name='description' content={description} />
          <link rel='canonical' href={url} />

          <meta property='og:title' content={`${title} | ${siteName}`} />
          <meta property='og:description' content={description} />
          <meta property='og:site_name' content={siteName} />
          <meta property='og:url' content={url} />
          <meta property='og:type' content='website' />
        </Helmet>

        <article className='section has-nav-spacing'>
          <Container content>
            <Intro />
            <Business />
            <Model />
            <Infrastructure />
          </Container>
        </article>

        <NextPageHero to='/start' />
      </Fragment>
    )
  }
}
