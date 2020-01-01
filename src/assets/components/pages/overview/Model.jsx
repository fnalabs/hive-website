import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'
import ReactGA from 'react-ga'

import Consent from 'contexts/Consent'

import { Container } from 'common'
import NextPageHero from '../NextPageHero'

import meta from 'metadata'

export default class Model extends Component {
  static contextType = Consent
  static contextTypes = {
    isConsent: PropTypes.bool
  }

  componentDidMount () {
    if (this.context.isConsent) {
      const title = `${meta.common.siteName} | ${meta['/model'].title}`
      ReactGA.pageview(this.props.location.pathname, undefined, title)
    }
  }

  renderBreadcrumbs () {
    return (
      <>
        <li><Link to='/overview'>Overview</Link></li>
        <li className='is-active'><Link to='/model' aria-current='page'>Data Model</Link></li>
        <li><Link to='/domain'>Domain Logic</Link></li>
        <li><Link to='/infrastructure'>Infrastructure</Link></li>
      </>
    )
  }

  render () {
    const { title, description, url } = meta['/model']
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
            <h1>Model JSON Serialization</h1>
            <p>Hive<sup>io</sup> uses the JSON Schema and Flux Standard Action specifications to automatically serialize and validate your data Models for network transport. Combined they become the standard format to transfer data to nearly any device or system. Complete with versioning and a schema registry, Hive<sup>io</sup> provides a universal application framework that can seamlessly run in a variety of clients and server environments.</p>
            <dl>
              <dt><em><strong>JSON Schema</strong></em></dt>
              <dd>The <a href='http://json-schema.org/' target='_blank' rel='noopener noreferrer'>JSON Schema</a> specification allows us to define a transport schema to validate incoming data. This can also be used to document your API with a definition that can be operated against. The specification defines that schemas can be hosted, giving you the ability to serve schemas through a static web server schema registry. You can use this to version your transport schemas and host them internally, externally, or both if you prefer.</dd>

              <dt><em><strong>Flux Standard Action</strong></em></dt>
              <dd>The <a href='https://github.com/redux-utilities/flux-standard-action' target='_blank' rel='noopener noreferrer'>Flux Standard Action</a> specification allows us to define a lightweight, network data payload used to build your services. Minimally, this provides our network payload structure with explicit support for typed data definintions. Payload objects are defined and validated by their associated JSON Schemas.</dd>
            </dl>
            <p>These Actors and Models would then be packaged up and built into your client side domain logic or in the growing list of Docker images supporting the infrastructure layer of the Hive<sup>io</sup> Framework.</p>
          </Container>
        </article>

        <NextPageHero breadcrumbs={this.renderBreadcrumbs} toLeft='/overview' toRight='/domain' />
      </>
    )
  }
}
