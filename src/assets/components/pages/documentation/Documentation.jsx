import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import ReactGA from 'react-ga'

import Consent from 'contexts/Consent'

import { AnalyticsLink, Container } from 'common'

import AsideMenu from '../AsideMenu'
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

        <article className='section is-medium'>
          <Container>
            <div className='columns'>
              <header className='column is-narrow is-hidden-touch'>
                <AsideMenu />
              </header>
              <section className='column content' role='document'>
                <h1>Documentation</h1>
                <p>Below you will find a sitemap for API documentation of the Hive<sup>io</sup> library. There are links to each of the Classes and links to their methods. Also, included on the next page is all of the environment variables for each microservice image.</p>

                <h2>API</h2>
                <p><em><strong>NOTE:</strong></em> These pages are currently available online only.</p>
                <nav>
                  <ul>
                    <li><AnalyticsLink to='https://fnalabs.github.io/hive-io/' target='_blank' rel='noopener noreferrer'>Home</AnalyticsLink>
                      <ul>
                        <li><AnalyticsLink to='https://fnalabs.github.io/hive-io/Actor.html' target='_blank' rel='noopener noreferrer'>Actor</AnalyticsLink>
                          <ul>
                            <li><AnalyticsLink to='https://fnalabs.github.io/hive-io/Actor.html#assign' target='_blank' rel='noopener noreferrer'>assign</AnalyticsLink></li>
                            <li><AnalyticsLink to='https://fnalabs.github.io/hive-io/Actor.html#perform' target='_blank' rel='noopener noreferrer'>perform</AnalyticsLink></li>
                            <li><AnalyticsLink to='https://fnalabs.github.io/hive-io/Actor.html#replay' target='_blank' rel='noopener noreferrer'>replay</AnalyticsLink></li>
                          </ul>
                        </li>

                        <li><AnalyticsLink to='https://fnalabs.github.io/hive-io/MessageActor.html' target='_blank' rel='noopener noreferrer'>MessageActor</AnalyticsLink>
                          <ul>
                            <li><AnalyticsLink to='https://fnalabs.github.io/hive-io/MessageActor.html#assign' target='_blank' rel='noopener noreferrer'>assign</AnalyticsLink></li>
                            <li><AnalyticsLink to='https://fnalabs.github.io/hive-io/MessageActor.html#perform' target='_blank' rel='noopener noreferrer'>perform</AnalyticsLink></li>
                            <li><AnalyticsLink to='https://fnalabs.github.io/hive-io/Actor.html#replay' target='_blank' rel='noopener noreferrer'>replay</AnalyticsLink></li>
                          </ul>
                        </li>

                        <li><AnalyticsLink to='https://fnalabs.github.io/hive-io/Model.html' target='_blank' rel='noopener noreferrer'>Model</AnalyticsLink>
                          <ul>
                            <li><AnalyticsLink to='https://fnalabs.github.io/hive-io/Model.html#.errors' target='_blank' rel='noopener noreferrer'>errors</AnalyticsLink></li>
                            <li><AnalyticsLink to='https://fnalabs.github.io/hive-io/Model.html#.schema' target='_blank' rel='noopener noreferrer'>schema</AnalyticsLink></li>
                            <li><AnalyticsLink to='https://fnalabs.github.io/hive-io/Model.html#.validate' target='_blank' rel='noopener noreferrer'>validate</AnalyticsLink></li>
                            <li><AnalyticsLink to='https://fnalabs.github.io/hive-io/Model.html#.version' target='_blank' rel='noopener noreferrer'>version</AnalyticsLink></li>
                            <li><AnalyticsLink to='https://fnalabs.github.io/hive-io/Model.html#toJSON' target='_blank' rel='noopener noreferrer'>toJSON</AnalyticsLink></li>
                          </ul>
                        </li>

                        <li><AnalyticsLink to='https://fnalabs.github.io/hive-io/Schema.html' target='_blank' rel='noopener noreferrer'>Schema</AnalyticsLink>
                          <ul>
                            <li><AnalyticsLink to='https://fnalabs.github.io/hive-io/Schema.html#assign' target='_blank' rel='noopener noreferrer'>assign</AnalyticsLink></li>
                            <li><AnalyticsLink to='https://fnalabs.github.io/hive-io/Schema.html#validate' target='_blank' rel='noopener noreferrer'>validate</AnalyticsLink></li>
                          </ul>
                        </li>

                        <li><AnalyticsLink to='https://fnalabs.github.io/hive-io/System.html' target='_blank' rel='noopener noreferrer'>System</AnalyticsLink>
                          <ul>
                            <li><AnalyticsLink to='https://fnalabs.github.io/hive-io/System.html#emit' target='_blank' rel='noopener noreferrer'>emit</AnalyticsLink></li>
                            <li><AnalyticsLink to='https://fnalabs.github.io/hive-io/System.html#on' target='_blank' rel='noopener noreferrer'>on</AnalyticsLink></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </section>
            </div>
          </Container>
        </article>

        <NextPageHero toLeft='/cqrs-es' toRight='/environments' />
      </>
    )
  }
}
