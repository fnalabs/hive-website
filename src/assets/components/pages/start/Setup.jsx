import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactGA from 'react-ga'

import Consent from 'contexts/Consent'

import { Container } from 'common'
import { Header } from 'layout'

import AsideMenu from '../AsideMenu'
import NextPageHero from '../NextPageHero'

import meta from 'metadata'

export default class Setup extends Component {
  static contextType = Consent
  static contextTypes = {
    isConsent: PropTypes.bool
  }

  componentDidMount () {
    if (this.context.isConsent) {
      const title = `${meta.common.siteName} | ${meta['/setup'].title}`
      ReactGA.pageview(this.props.location.pathname, undefined, title)
    }
  }

  render () {
    const { title, description, url } = meta['/setup']

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
                <h1>Setup</h1>
                <p>Hive<sup>io</sup> has minimal requirements for installation, allowing you to choose the solutions that suits your needs regarding storage, security, monitoring, and more. Once you have your cloud platform decided, you can start to code your domain logic that will eventually be deployed with one of the container types.</p>

                <h2>Domain Logic</h2>
                <p>To get started with implementing your domain logic, install the following NPM package to your domain module(s). Other dependencies of your domain logic for your microservices will need to be installed separately.</p>
                <p><pre>$ npm install --save hive-io</pre></p>

                <h2>Infrastructure</h2>
                <p>There are currently 4 infrastructure images available to cover anything from basic to complex microservice needs.</p>
                <dl>
                  <dt><a href='https://hub.docker.com/r/fnalabs/hive-base-js/' target='_blank' rel='noopener noreferrer'><em><strong>Base</strong></em></a></dt>
                  <dd><pre>$ docker pull fnalabs/hive-base-js:&lt;[release]|latest&gt;</pre></dd>

                  <dt><a href='https://hub.docker.com/r/fnalabs/hive-producer-js/' target='_blank' rel='noopener noreferrer'><em><strong>CQRS/ES Producer</strong></em></a></dt>
                  <dd><pre>$ docker pull fnalabs/hive-producer-js:&lt;[release]|latest&gt;</pre></dd>

                  <dt><a href='https://hub.docker.com/r/fnalabs/hive-consumer-js/' target='_blank' rel='noopener noreferrer'><em><strong>CQRS/ES Consumer</strong></em></a></dt>
                  <dd><pre>$ docker pull fnalabs/hive-consumer-js:&lt;[release]|latest&gt;</pre></dd>

                  <dt><a href='https://hub.docker.com/r/fnalabs/hive-stream-processor-js/' target='_blank' rel='noopener noreferrer'><em><strong>CQRS/ES Stream Processor</strong></em></a></dt>
                  <dd><pre>$ docker pull fnalabs/hive-stream-processor-js:&lt;[release]|latest&gt;</pre></dd>
                </dl>
                <p>So far, the list above defines some common types of microservices you may need. Future versions of the framework will add more types to the above and add support for multiple languages.</p>
              </section>
            </div>
          </Container>
        </article>

        <NextPageHero toLeft='/start' toRight='/basic' />
      </>
    )
  }
}
