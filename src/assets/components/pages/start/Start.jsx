import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import ReactGA from 'react-ga'

import Consent from 'contexts/Consent'

import { Container } from 'common'
import { Info } from 'icons'

import AsideMenu from '../AsideMenu'
import NextPageHero from '../NextPageHero'

import meta from 'metadata'

export default class Start extends Component {
  static contextType = Consent
  static contextTypes = {
    isConsent: PropTypes.bool
  }

  componentDidMount () {
    if (this.context.isConsent) {
      const title = `${meta.common.siteName} | ${meta['/start'].title}`
      ReactGA.pageview(this.props.location.pathname, undefined, title)
    }
  }

  render () {
    const { title, description, url } = meta['/start']
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
              <header className='column is-narrow is-hidden-touch is-aside'>
                <AsideMenu />
              </header>
              <section className='column content' role='document'>
                <h1>Get Started</h1>
                <p>The next page contains prerequisites and installation instructions to get you started with Hive<sup>io</sup>. The examples provided cover the basics of RESTful and CQRS/ES architectures. Descriptions are also provided on how to extend the concepts to future iterations to express the evolution of a project.</p>

                <div className='notification'>
                  <span className='icon'><Info className='svg-inline' /></span>
                  <span>The Development process for domain logic only requires a Text Editor or IDE that supports JavaScript and Node.js/Docker. The rest of the instructions outlined here provide infrastructure details for installation and deployment.</span>
                </div>

                <h2>Prerequisites</h2>
                <p>The prerequisites vary depending on the architecture. All implementations require Docker of some form. Whether it is just pure Docker, Docker Swarm, or Kubernetes is up to you. It is also strongly recommended you use a load balancer of some sort since the whole purpose of the framework is horizontal scalability.</p>

                <h3>Cloud Platforms</h3>
                <dl>
                  <dt><em><strong>Required</strong></em></dt>
                  <dd><a href='https://www.docker.com/' target='_blank' rel='noopener noreferrer'>Docker</a></dd>

                  <dt><em><strong>Recommended</strong></em></dt>
                  <dd><a href='https://kubernetes.io/' target='_blank' rel='noopener noreferrer'>Kubernetes</a>, <a href='https://docs.docker.com/engine/swarm/' target='_blank' rel='noopener noreferrer'>Swarm</a>, or a <a href='https://en.wikipedia.org/wiki/Category:Cloud_computing_providers' target='_blank' rel='noopener noreferrer'>cloud service provider</a></dd>
                </dl>

                <h3>More</h3>
                <p>Once you decide on your cloud platform, you're ready to start building and deploying your application services and dependencies. Hive<sup>io</sup> will integrate well with many of the <a href='https://www.cncf.io/projects/' target='_blank' rel='noopener noreferrer'>cloud-native projects</a> and <a href='https://hub.docker.com/' target='_blank' rel='noopener noreferrer'>other containerized services</a>.</p>
              </section>
            </div>
          </Container>
        </article>

        <NextPageHero toLeft='/infrastructure' toRight='/setup' />
      </>
    )
  }
}
