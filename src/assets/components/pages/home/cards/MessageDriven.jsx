import React from 'react'

import { Card, CardContent, CardImage } from 'common/card'
import { Message } from 'icons'

export const MessageDriven = () => (
  <Card className='m-6 is-reactive'>
    <CardImage><Message height='96' /></CardImage>
    <CardContent title='Message Driven'>
      <p>Hive<sup>io</sup> provides an asynchronous, message passing framework that ensures loose coupling, isolation, and location transparency with Node.js and Kafka.</p>
    </CardContent>
  </Card>
)
