import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactGA from 'react-ga'

import Consent from 'contexts/Consent'

import { Container } from 'common'
import { Header } from 'layout'

import AsideMenu from '../AsideMenu'
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

  render () {
    const { title, description, url } = meta['/model']

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
                <h1>Data Model</h1>
                <p>Starting small, let's first focus on the most important part of any domain, the data. For this, Hive<sup>io</sup> leverages a few standards to provide a schema-based serialization solution based on JSON. JSON has been the universal standard for data exchanges for some time. Combined with a flexible and robust schema solution using the JSON Schema specification, Hive<sup>io</sup> is able to provide a comparable serializing solution to the likes of Protobuf, Avro, or Thrift.</p>

                <h2>Model JSON Serialization</h2>
                <p>Hive<sup>io</sup> uses the JSON Schema and Flux Standard Action specifications to automatically serialize and validate your data Models for network transport. Combined they become the standard format to transfer data to nearly any device or system. Complete with versioning and a schema registry, Hive<sup>io</sup> provides a universal application framework that can seamlessly run in a variety of clients and server environments.</p>
                <dl>
                  <dt><em><strong>JSON Schema</strong></em></dt>
                  <dd>The <a href='http://json-schema.org/' target='_blank' rel='noopener noreferrer'>JSON Schema</a> specification allows us to define a transport schema to validate incoming data. This can also be used to document your API with a definition that can be operated against. The specification defines that schemas can be hosted, giving you the ability to serve schemas through a static web server schema registry. You can use this to version your transport schemas and host them internally, externally, or both if you prefer.</dd>

                  <dt><em><strong>Flux Standard Action</strong></em></dt>
                  <dd>The <a href='https://github.com/redux-utilities/flux-standard-action' target='_blank' rel='noopener noreferrer'>Flux Standard Action</a> specification allows us to define a lightweight, network data payload used to build your services. Minimally, this provides our network payload structure with explicit support for typed data definintions. Payload objects are defined and validated by their associated JSON Schemas.</dd>
                </dl>
                <p>These Models would then be packaged up and built into your client side domain logic or in the growing list of Docker images supporting the infrastructure layer of the Hive<sup>io</sup> framework.</p>

                <h2>Schema Registry</h2>
                <p>A <a href='https://docs.confluent.io/current/schema-registry/index.html' target='_blank' rel='noopener noreferrer'>schema registry</a> can easily be achieved by combining concepts in the JSON Schema specification and adding a static file server to serve the JSON schemas. Using the <a href='https://json-schema.org/learn/getting-started-step-by-step.html#starting-the-schema' target='_blank' rel='noopener noreferrer'><code>$id</code> keyword</a>, you can specify a URI for the schema for hosting. You could use Node.js to host the files or even Nginx or Apache Web Server to serve the static JSON schemas.</p>
                <p>We have not decided to build and maintain a solution specific to the Hive<sup>io</sup> framework at this time due to time constraints but either hosting solution should be straightforward. Furthermore, hosting Schemas may not be necessary for your solution depending on the complexity of the domain and/or team(s) involved in building and maintaining your solutions.</p>
              </section>
            </div>
          </Container>
        </article>

        <NextPageHero toLeft='/overview' toRight='/domain' />
      </>
    )
  }
}
