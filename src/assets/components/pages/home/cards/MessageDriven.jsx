import React from 'react'

import { Card, CardContent, CardImage } from 'common/card'
import { Message } from 'icons'

export const MessageDriven = () => (
  <Card className='is-reactive'>
    <CardImage><Message height='96' /></CardImage>
    <CardContent title='Message Driven'>
      <p>Hive<sup>io</sup> provides an asynchronous, message passing framework that ensures loose coupling, isolation, and location transparency with Node.js and Kafka. We chose Node.js for its high performance in non-blocking I/O capabilities. Likewise, Kafka for its storage and messaging capabilities.</p>
    </CardContent>
  </Card>
)
