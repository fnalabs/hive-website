/* eslint-disable react/jsx-indent */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactGA from 'react-ga'

import Consent from 'contexts/Consent'

import { Container } from 'common'
import { Info } from 'icons'
import { Header } from 'layout'

import AsideMenu from '../AsideMenu'
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

  render () {
    const { title, description, url } = meta['/rest']

    return (
      <>
        <Header title={`${meta.common.siteName} | ${title}`} description={description} url={url} />

        <article className='section is-medium'>
          <Container>
            <div className='columns'>
              <header className='column is-narrow is-hidden-touch'>
                <AsideMenu />
              </header>
              <section className='column content' role='document'>
                <h1>Example: REST</h1>
                <p>Let's expand on the Basic example with a REST service. The code below describes a minimal implementation of the domain logic and infrastructure as code to implement a REST service.</p>

                <h2><a href='https://www.npmjs.com/package/hive-io-rest-example' target='_blank' rel='noopener noreferrer'>Domain Logic</a> (<a href='https://github.com/fnalabs/hive-io/tree/master/packages/hive-js-rest-example' target='_blank' rel='noopener noreferrer'>Source Code</a>)</h2>
                <div className='notification'>
                  <span className='icon'><Info className='svg-inline' /></span>
                  <span>You should consider using a private NPM registry or implementing more creative solutions such as extending base Docker images with <code>ADD</code>|<code>COPY</code> statements for source code or <code>npm link</code> for your domain logic.</span>
                </div>

                <h2><a href='https://github.com/fnalabs/hive-io/tree/master/dev/docker/rest/production' target='_blank' rel='noopener noreferrer'>Infrastructure</a></h2>
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
&nbsp;&nbsp;&nbsp;&nbsp;image: hive-base-js:production<br />
&nbsp;&nbsp;&nbsp;&nbsp;container_name: hive-base-js<br />
&nbsp;&nbsp;&nbsp;&nbsp;environment:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ACTOR: ContentActor<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ACTOR_LIB: hive-io-rest-example<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ACTOR_URLS: "/contents,/contents/:id"<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CLUSTER_SIZE: 1<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HTTP_VERSION: 1<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SECURE: "false"<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TELEMETRY: "true"<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TELEMETRY_URL_METRICS: "http://collector:55681/v1/metrics"<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TELEMETRY_URL_TRACES: "http://collector:55681/v1/trace"<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MONGO_URL: 'mongodb://mongo:27017/content'<br />
&nbsp;&nbsp;&nbsp;&nbsp;depends_on:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- collector<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- mongo<br />
&nbsp;&nbsp;&nbsp;&nbsp;ports:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 80:3000<br />
&nbsp;&nbsp;&nbsp;&nbsp;networks:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- hive-io<br />
&nbsp;&nbsp;mongo:<br />
&nbsp;&nbsp;&nbsp;&nbsp;image: mongo:4.4.2<br />
&nbsp;&nbsp;&nbsp;&nbsp;container_name: mongo<br />
&nbsp;&nbsp;&nbsp;&nbsp;networks:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- hive-io<br />
&nbsp;&nbsp;&nbsp;&nbsp;restart: on-failure<br /><br />
&nbsp;&nbsp;# telemetry<br />
&nbsp;&nbsp;# NOTE: you will need to provide a configuration for the collector<br />
&nbsp;&nbsp;#       see https://github.com/fnalabs/hive-io/blob/master/dev/collector/collector-config.yml<br />
&nbsp;&nbsp;collector:<br />
&nbsp;&nbsp;&nbsp;&nbsp;image: otel/opentelemetry-collector:0.16.0<br />
&nbsp;&nbsp;&nbsp;&nbsp;container_name: collector<br />
&nbsp;&nbsp;&nbsp;&nbsp;command: ["--config=/conf/collector-config.yml", "--log-level=ERROR"]<br />
&nbsp;&nbsp;&nbsp;&nbsp;depends_on:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- zipkin<br />
&nbsp;&nbsp;&nbsp;&nbsp;networks:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- hive-io<br />
&nbsp;&nbsp;&nbsp;&nbsp;restart: on-failure<br />
&nbsp;&nbsp;zipkin:<br />
&nbsp;&nbsp;&nbsp;&nbsp;image: openzipkin/zipkin:2.23.1<br />
&nbsp;&nbsp;&nbsp;&nbsp;container_name: zipkin<br />
&nbsp;&nbsp;&nbsp;&nbsp;ports:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 9411:9411<br />
&nbsp;&nbsp;&nbsp;&nbsp;networks:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- hive-io<br />
&nbsp;&nbsp;&nbsp;&nbsp;restart: on-failure<br /><br />
# networking<br />
networks:<br />
&nbsp;&nbsp;hive-io:<br />
&nbsp;&nbsp;&nbsp;&nbsp;driver: bridge</pre>{/* eslint-disable-line react/jsx-closing-tag-location */}
                  </dd>
                </dl>
              </section>
            </div>
          </Container>
        </article>

        <NextPageHero toLeft='/basic' toRight='/cqrs-es' />
      </>
    )
  }
}
