import React, { Fragment } from 'react'

export const Business = () => (
  <Fragment>
    <h3>Business Logic</h3>
    <p>Business needs vary greatly for a variety of concerns such as storage, security, monitoring, and more. There are a plethora of options available in each of those categories and the list continues to grow. Hive<sup>io</sup> is the glue that binds them. Regardless of the desired patterns, the same atomic operations can be applied. The first opinion Hive<sup>io</sup> makes is with the <a href='https://en.wikipedia.org/wiki/Actor_model' target='_blank'>Actor Model</a>.</p>

    <h5>Actor Model</h5>
    <p>The Actor Model consists of 'actors' as universal primitives of concurrent computation. Hive<sup>io</sup> Actors perform actions on command by making local decisions, calling on other actors to perform various actions, or sending messages to other actors through various means. This is a relatively plain but powerful concept that provides the basic building blocks for your application logic. Most development time is spent within this construct. Actors have various channels with which they communicate:</p>
    <dl>
      <dt><em><strong>Immediate</strong></em></dt>
      <dd>Asynchronously making local decisions or calling on another actor to perform.</dd>

      <dt><em><strong>Eventual</strong></em></dt>
      <dd>Sending messages via an internal (<a href='https://fnalabs.github.io/hive-js/#system' target='_blank'>Actor System</a>) or external (<a href='https://kafka.apache.org/' target='_blank'>Kafka</a>) message bus.</dd>
    </dl>
    <p>Hive<sup>io</sup> Actors are able to achieve highly concurrent operations by leveraging <a href='https://nodejs.org/' target='_blank'>Node.js</a>' non-blocking, asynchronous I/O. These actors can be arranged to perform tasks for a variety of architectures. Everything is asynchronous from the ground up, even validation via transport schemas.</p>
  </Fragment>
)
