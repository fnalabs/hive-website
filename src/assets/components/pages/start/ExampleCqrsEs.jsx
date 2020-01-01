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

export default class CqrsEs extends Component {
  static contextType = Consent
  static contextTypes = {
    isConsent: PropTypes.bool
  }

  componentDidMount () {
    if (this.context.isConsent) {
      const title = `${meta.common.siteName} | ${meta['/cqrs-es'].title}`
      ReactGA.pageview(this.props.location.pathname, undefined, title)
    }
  }

  renderBreadcrumbs () {
    return (
      <>
        <li><Link to='/start'>Get Started</Link></li>
        <li><Link to='/setup'>Setup</Link></li>
        <li><Link to='/basic'>Basic</Link></li>
        <li><Link to='/rest'>REST</Link></li>
        <li className='is-active'><Link to='/cqrs-es' aria-current='page'>CQRS/ES</Link></li>
      </>
    )
  }

  render () {
    const { title, description, url } = meta['/cqrs-es']
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
            <h1>Example: CQRS/ES</h1>
            <p>This example evolves the previous REST example into a highly distributed architecture in order to handle different magnitudes of network traffic.</p>

            <h2><a href='https://www.npmjs.com/package/hive-io-domain-example' target='_blank' rel='noopener noreferrer'>Domain Logic</a> (<a href='https://github.com/fnalabs/hive-js-domain-example' target='_blank' rel='noopener noreferrer'>Source Code</a>)</h2>
            <div className='notification'>
              <span className='icon'><Info className='svg-inline' /></span>
              <span>You should consider using a private NPM registry or implementing more creative solutions such as extending base Docker images with <code>ADD</code>|<code>COPY</code> statements for source code or <code>npm link</code> for your domain logic.</span>
            </div>

            <h2>Infrastructure</h2>
            <dl>
              <dt><code>Producer.dockerfile</code></dt>
              <dd>
                <pre>FROM fnalabs/hive-producer-js:latest<br />RUN npm install hive-io-domain-example</pre>
              </dd>

              <dt><code>Stream-Processor.dockerfile</code></dt>
              <dd>
                <pre>FROM fnalabs/hive-stream-processor-js:latest<br />RUN npm install hive-io-domain-example</pre>
              </dd>

              <dt><code>Consumer.dockerfile</code></dt>
              <dd>
                <pre>FROM fnalabs/hive-consumer-js:latest<br />RUN npm install hive-io-domain-example</pre>
              </dd>

              <dt><code>Rest.dockerfile</code></dt>
              <dd>
                <pre>FROM fnalabs/hive-base-js:latest<br />RUN npm install hive-io-domain-example</pre>
              </dd>

              <dt><code>docker-compose.yml</code></dt>
              <dd>
                <pre>version: '3.5'<br />
services:<br />
&nbsp;&nbsp;# proxy for layer 7 routing<br />
&nbsp;&nbsp;# NOTE: this is an example, you will need to define your own<br />
&nbsp;&nbsp;#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbspex. https://github.com/fnalabs/hive-io-proxy<br />
&nbsp;&nbsp;proxy:<br />
&nbsp;&nbsp;&nbsp;&nbsp;image: haproxy:1.8.23-alpine<br />
&nbsp;&nbsp;&nbsp;&nbsp;depends_on:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- hive-producer-js<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- hive-base-js<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- hive-stream-processor-js<br />
&nbsp;&nbsp;&nbsp;&nbsp;ports:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 80:80<br />
&nbsp;&nbsp;&nbsp;&nbsp;networks:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- hive-io<br />
&nbsp;&nbsp;&nbsp;&nbsp;restart: on-failure<br />
&nbsp;&nbsp;fluentd:<br />
&nbsp;&nbsp;&nbsp;&nbsp;image: fluent/fluentd:v1.7.4-1.0<br />
&nbsp;&nbsp;&nbsp;&nbsp;networks:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- hive-io<br />
&nbsp;&nbsp;&nbsp;&nbsp;restart: on-failure<br /><br />
&nbsp;&nbsp;# producers<br />
&nbsp;&nbsp;hive-producer-js:<br />
&nbsp;&nbsp;&nbsp;&nbsp;build:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;context: .<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dockerfile: Producer.dockerfile<br />
&nbsp;&nbsp;&nbsp;&nbsp;image: hive-producer-js<br />
&nbsp;&nbsp;&nbsp;&nbsp;environment:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ACTOR: ViewContentActor<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ACTOR_LIB: hive-io-domain-example<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CLUSTER_SIZE: 1<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HTTP_VERSION: 1<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SECURE: "false"<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EVENT_STORE_TOPIC: view<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EVENT_STORE_BROKERS: "kafka:29092"<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EVENT_STORE_ID: producer-client<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FLUENTD_HOST: fluentd<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FLUENTD_PORT: 24224<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FLUENTD_TIMEOUT: 3.0<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FLUENTD_RECONNECT: 600000<br />
&nbsp;&nbsp;&nbsp;&nbsp;depends_on:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- kafka<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- fluentd<br />
&nbsp;&nbsp;&nbsp;&nbsp;networks:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- hive-io<br /><br />
&nbsp;&nbsp;# stream processors<br />
&nbsp;&nbsp;hive-stream-processor-js:<br />
&nbsp;&nbsp;&nbsp;&nbsp;build:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;context: .<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dockerfile: Stream-Processor.dockerfile<br />
&nbsp;&nbsp;&nbsp;&nbsp;image: hive-stream-processor-js<br />
&nbsp;&nbsp;&nbsp;&nbsp;environment:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ACTOR: PostCommandActor<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ACTOR_LIB: hive-io-domain-example<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CLUSTER_SIZE: 1<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HTTP_VERSION: 1<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SECURE: "false"<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CACHE_URL: "redis://redis:6379"<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EVENT_STORE_PRODUCER_TOPIC: content<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EVENT_STORE_BROKERS: "kafka:29092"<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EVENT_STORE_ID: stream-processor-client<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FLUENTD_HOST: fluentd<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FLUENTD_PORT: 24224<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FLUENTD_TIMEOUT: 3.0<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FLUENTD_RECONNECT: 600000<br />
&nbsp;&nbsp;&nbsp;&nbsp;depends_on:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- redis<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- kafka<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- fluentd<br />
&nbsp;&nbsp;&nbsp;&nbsp;networks:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- hive-io<br />
&nbsp;&nbsp;redis:<br />
&nbsp;&nbsp;&nbsp;&nbsp;image: redis:5.0.7-alpine<br />
&nbsp;&nbsp;&nbsp;&nbsp;networks:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- hive-io<br />
&nbsp;&nbsp;&nbsp;&nbsp;restart: on-failure<br /><br />
&nbsp;&nbsp;# log stream containers<br />
&nbsp;&nbsp;kafka:<br />
&nbsp;&nbsp;&nbsp;&nbsp;image: confluentinc/cp-kafka:5.3.1<br />
&nbsp;&nbsp;&nbsp;&nbsp;depends_on:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- zookeeper<br />
&nbsp;&nbsp;&nbsp;&nbsp;environment:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;KAFKA_ZOOKEEPER_CONNECT: "zookeeper:32181"<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;KAFKA_ADVERTISED_LISTENERS: "PLAINTEXT://kafka:29092"<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR: 1<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;KAFKA_COMPRESSION_TYPE: gzip<br />
&nbsp;&nbsp;&nbsp;&nbsp;networks:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- hive-io<br />
&nbsp;&nbsp;&nbsp;&nbsp;restart: on-failure<br />
&nbsp;&nbsp;zookeeper:<br />
&nbsp;&nbsp;&nbsp;&nbsp;image: confluentinc/cp-zookeeper:5.3.1<br />
&nbsp;&nbsp;&nbsp;&nbsp;environment:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ZOOKEEPER_CLIENT_PORT: 32181<br />
&nbsp;&nbsp;&nbsp;&nbsp;networks:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- hive-io<br />
&nbsp;&nbsp;&nbsp;&nbsp;restart: on-failure<br /><br />
&nbsp;&nbsp;# consumers<br />
&nbsp;&nbsp;hive-consumer-js:<br />
&nbsp;&nbsp;&nbsp;&nbsp;build:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;context: .<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dockerfile: Consumer.dockerfile<br />
&nbsp;&nbsp;&nbsp;&nbsp;image: hive-consumer-js<br />
&nbsp;&nbsp;&nbsp;&nbsp;environment:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ACTOR: PostEventActor<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ACTOR_LIB: hive-io-domain-example<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CLUSTER_SIZE: 1<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HTTP_VERSION: 1<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SECURE: "false"<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EVENT_STORE_TOPIC: "content|view"<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EVENT_STORE_BROKERS: "kafka:29092"<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EVENT_STORE_ID: consumer-client<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EVENT_STORE_GROUP_ID: consumer-group<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EVENT_STORE_FROM_START: "true"<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MONGO_URL: "mongodb://mongo:27017/post"<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FLUENTD_HOST: fluentd<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FLUENTD_PORT: 24224<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FLUENTD_TIMEOUT: 3.0<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FLUENTD_RECONNECT: 600000<br />
&nbsp;&nbsp;&nbsp;&nbsp;depends_on:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- mongo<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- kafka<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- fluentd<br />
&nbsp;&nbsp;&nbsp;&nbsp;networks:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- hive-io<br />
&nbsp;&nbsp;mongo:<br />
&nbsp;&nbsp;&nbsp;&nbsp;image: mongo:4.2.1<br />
&nbsp;&nbsp;&nbsp;&nbsp;networks:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- hive-io<br />
&nbsp;&nbsp;&nbsp;&nbsp;restart: on-failure<br /><br />
&nbsp;&nbsp;# rest services<br />
&nbsp;&nbsp;hive-base-js:<br />
&nbsp;&nbsp;&nbsp;&nbsp;build:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;context: .<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dockerfile: Rest.dockerfile<br />
&nbsp;&nbsp;&nbsp;&nbsp;image: hive-base-js<br />
&nbsp;&nbsp;&nbsp;&nbsp;environment:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ACTOR: PostQueryActor<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ACTOR_LIB: hive-io-domain-example<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CLUSTER_SIZE: 1<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HTTP_VERSION: 1<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SECURE: "false"<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MONGO_URL: "mongodb://mongo:27017/post"<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FLUENTD_HOST: fluentd<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FLUENTD_PORT: 24224<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FLUENTD_TIMEOUT: 3.0<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FLUENTD_RECONNECT: 600000<br />
&nbsp;&nbsp;&nbsp;&nbsp;depends_on:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- mongo<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- fluentd<br />
&nbsp;&nbsp;&nbsp;&nbsp;networks:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- hive-io<br /><br />
# networking specifics<br />
networks:<br />
&nbsp;&nbsp;hive-io:<br />
&nbsp;&nbsp;&nbsp;&nbsp;driver: bridge</pre>{/* eslint-disable-line react/jsx-closing-tag-location */}
              </dd>
            </dl>
          </Container>
        </article>

        <NextPageHero breadcrumbs={this.renderBreadcrumbs} toLeft='/rest' toRight='/documentation' />
      </>
    )
  }
}
