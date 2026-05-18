import React, { type FC, lazy } from 'react'
import { Link } from 'react-router'

import { remoteBlock } from '../../remotes'

const Block = lazy(remoteBlock)

const Domain: FC = () => (
  <>
    <title>FnA Labs | Hive^io - Domain Logic</title>
    <meta name="description" content="Domain Logic in Hive^io: a reactive, cloud-native framework. The following describes the use of the Actor Model." />

    <Block article content>
      <h1>Domain Logic</h1>
      <p>Domain needs vary greatly for a variety of concerns such as storage, security, monitoring, and more. There are a plethora of options available in each of those categories and the list continues to grow. Hive<sup>io</sup> is the glue that binds them. Regardless of the desired patterns, the same atomic operations can be applied. The first opinion Hive<sup>io</sup> makes is with the <Link to='https://en.wikipedia.org/wiki/Actor_model' target='_blank' rel='noopener noreferrer'>Actor Model</Link>.</p>

      <h2 id='actor_model'>Actor Model</h2>
      <p>The Actor Model consists of 'actors' as universal primitives of concurrent computation. Hive<sup>io</sup> Actors perform actions on command by making local decisions, calling on other actors to perform various actions, or sending messages to other actors through various means. This is a relatively plain but powerful concept that provides the basic building blocks for your application logic. Most development time is spent within this construct. Actors have various channels with which they communicate:</p>
      <dl>
        <dt><em><strong>Immediate</strong></em></dt>
        <dd>Asynchronously making local decisions or calling on another actor to perform.</dd>

        <dt><em><strong>Eventual</strong></em></dt>
        <dd>Sending messages via an internal (<Link to='https://fnalabs.github.io/hive-io/System.html' target='_blank' rel='noopener noreferrer'>Actor System</Link>) or external (<Link to='https://kafka.apache.org/' target='_blank' rel='noopener noreferrer'>Kafka</Link>) message bus.</dd>
      </dl>
      <p>Hive<sup>io</sup> Actors are able to achieve highly concurrent operations by leveraging <Link to='https://nodejs.org/' target='_blank' rel='noopener noreferrer'>Node.js</Link>' non-blocking, asynchronous I/O. These actors can be arranged to perform tasks for a variety of architectures. Everything is asynchronous from the ground up, even validation via transport schemas.</p>

      <h2 id='actor_types'>Actor Types</h2>
      <p>There are 2 different types of Actors defined in the Hive<sup>io</sup> framework. They are:</p>
      <dl>
        <dt><Link to='https://fnalabs.github.io/hive-io/Actor.html' target='_blank' rel='noopener noreferrer'><strong>Actor</strong></Link></dt>
        <dd>This is the base Actor for the Hive<sup>io</sup> framework. It is similar to a combination of a Controller and Model classes in the MVC pattern. It can be defined to parse paths from URLs, associated with Models and their Schemas, or both.</dd>

        <dt><Link to='https://fnalabs.github.io/hive-io/MessageActor.html' target='_blank' rel='noopener noreferrer'><strong>MessageActor</strong></Link></dt>
        <dd>This extends the base Actor for the Hive<sup>io</sup> framework. It is meant to handle more specific use cases for Domain Commands|Events to act upon the Model. It can be defined to support only Event Models and their Schemas but also Commands Models and Data Models. It can also be defined to parse paths from URLs along with the previously mentioned Models and their Schemas.</dd>
      </dl>
    </Block>
  </>
)
export default Domain
