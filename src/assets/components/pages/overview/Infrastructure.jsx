import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'
import ReactGA from 'react-ga'

import Consent from 'contexts/Consent'

import { Container } from 'common'
import NextPageHero from '../NextPageHero'

import meta from 'metadata'

export default class Infrastructure extends Component {
  static contextType = Consent
  static contextTypes = {
    isConsent: PropTypes.bool
  }

  componentDidMount () {
    if (this.context.isConsent) {
      const title = `${meta.common.siteName} | ${meta['/infrastructure'].title}`
      ReactGA.pageview(this.props.location.pathname, undefined, title)
    }
  }

  renderBreadcrumbs () {
    return (
      <>
        <li><Link to='/overview'>Overview</Link></li>
        <li><Link to='/model'>Data Model</Link></li>
        <li><Link to='/domain'>Domain Logic</Link></li>
        <li className='is-active'><Link to='/infrastructure' aria-current='page'>Infrastructure</Link></li>
      </>
    )
  }

  render () {
    const { title, description, url } = meta['/infrastructure']
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
            <h1>Infrastructure</h1>
            <p>Here are the execution environments for the domain logic described previously. Hive<sup>io</sup> is designed to manage infrastructure as code through the base <a href='https://www.docker.com/' target='_blank' rel='noopener noreferrer'>Docker</a> images defined. These images are meant to be extended to include your domain logic and additional code dependencies. Depending on the type of container, there are a few opinions made here too.</p>

            <h2>Specialized Containers</h2>
            <p>Base images for specific service types have been defined to provide the basic boilerplate service definition for your application. It also ensures a common interface is maintained between the service and actor. For CQRS/ES architectures, some opinions on storage solutions have been made.</p>
            <dl>
              <dt><em><strong>Base</strong></em></dt>
              <dd>The least opinionated of them all. This wraps your actor(s) to provide a straightforward interface and standardizes the network payload before calling your actor to perform.</dd>

              <dt><em><strong>Producer</strong></em></dt>
              <dd>This supports the creation of unordered messages in a CQRS/ES implementation. Validation here is only <a href='http://danielwhittaker.me/2016/04/20/how-to-validate-commands-in-a-cqrs-application/' target='_blank' rel='noopener noreferrer'>superficial</a> and defaults to using queues to batch messages for increased performance.</dd>

              <dt><em><strong>Consumer</strong></em></dt>
              <dd>Message consumption is defined in this image for a CQRS/ES implementation. It is highly recommended that these services be isolated to only message consumption but can support queries against the data as well.</dd>

              <dt><em><strong>Stream Processor</strong></em></dt>
              <dd>This supports a variety of needs in a CQRS/ES implementation. <a href='http://danielwhittaker.me/2016/04/20/how-to-validate-commands-in-a-cqrs-application/' target='_blank' rel='noopener noreferrer'>Domain validation</a> can be achieved through the use of the transaction cache dependency (<a href='https://redis.io/' target='_blank' rel='noopener noreferrer'>Redis</a>). CQRS/ES Process Managers and Sagas can be implemented here too.</dd>
            </dl>

            <h2>Unified Transaction Log</h2>
            <p>The <a href='https://www.confluent.io/blog/event-sourcing-cqrs-stream-processing-apache-kafka-whats-connection/' target='_blank' rel='noopener noreferrer'>unified transaction log</a> is the centralized storage solution that is the foundation of the CQRS/ES pattern. Think of it as the backbone in your central nervous system. All of your body parts and organs that connect to this backbone are made up of the different microservice types described above. The transaction log's job is to handle multiple inputs/outputs to each of these microservice types while providing the persistence layer. Events are stored here once they have been validated by their producers and are read from here by their consumers.</p>
            <p>Here is where our last opinions are made with Kafka and Redis as the unified transaction log and cache respectively. The Stream Processor has implemented a solution leveraging the <a href='https://en.wikipedia.org/wiki/X/Open_XA' target='_blank' rel='noopener noreferrer'>eXtended Architecture (XA)</a> distributed transaction model via <a href='https://en.wikipedia.org/wiki/Snapshot_isolation' target='_blank' rel='noopener noreferrer'>snapshot isolation</a> and <a href='https://en.wikipedia.org/wiki/Two-phase_commit_protocol' target='_blank' rel='noopener noreferrer'>two-phase commit</a> techniques to provide domain validation and event order guarantees. The Redis implementation leverages the <a href='https://redis.io/topics/distlock' target='_blank' rel='noopener noreferrer'>Redlock algorithm</a> as the <a href='https://en.wikipedia.org/wiki/Distributed_lock_manager' target='_blank' rel='noopener noreferrer'>distributed lock</a>ing mechanism to support these techniques.</p>
          </Container>
        </article>

        <NextPageHero breadcrumbs={this.renderBreadcrumbs} toLeft='/domain' toRight='/start' />
      </>
    )
  }
}
