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

  render () {
    const { title, description, url } = meta['/cqrs-es']

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
                <h1>Example: CQRS/ES</h1>
                <p>This example evolves the previous REST example into a highly distributed architecture in order to handle different magnitudes of network traffic.</p>

                <h2 id='source_code'><a href='https://www.npmjs.com/package/hive-io-domain-example' target='_blank' rel='noopener noreferrer'>Domain Logic</a> (<a href='https://github.com/fnalabs/hive-io/tree/master/packages/hive-js-domain-example' target='_blank' rel='noopener noreferrer'>Source Code</a>)</h2>
                <div className='notification is-info is-light'>
                  <span className='icon'><Info className='svg-inline' /></span>
                  <span>You should consider using a private NPM registry or implementing more creative solutions such as extending base Docker images with <code>ADD</code>|<code>COPY</code> statements for source code or <code>npm link</code> for your domain logic.</span>
                </div>

                <h2 id='infrastructure'><a href='https://github.com/fnalabs/hive-io/tree/master/dev/docker/domain/production' target='_blank' rel='noopener noreferrer'>Infrastructure</a></h2>
                <div className='notification is-info is-light'>
                  <span className='icon'><Info className='svg-inline' /></span>
                  <span>There is a chicken or egg scenario when you run this example for the first time. In this example, the topics are not created until events are sent from <code>hive-producer-js</code> and <code>hive-stream-processor-js</code>. Therefore, you will need to <strong>restart</strong> <code>hive-consumer-js</code> after the topics are created to finally see events flow through the system.</span>
                </div>
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
&nbsp;&nbsp;# NOTE: this is an example, you will need to define your own config<br />
&nbsp;&nbsp;#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ex. https://github.com/fnalabs/hive-io/tree/master/dev/proxy<br />
&nbsp;&nbsp;proxy:<br />
&nbsp;&nbsp;&nbsp;&nbsp;image: haproxy:2.3.2-alpine<br />
&nbsp;&nbsp;&nbsp;&nbsp;container_name: proxy<br />
&nbsp;&nbsp;&nbsp;&nbsp;depends_on:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- hive-base-js<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- hive-stream-processor-js<br />
&nbsp;&nbsp;&nbsp;&nbsp;ports:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 80:80<br />
&nbsp;&nbsp;&nbsp;&nbsp;networks:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- hive-io<br />
&nbsp;&nbsp;&nbsp;&nbsp;restart: on-failure<br /><br />
&nbsp;&nbsp;# producers<br />
&nbsp;&nbsp;hive-producer-js:<br />
&nbsp;&nbsp;&nbsp;&nbsp;build:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;context: .<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dockerfile: Producer.dockerfile<br />
&nbsp;&nbsp;&nbsp;&nbsp;image: hive-producer-js:production<br />
&nbsp;&nbsp;&nbsp;&nbsp;container_name: hive-producer-js<br />
&nbsp;&nbsp;&nbsp;&nbsp;environment:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ACTOR: ViewContentActor<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ACTOR_LIB: hive-io-domain-example<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ACTOR_URLS: "/contents/:id"<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CLUSTER_SIZE: 1<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HTTP_VERSION: 1<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SECURE: "false"<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TELEMETRY: "true"<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TELEMETRY_URL_METRICS: "http://collector:55681/v1/metrics"<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TELEMETRY_URL_TRACES: "http://collector:55681/v1/trace"<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EVENT_STORE_TOPIC: view<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EVENT_STORE_BROKERS: "kafka:29092"<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EVENT_STORE_ID: producer-client<br />
&nbsp;&nbsp;&nbsp;&nbsp;depends_on:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- collector<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- kafka<br />
&nbsp;&nbsp;&nbsp;&nbsp;networks:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- hive-io<br /><br />
&nbsp;&nbsp;# stream processors<br />
&nbsp;&nbsp;hive-stream-processor-js:<br />
&nbsp;&nbsp;&nbsp;&nbsp;build:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;context: .<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dockerfile: Stream-Processor.dockerfile<br />
&nbsp;&nbsp;&nbsp;&nbsp;image: hive-stream-processor-js:production<br />
&nbsp;&nbsp;&nbsp;&nbsp;container_name: hive-stream-processor-js<br />
&nbsp;&nbsp;&nbsp;&nbsp;environment:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ACTOR: ContentCommandActor<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ACTOR_LIB: hive-io-domain-example<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ACTOR_URLS: "/contents,/contents/:id"<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CLUSTER_SIZE: 1<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HTTP_VERSION: 1<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SECURE: "false"<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TELEMETRY: "true"<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TELEMETRY_URL_METRICS: "http://collector:55681/v1/metrics"<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TELEMETRY_URL_TRACES: "http://collector:55681/v1/trace"<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CACHE_URL: "redis://redis:6379"<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EVENT_STORE_PRODUCER_TOPIC: content<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EVENT_STORE_BROKERS: "kafka:29092"<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EVENT_STORE_ID: stream-processor-client<br />
&nbsp;&nbsp;&nbsp;&nbsp;depends_on:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- collector<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- kafka<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- redis<br />
&nbsp;&nbsp;&nbsp;&nbsp;networks:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- hive-io<br />
&nbsp;&nbsp;redis:<br />
&nbsp;&nbsp;&nbsp;&nbsp;image: redis:6.0.9-alpine<br />
&nbsp;&nbsp;&nbsp;&nbsp;container_name: redis<br />
&nbsp;&nbsp;&nbsp;&nbsp;networks:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- hive-io<br />
&nbsp;&nbsp;&nbsp;&nbsp;restart: on-failure<br /><br />
&nbsp;&nbsp;# log stream containers<br />
&nbsp;&nbsp;kafka:<br />
&nbsp;&nbsp;&nbsp;&nbsp;image: confluentinc/cp-kafka:5.4.3<br />
&nbsp;&nbsp;&nbsp;&nbsp;container_name: kafka<br />
&nbsp;&nbsp;&nbsp;&nbsp;depends_on:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- zookeeper<br />
&nbsp;&nbsp;&nbsp;&nbsp;environment:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;KAFKA_ZOOKEEPER_CONNECT: "zookeeper:32181"<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;KAFKA_ADVERTISED_LISTENERS: "PLAINTEXT://kafka:29092"<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR: 1<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;KAFKA_COMPRESSION_TYPE: gzip<br />
&nbsp;&nbsp;&nbsp;&nbsp;expose:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 29092<br />
&nbsp;&nbsp;&nbsp;&nbsp;networks:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- hive-io<br />
&nbsp;&nbsp;&nbsp;&nbsp;restart: on-failure<br />
&nbsp;&nbsp;zookeeper:<br />
&nbsp;&nbsp;&nbsp;&nbsp;image: confluentinc/cp-zookeeper:5.4.3<br />
&nbsp;&nbsp;&nbsp;&nbsp;container_name: zookeeper<br />
&nbsp;&nbsp;&nbsp;&nbsp;environment:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ZOOKEEPER_CLIENT_PORT: 32181<br />
&nbsp;&nbsp;&nbsp;&nbsp;expose:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 32181<br />
&nbsp;&nbsp;&nbsp;&nbsp;networks:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- hive-io<br />
&nbsp;&nbsp;&nbsp;&nbsp;restart: on-failure<br /><br />
&nbsp;&nbsp;# consumers<br />
&nbsp;&nbsp;hive-consumer-js:<br />
&nbsp;&nbsp;&nbsp;&nbsp;build:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;context: .<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dockerfile: Consumer.dockerfile<br />
&nbsp;&nbsp;&nbsp;&nbsp;image: hive-consumer-js:production<br />
&nbsp;&nbsp;&nbsp;&nbsp;container_name: hive-consumer-js<br />
&nbsp;&nbsp;&nbsp;&nbsp;environment:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ACTOR: ContentEventActor<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ACTOR_LIB: hive-io-domain-example<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CLUSTER_SIZE: 1<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HTTP_VERSION: 1<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SECURE: "false"<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TELEMETRY: "true"<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TELEMETRY_URL_METRICS: "http://collector:55681/v1/metrics"<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TELEMETRY_URL_TRACES: "http://collector:55681/v1/trace"<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EVENT_STORE_TOPIC: "content|view"<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EVENT_STORE_BROKERS: "kafka:29092"<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EVENT_STORE_ID: consumer-client<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EVENT_STORE_GROUP_ID: consumer-group<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EVENT_STORE_FROM_START: "true"<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MONGO_URL: "mongodb://mongo:27017/content"<br />
&nbsp;&nbsp;&nbsp;&nbsp;depends_on:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- collector<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- kafka<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- mongo<br />
&nbsp;&nbsp;&nbsp;&nbsp;networks:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- hive-io<br />
&nbsp;&nbsp;mongo:<br />
&nbsp;&nbsp;&nbsp;&nbsp;image: mongo:4.4.2<br />
&nbsp;&nbsp;&nbsp;&nbsp;container_name: mongo<br />
&nbsp;&nbsp;&nbsp;&nbsp;networks:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- hive-io<br />
&nbsp;&nbsp;&nbsp;&nbsp;restart: on-failure<br /><br />
&nbsp;&nbsp;# rest services<br />
&nbsp;&nbsp;hive-base-js:<br />
&nbsp;&nbsp;&nbsp;&nbsp;build:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;context: .<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dockerfile: Rest.dockerfile<br />
&nbsp;&nbsp;&nbsp;&nbsp;image: hive-base-js:production<br />
&nbsp;&nbsp;&nbsp;&nbsp;container_name: hive-base-js<br />
&nbsp;&nbsp;&nbsp;&nbsp;environment:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ACTOR: ContentQueryActor<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ACTOR_LIB: hive-io-domain-example<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ACTOR_URLS: "/contents,/contents/:id"<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CLUSTER_SIZE: 1<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HTTP_VERSION: 1<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SECURE: "false"<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TELEMETRY: "true"<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TELEMETRY_URL_METRICS: "http://collector:55681/v1/metrics"<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TELEMETRY_URL_TRACES: "http://collector:55681/v1/trace"<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MONGO_URL: "mongodb://mongo:27017/content"<br />
&nbsp;&nbsp;&nbsp;&nbsp;depends_on:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- collector<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- hive-producer-js<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- mongo<br />
&nbsp;&nbsp;&nbsp;&nbsp;networks:<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- hive-io<br /><br />
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

        <NextPageHero toLeft='/rest' toRight='/documentation' />
      </>
    )
  }
}
