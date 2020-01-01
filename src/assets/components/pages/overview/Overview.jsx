import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'
import ReactGA from 'react-ga'

import Consent from 'contexts/Consent'

import { Container } from 'common'
import NextPageHero from '../NextPageHero'

import meta from 'metadata'

export default class Overview extends Component {
  static contextType = Consent
  static contextTypes = {
    isConsent: PropTypes.bool
  }

  componentDidMount () {
    if (this.context.isConsent) {
      const title = `${meta.common.siteName} | ${meta['/overview'].title}`
      ReactGA.pageview(this.props.location.pathname, undefined, title)
    }
  }

  renderBreadcrumbs () {
    return (
      <>
        <li className='is-active'><Link to='/overview' aria-current='page'>Overview</Link></li>
        <li><Link to='/model'>Data Model</Link></li>
        <li><Link to='/domain'>Domain Logic</Link></li>
        <li><Link to='/infrastructure'>Infrastructure</Link></li>
      </>
    )
  }

  render () {
    const { title, description, url } = meta['/overview']
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
            <h1>Overview</h1>
            <p>Hive<sup>io</sup> is a <a href='https://www.reactivemanifesto.org/' target='_blank' rel='noopener noreferrer'>reactive</a>, <a href='https://www.cncf.io/blog/2017/05/15/developing-cloud-native-applications/' target='_blank' rel='noopener noreferrer'>cloud-native</a> framework meant to foster and support lightweight, atomic <a href='https://en.wikipedia.org/wiki/Microservices' target='_blank' rel='noopener noreferrer'>microservices</a> from a project's inception onward. It consists of a small library of classes that provide the basic building blocks to interface with a small collection of containers, from straightforward <a href='https://en.wikipedia.org/wiki/Representational_state_transfer' target='_blank' rel='noopener noreferrer'>RESTful</a> services to specialized <a href='https://martinfowler.com/bliki/CQRS.html' target='_blank' rel='noopener noreferrer'>CQRS</a>/<a href='https://martinfowler.com/eaaDev/EventSourcing.html' target='_blank' rel='noopener noreferrer'>ES</a> services. The core tenets of this project are:</p>
            <ul>
              <li>Provide a framework of standard patterns to foster the creation and evolution of a project.</li>
              <li>Provide a universal JavaScript library for standardized data exchanges.</li>
              <li>Define a clear separation between domain logic and infrastructure.</li>
              <li>Minimize opinions in the framework to support a variety of needs.</li>
              <li>Integrate with other cloud-native initiatives.</li>
            </ul>
            <p>Hive<sup>io</sup> provides flexibility and simplicity to promote <strong>rapid development</strong> with a focus on domain logic. Each part has clearly defined responsibilities and interfaces with respect to their counterparts.</p>

            <h2>Background</h2>
            <p>This project is the culmination of my past experiences to improve upon existing technologies and techniques for enterprise architecture. The thought first came to me when I was exposed to distributed architecture in a production environment. The timing of this exposure was perfectly aligned with the release of Docker. While migrating my knowledge from VMs to containers, I started to deep dive into other technologies and techniques to bring the idea to life. Over the course of this journey, I've been able to implement a fully functional solution in this space. Once the concept was proven in v1, I immediately started planning for the version you see today. We are proud to present to you Hive<sup>io</sup>.</p>
          </Container>
        </article>

        <NextPageHero breadcrumbs={this.renderBreadcrumbs} toLeft='/' toRight='/model' />
      </>
    )
  }
}
