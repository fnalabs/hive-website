import React, { type FC, lazy } from 'react'
import { Link } from 'react-router'

import { remoteBlock } from '../../remotes'

const Block = lazy(remoteBlock)

const Model: FC = () => (
  <>
    <title>FnA Labs | Hive^io - Data Model</title>
    <meta name="description" content="Data Modeling in Hive^io: a reactive, cloud-native framework. The following describes JSON Serialization." />

    <Block article content>
      <h1>Data Model</h1>
      <p>Starting small, let's first focus on the most important part of any domain, the data. For this, Hive<sup>io</sup> leverages a few standards to provide a schema-based serialization solution based on JSON. JSON has been the universal standard for data exchanges for some time. Combined with a flexible and robust schema solution using the JSON Schema specification, Hive<sup>io</sup> is able to provide a comparable serializing solution to the likes of Protobuf, Avro, or Thrift.</p>

      <h2 id='json_serialization'>JSON Serialization</h2>
      <p>Hive<sup>io</sup> uses the JSON Schema and Flux Standard Action specifications to automatically serialize and validate your data Models for network transport. Combined they become the standard format to transfer data to nearly any device or system. Complete with versioning and a schema registry, Hive<sup>io</sup> provides a universal application framework that can seamlessly run in a variety of clients and server environments.</p>
      <dl>
        <dt><em><strong>JSON Schema</strong></em></dt>
        <dd>The <Link to='http://json-schema.org/' target='_blank' rel='noopener noreferrer'>JSON Schema</Link> specification allows us to define a transport schema to validate incoming data. This can also be used to document your API with a definition that can be operated against. The specification defines that schemas can be hosted, giving you the ability to serve schemas through a static web server schema registry. You can use this to version your transport schemas and host them internally, externally, or both if you prefer.</dd>

        <dt><em><strong>Flux Standard Action</strong></em></dt>
        <dd>The <Link to='https://github.com/redux-utilities/flux-standard-action' target='_blank' rel='noopener noreferrer'>Flux Standard Action</Link> specification allows us to define a lightweight, network data payload used to build your services. Minimally, this provides our network payload structure with explicit support for typed data definintions. Payload objects are defined and validated by their associated JSON Schemas.</dd>
      </dl>
      <p>These Models would then be packaged up and built into your client side domain logic or in the growing list of Docker images supporting the infrastructure layer of the Hive<sup>io</sup> framework.</p>

      <h2 id='schema_registry'>Schema Registry</h2>
      <p>A <Link to='https://docs.confluent.io/current/schema-registry/index.html' target='_blank' rel='noopener noreferrer'>schema registry</Link> can easily be achieved by combining concepts in the JSON Schema specification and adding a static file server to serve the JSON schemas. Using the <Link to='https://json-schema.org/learn/getting-started-step-by-step.html#starting-the-schema' target='_blank' rel='noopener noreferrer'><code>$id</code> keyword</Link>, you can specify a URI for the schema for hosting. You could use Node.js to host the files or even Nginx or Apache Web Server to serve the static JSON schemas.</p>
      <p>We have not decided to build and maintain a solution specific to the Hive<sup>io</sup> framework at this time due to time constraints but either hosting solution should be straightforward. Furthermore, hosting Schemas may not be necessary for your solution depending on the complexity of the domain and/or team(s) involved in building and maintaining your solutions.</p>
    </Block>
  </>
)
export default Model
