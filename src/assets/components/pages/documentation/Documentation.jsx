import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'
import ReactGA from 'react-ga'

import Consent from 'contexts/Consent'

import { AnalyticsLink, Container } from 'common'

import NextPageHero from '../NextPageHero'

import meta from 'metadata'

export default class Basic extends Component {
  static contextType = Consent
  static contextTypes = {
    isConsent: PropTypes.bool
  }

  componentDidMount () {
    if (this.context.isConsent) {
      const title = `${meta.common.siteName} | ${meta['/documentation'].title}`
      ReactGA.pageview(this.props.location.pathname, undefined, title)
    }
  }

  renderBreadcrumbs () {
    return (
      <>
        <li className='is-active'><Link to='/documentation' aria-current='page'>Documentation</Link></li>
        <li><Link to='/environments'>Environments</Link></li>
        <li><AnalyticsLink to='https://fnalabs.github.io/hive-js/' target='_blank' rel='noopener noreferrer'>API</AnalyticsLink></li>
      </>
    )
  }

  render () {
    const { title, description, url } = meta['/documentation']
    const siteName = meta.common.siteName

    return (
      <>
        <Helmet>
          <title>{siteName} | {title}</title>
          <meta name='description' content={description} />
          <link rel='canonical' href={url} />

          <meta property='og:title' content={`${siteName} | ${title}`} />
          <meta property='og:description' content={description} />
          <meta property='og:site_name' content={siteName} />
          <meta property='og:url' content={url} />
          <meta property='og:type' content='website' />
        </Helmet>

        <article className='section is-fullheight is-medium'>
          <Container content>
            <h1>Documentation</h1>
            <p>Below you will find a sitemap for API documenatation of the Hive<sup>io</sup> library. Also included is all of the environment variables for each microservice image on the next page.</p>

            <h2>API</h2>
            <p><strong><em>NOTE:</em></strong> These pages are currently available online only.</p>
            <nav className='menu'>
              <ul className='menu-list'>
                <li>
                  <AnalyticsLink to='https://fnalabs.github.io/hive-js/' target='_blank' rel='noopener noreferrer'>Home</AnalyticsLink>
                  <ul>
                    <li><AnalyticsLink to='https://fnalabs.github.io/hive-js/Actor.html' target='_blank' rel='noopener noreferrer'>Actor</AnalyticsLink></li>
                    <li><AnalyticsLink to='https://fnalabs.github.io/hive-js/MessageActor.html' target='_blank' rel='noopener noreferrer'>MessageActor</AnalyticsLink></li>
                    <li><AnalyticsLink to='https://fnalabs.github.io/hive-js/Model.html' target='_blank' rel='noopener noreferrer'>Model</AnalyticsLink></li>
                    <li><AnalyticsLink to='https://fnalabs.github.io/hive-js/Schema.html' target='_blank' rel='noopener noreferrer'>Schema</AnalyticsLink></li>
                    <li><AnalyticsLink to='https://fnalabs.github.io/hive-js/System.html' target='_blank' rel='noopener noreferrer'>System</AnalyticsLink></li>
                    <li><AnalyticsLink to='https://fnalabs.github.io/hive-js/global.html' target='_blank' rel='noopener noreferrer'>Globals</AnalyticsLink></li>
                  </ul>
                </li>
              </ul>
            </nav>
          </Container>
        </article>

        <NextPageHero breadcrumbs={this.renderBreadcrumbs} toLeft='/cqrs-es' toRight='/environments' />
      </>
    )
  }
}
