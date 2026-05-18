import React, { type FC, lazy } from 'react'
import { Link } from 'react-router'

import { remoteBlock } from '../../remotes'

const Block = lazy(remoteBlock)

const Setup: FC = () => (
  <>
    <title>FnA Labs | Hive^io - Setup</title>
    <meta name="description" content="Setup Hive^io: a reactive, cloud-native framework. Follow the setup process for domain logic modules and infrastructure." />

    <Block article content>
      <h1>Setup</h1>
      <p>Hive<sup>io</sup> has minimal requirements for installation, allowing you to choose the solutions that suits your needs regarding storage, security, monitoring, and more. Once you have your cloud platform decided, you can start to code your domain logic that will eventually be deployed with one of the container types.</p>

      <h2 id='domain_logic'>Domain Logic</h2>
      <p>To get started with implementing your domain logic, install the following NPM package to your domain module(s). Other dependencies of your domain logic for your microservices will need to be installed separately.</p>
      <p><pre>$ npm install --save hive-io</pre></p>

      <h2 id='infrastructure'>Infrastructure</h2>
      <p>There are currently 4 infrastructure images available to cover anything from basic to complex microservice needs.</p>
      <dl>
        <dt><Link to='https://hub.docker.com/r/fnalabs/hive-base-js/' target='_blank' rel='noopener noreferrer'><em><strong>Base</strong></em></Link></dt>
        <dd><pre>$ docker pull fnalabs/hive-base-js:&lt;[release]|latest&gt;</pre></dd>

        <dt><Link to='https://hub.docker.com/r/fnalabs/hive-producer-js/' target='_blank' rel='noopener noreferrer'><em><strong>CQRS/ES Producer</strong></em></Link></dt>
        <dd><pre>$ docker pull fnalabs/hive-producer-js:&lt;[release]|latest&gt;</pre></dd>

        <dt><Link to='https://hub.docker.com/r/fnalabs/hive-consumer-js/' target='_blank' rel='noopener noreferrer'><em><strong>CQRS/ES Consumer</strong></em></Link></dt>
        <dd><pre>$ docker pull fnalabs/hive-consumer-js:&lt;[release]|latest&gt;</pre></dd>

        <dt><Link to='https://hub.docker.com/r/fnalabs/hive-stream-processor-js/' target='_blank' rel='noopener noreferrer'><em><strong>CQRS/ES Stream Processor</strong></em></Link></dt>
        <dd><pre>$ docker pull fnalabs/hive-stream-processor-js:&lt;[release]|latest&gt;</pre></dd>
      </dl>
      <p>So far, the list above defines some common types of microservices you may need. Future versions of the framework will add more types to the above and add support for multiple languages.</p>
    </Block>
  </>
)
export default Setup
