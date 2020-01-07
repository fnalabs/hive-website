import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'
import ReactGA from 'react-ga'

import Consent from 'contexts/Consent'

import { Container } from 'common'
import { Info } from 'icons'

import NextPageHero from '../NextPageHero'

import meta from 'metadata'

export default class Rest extends Component {
  static contextType = Consent
  static contextTypes = {
    isConsent: PropTypes.bool
  }

  componentDidMount () {
    if (this.context.isConsent) {
      const title = `${meta.common.siteName} | ${meta['/rest'].title}`
      ReactGA.pageview(this.props.location.pathname, undefined, title)
    }
  }

  renderBreadcrumbs () {
    return (
      <>
        <li><Link to='/start'>Get Started</Link></li>
        <li><Link to='/setup'>Setup</Link></li>
        <li><Link to='/basic'>Basic</Link></li>
        <li className='is-active'><Link to='/rest' aria-current='page'>REST</Link></li>
        <li><Link to='/cqrs-es'>CQRS/ES</Link></li>
      </>
    )
  }

  render () {
    const { title, description, url } = meta['/rest']
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
            <h1>Example: REST</h1>
            <p>Let's expand on the Basic example with a REST service. The code below describes a minimal implementation of the domain logic and infrastructure as code to implement a REST service.</p>

            <h2><a href='https://www.npmjs.com/package/hive-io-rest-example' target='_blank' rel='noopener noreferrer'>Domain Logic</a> (<a href='https://github.com/fnalabs/hive-js-rest-example' target='_blank' rel='noopener noreferrer'>Source Code</a>)</h2>
            <div className='notification'>
              <span className='icon'><Info className='svg-inline' /></span>
              <span>You should consider using a private NPM registry or implementing more creative solutions such as extending base Docker images with <code>ADD</code>|<code>COPY</code> statements for source code or <code>npm link</code> for your domain logic.</span>
            </div>

            <h2>Infrastructure</h2>
            <dl>
              <dt><code>Dockerfile</code></dt>
              <dd>
                <pre>FROM fnalabs/hive-base-js:latest<br />RUN npm install hive-io-rest-example</pre>
              </dd>

              <dt><code>docker-compose.yml</code></dt>
              <dd>
                <pre>version: '3.5'<br />
services:<br />
&nbsp;&nbsp;hive-base-js:<br />
&nbsp;&nbsp;&nbsp;&nbsp;build: .<br />
&nbsp;&nbsp;&nbsp;&nbsp;image: hive-base-js<br />
&nbsp;&nbsp;&nbsp;&nbsp;environment:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ACTOR: PostActor<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ACTOR_LIB: hive-io-rest-example<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CLUSTER_SIZE: 1<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HTTP_VERSION: 1<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SECURE: "false"<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MONGO_URL: 'mongodb://mongo:27017/post'<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FLUENTD_HOST: fluentd<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FLUENTD_PORT: 24224<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FLUENTD_TIMEOUT: 3.0<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FLUENTD_RECONNECT: 600000<br />
&nbsp;&nbsp;&nbsp;&nbsp;depends_on:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- mongo<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- fluentd<br />
&nbsp;&nbsp;&nbsp;&nbsp;ports:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 80:3000<br />
&nbsp;&nbsp;&nbsp;&nbsp;networks:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- hive-io<br />
&nbsp;&nbsp;fluentd:<br />
&nbsp;&nbsp;&nbsp;&nbsp;image: fluent/fluentd:v1.7.4-1.0<br />
&nbsp;&nbsp;&nbsp;&nbsp;networks:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- hive-io<br />
&nbsp;&nbsp;&nbsp;&nbsp;restart: on-failure<br />
&nbsp;&nbsp;mongo:<br />
&nbsp;&nbsp;&nbsp;&nbsp;image: mongo:4.2.1<br />
&nbsp;&nbsp;&nbsp;&nbsp;networks:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- hive-io<br />
&nbsp;&nbsp;&nbsp;&nbsp;restart: on-failure<br />
# networking specifics<br />
networks:<br />
&nbsp;&nbsp;hive-io:<br />
&nbsp;&nbsp;&nbsp;&nbsp;driver: bridge</pre>{/* eslint-disable-line react/jsx-closing-tag-location */}
              </dd>
            </dl>
          </Container>
        </article>

        <NextPageHero breadcrumbs={this.renderBreadcrumbs} toLeft='/basic' toRight='/cqrs-es' />
      </>
    )
  }
}