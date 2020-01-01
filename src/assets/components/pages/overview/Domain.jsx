import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'
import ReactGA from 'react-ga'

import Consent from 'contexts/Consent'

import { Container } from 'common'
import NextPageHero from '../NextPageHero'

import meta from 'metadata'

export default class Domain extends Component {
  static contextType = Consent
  static contextTypes = {
    isConsent: PropTypes.bool
  }

  componentDidMount () {
    if (this.context.isConsent) {
      const title = `${meta.common.siteName} | ${meta['/domain'].title}`
      ReactGA.pageview(this.props.location.pathname, undefined, title)
    }
  }

  renderBreadcrumbs () {
    return (
      <>
        <li><Link to='/overview'>Overview</Link></li>
        <li><Link to='/model'>Data Model</Link></li>
        <li className='is-active'><Link to='/domain' aria-current='page'>Domain Logic</Link></li>
        <li><Link to='/infrastructure'>Infrastructure</Link></li>
      </>
    )
  }

  render () {
    const { title, description, url } = meta['/domain']
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
            <h1>Domain Logic</h1>
            <p>Domain needs vary greatly for a variety of concerns such as storage, security, monitoring, and more. There are a plethora of options available in each of those categories and the list continues to grow. Hive<sup>io</sup> is the glue that binds them. Regardless of the desired patterns, the same atomic operations can be applied. The first opinion Hive<sup>io</sup> makes is with the <a href='https://en.wikipedia.org/wiki/Actor_model' target='_blank' rel='noopener noreferrer'>Actor Model</a>.</p>

            <h2>Actor Model</h2>
            <p>The Actor Model consists of 'actors' as universal primitives of concurrent computation. Hive<sup>io</sup> Actors perform actions on command by making local decisions, calling on other actors to perform various actions, or sending messages to other actors through various means. This is a relatively plain but powerful concept that provides the basic building blocks for your application logic. Most development time is spent within this construct. Actors have various channels with which they communicate:</p>
            <dl>
              <dt><em><strong>Immediate</strong></em></dt>
              <dd>Asynchronously making local decisions or calling on another actor to perform.</dd>

              <dt><em><strong>Eventual</strong></em></dt>
              <dd>Sending messages via an internal (<a href='https://fnalabs.github.io/hive-js/#system' target='_blank' rel='noopener noreferrer'>Actor System</a>) or external (<a href='https://kafka.apache.org/' target='_blank' rel='noopener noreferrer'>Kafka</a>) message bus.</dd>
            </dl>
            <p>Hive<sup>io</sup> Actors are able to achieve highly concurrent operations by leveraging <a href='https://nodejs.org/' target='_blank' rel='noopener noreferrer'>Node.js</a>' non-blocking, asynchronous I/O. These actors can be arranged to perform tasks for a variety of architectures. Everything is asynchronous from the ground up, even validation via transport schemas.</p>
          </Container>
        </article>

        <NextPageHero breadcrumbs={this.renderBreadcrumbs} toLeft='/model' toRight='/infrastructure' />
      </>
    )
  }
}
