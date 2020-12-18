import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactGA from 'react-ga'

import Consent from 'contexts/Consent'

import { Container } from 'common'
import { Header } from 'layout'

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
      const title = `${meta.common.siteName} | ${meta['/environments'].title}`
      ReactGA.pageview(this.props.location.pathname, undefined, title)
    }
  }

  render () {
    const { title, description, url } = meta['/environments']

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
                <h1>Environments</h1>
                <p>The tables below contain all of the environment variables used to configure each microservice container. Default values are defined where applicable as well as descriptions for each.</p>

                <h2 id='shared'>Shared</h2>
                <p>The following envrionment variables are shared across all microservice images:</p>
                <div className='table-container'>
                  <table className='table is-striped is-hoverable'>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Default</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>NODE_ENV</td>
                        <td>String</td>
                        <td>'production'</td>
                        <td>microservice runtime environment</td>
                      </tr>
                      <tr>
                        <td>PORT</td>
                        <td>Number</td>
                        <td>3000</td>
                        <td>microservice port to listen on</td>
                      </tr>
                      <tr>
                        <td>HTTP_VERSION</td>
                        <td>Number</td>
                        <td>2</td>
                        <td>HTTP version for backward compatibility</td>
                      </tr>
                      <tr>
                        <td>SECURE</td>
                        <td>String</td>
                        <td>'false'</td>
                        <td>whether to run microservice secure or not. defaults to 'false' since we cannot provide certificates</td>
                      </tr>
                      <tr>
                        <td>CLUSTER_SIZE</td>
                        <td>Number</td>
                        <td>[total CPUs available]</td>
                        <td>defaults to the total available CPUs allocated to the container or to the size you specify here</td>
                      </tr>
                      <tr>
                        <td>SSL_CERT</td>
                        <td>String</td>
                        <td />
                        <td>default path for SSL certificate file or the full certificate</td>
                      </tr>
                      <tr>
                        <td>SSL_KEY</td>
                        <td>String</td>
                        <td />
                        <td>default path for SSL key file or the full key</td>
                      </tr>
                      <tr>
                        <td>PING_URL</td>
                        <td>String</td>
                        <td>'/ping'</td>
                        <td>URL to use for shallow health checks for the microservice</td>
                      </tr>
                      <tr>
                        <td>ACTOR</td>
                        <td>String</td>
                        <td />
                        <td>Actor (Model) the microservice is responsible for</td>
                      </tr>
                      <tr>
                        <td>ACTOR_LIB</td>
                        <td>String</td>
                        <td />
                        <td>module where the ACTOR resides</td>
                      </tr>
                      <tr>
                        <td>ACTOR_URLS</td>
                        <td>String</td>
                        <td />
                        <td>comma-separated URLs associated with the Actor</td>
                      </tr>
                      <tr>
                        <td>TELEMETRY</td>
                        <td>String</td>
                        <td>'false'</td>
                        <td>whether to run OpenTelemetry integration</td>
                      </tr>
                      <tr>
                        <td>TELEMETRY_PLUGINS</td>
                        <td>String</td>
                        <td />
                        <td>JSON string of OpenTelemetry plugins to enable</td>
                      </tr>
                      <tr>
                        <td>TELEMETRY_SERVICE_NAME</td>
                        <td>String</td>
                        <td />
                        <td>service name for OpenTelemetry</td>
                      </tr>
                      <tr>
                        <td>TELEMETRY_URL_METRICS</td>
                        <td>String</td>
                        <td />
                        <td>OpenTelemetry Collector URL for metrics</td>
                      </tr>
                      <tr>
                        <td>TELEMETRY_URL_TRACES</td>
                        <td>String</td>
                        <td />
                        <td>OpenTelemetry Collector URL for traces</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2>Base</h2>
                <p>All of the environment variables in <a href='#shared'>Shared</a>.</p>

                <h2>Producer</h2>
                <p>All of the environment variables in <a href='#shared'>Shared</a> and the following:</p>
                <div className='table-container'>
                  <table className='table is-striped is-hoverable'>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Default</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>EVENT_STORE_TOPIC</td>
                        <td>String</td>
                        <td />
                        <td>Kafka topic the events will be stored under</td>
                      </tr>
                      <tr>
                        <td>EVENT_STORE_ID</td>
                        <td>String</td>
                        <td />
                        <td>unique identifier for Kafka client connection</td>
                      </tr>
                      <tr>
                        <td>EVENT_STORE_BROKERS</td>
                        <td>String</td>
                        <td />
                        <td>comma separated URLs where Kafka is hosted</td>
                      </tr>
                      <tr>
                        <td>EVENT_STORE_BUFFER</td>
                        <td>Number</td>
                        <td>100</td>
                        <td>maximum number of incoming messages to batch</td>
                      </tr>
                      <tr>
                        <td>EVENT_STORE_TIMEOUT</td>
                        <td>Number</td>
                        <td>2000</td>
                        <td>time (in `ms`) to poll Kafka for delivery reports</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2>Consumer</h2>
                <p>All of the environment variables in <a href='#shared'>Shared</a> and the following:</p>
                <div className='table-container'>
                  <table className='table is-striped is-hoverable'>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Default</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>EVENT_STORE_TOPIC</td>
                        <td>String</td>
                        <td />
                        <td>Kafka topic the events will be consumed from</td>
                      </tr>
                      <tr>
                        <td>EVENT_STORE_ID</td>
                        <td>String</td>
                        <td />
                        <td>unique identifier for Kafka client connection</td>
                      </tr>
                      <tr>
                        <td>EVENT_STORE_GROUP_ID</td>
                        <td>String</td>
                        <td />
                        <td>defines Kafka Consumer group id</td>
                      </tr>
                      <tr>
                        <td>EVENT_STORE_BROKERS</td>
                        <td>String</td>
                        <td />
                        <td>comma separated URLs where Kafka is hosted</td>
                      </tr>
                      <tr>
                        <td>EVENT_STORE_FROM_START</td>
                        <td>String</td>
                        <td>'false'</td>
                        <td>tells Consumer whether or not to start at the beginning of the topic</td>
                      </tr>
                      <tr>
                        <td>EVENT_STORE_PARTITIONS</td>
                        <td>Number</td>
                        <td>1</td>
                        <td>tells Consumer how many partitions to consume</td>
                      </tr>
                      <tr>
                        <td>EVENT_STORE_BUFFER</td>
                        <td>Number</td>
                        <td>null</td>
                        <td>maximum number of incoming messages to batch</td>
                      </tr>
                      <tr>
                        <td>EVENT_STORE_TIMEOUT</td>
                        <td>Number</td>
                        <td>null</td>
                        <td>time (in `ms`) to poll Kafka for delivery reports</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2>Stream Processor</h2>
                <p>All of the environment variables in <a href='#shared'>Shared</a> and the following:</p>
                <div className='table-container'>
                  <table className='table is-striped is-hoverable'>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Default</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>PROCESSOR_TYPE</td>
                        <td>String</td>
                        <td>'producer'</td>
                        <td>type of Stream Processor microservice you wish to run (can also be 'consumer' or 'stream_processor')</td>
                      </tr>
                      <tr>
                        <td>EVENT_STORE_PRODUCER_TOPIC</td>
                        <td>String</td>
                        <td />
                        <td>Kafka topic the events will be stored under</td>
                      </tr>
                      <tr>
                        <td>EVENT_STORE_CONSUMER_TOPIC</td>
                        <td>String</td>
                        <td />
                        <td>Kafka topic the events will be consumed from</td>
                      </tr>
                      <tr>
                        <td>EVENT_STORE_ID</td>
                        <td>String</td>
                        <td />
                        <td>unique identifier for Kafka client connection</td>
                      </tr>
                      <tr>
                        <td>EVENT_STORE_GROUP_ID</td>
                        <td>String</td>
                        <td />
                        <td>defines Kafka Consumer group id</td>
                      </tr>
                      <tr>
                        <td>EVENT_STORE_BROKERS</td>
                        <td>String</td>
                        <td />
                        <td>comma separated URLs where Kafka is hosted</td>
                      </tr>
                      <tr>
                        <td>EVENT_STORE_FROM_START</td>
                        <td>String</td>
                        <td>'false'</td>
                        <td>tells Consumer whether or not to start at the beginning of the topic</td>
                      </tr>
                      <tr>
                        <td>EVENT_STORE_PARTITIONS</td>
                        <td>Number</td>
                        <td>1</td>
                        <td>tells Consumer how many partitions to consume</td>
                      </tr>
                      <tr>
                        <td>EVENT_STORE_BUFFER</td>
                        <td>Number</td>
                        <td>100</td>
                        <td>maximum number of incoming messages to batch</td>
                      </tr>
                      <tr>
                        <td>EVENT_STORE_TIMEOUT</td>
                        <td>Number</td>
                        <td>2000</td>
                        <td>time (in `ms`) to poll Kafka for delivery reports</td>
                      </tr>
                      <tr>
                        <td>CACHE_URL</td>
                        <td>String</td>
                        <td />
                        <td>URL where Redis is hosted</td>
                      </tr>
                      <tr>
                        <td>LOCK_TTL</td>
                        <td>Number</td>
                        <td>2000</td>
                        <td>Redlock time to live before lock is released</td>
                      </tr>
                      <tr>
                        <td>LOCK_DRIFT_FACTOR</td>
                        <td>Number</td>
                        <td>0.01</td>
                        <td>Redlock drift factor setting</td>
                      </tr>
                      <tr>
                        <td>LOCK_RETRY_COUNT</td>
                        <td>Number</td>
                        <td>0</td>
                        <td>Redlock retry count setting, should be set to zero for concurrency</td>
                      </tr>
                      <tr>
                        <td>LOCK_RETRY_DELAY</td>
                        <td>Number</td>
                        <td>400</td>
                        <td>Redlock retry delay in milliseconds</td>
                      </tr>
                      <tr>
                        <td>LOCK_RETRY_JITTER</td>
                        <td>Number</td>
                        <td>400</td>
                        <td>Redlock random retry jitter in milliseconds to randomize retries</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          </Container>
        </article>

        <NextPageHero toLeft='/documentation' toRight='https://fnalabs.github.io/hive-io/' />
      </>
    )
  }
}
