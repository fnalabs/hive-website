import React, { Fragment } from 'react'

export const Model = () => (
  <Fragment>
    <h3>Model JSON Serialization</h3>
    <p>Hive<sup>io</sup> uses the JSON Schema and Flux Standard Action specifications to automatically serialize and validate your data Models for network transport. Combined they become the standard format to transfer data to nearly any device or system. Complete with versioning and a schema registry, Hive<sup>io</sup> provides a universal application framework that can seamlessly run in a variety of clients and server environments.</p>
    <dl>
      <dt><em><strong>JSON Schema</strong></em></dt>
      <dd>The <a href='http://json-schema.org/' target='_blank'>JSON Schema</a> specification allows us to define a transport schema to validate incoming data. This can also be used to document your API with a definition that can be operated against. The specification defines that schemas can be hosted, giving you the ability to serve schemas through a static web server schema registry. You can use this to version your transport schemas and host them internally, externally, or both if you prefer.</dd>

      <dt><em><strong>Flux Standard Action</strong></em></dt>
      <dd>The <a href='https://github.com/redux-utilities/flux-standard-action' target='_blank'>Flux Standard Action</a> specification allows us to define a lightweight, network data payload used to build your services. Minimally, this provides our network payload structure with explicit support for typed data definintions. Payload objects are defined and validated by their associated JSON Schemas.</dd>
    </dl>
    <p>These Actors and Models would then be packaged up and built into your client side business logic or in the growing list of Docker images below.</p>
  </Fragment>
)
