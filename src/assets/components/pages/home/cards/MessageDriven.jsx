import React from 'react'

import { Card, CardContent, CardImage } from '../../../common/card'

export const MessageDriven = () => (
  <Card className='is-reactive'>
    <CardImage>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' height='96'><path d='M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 7.1 5.8 12 12 12 2.4 0 4.9-.7 7.1-2.4L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm16 352c0 8.8-7.2 16-16 16H288l-12.8 9.6L208 428v-60H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16h384c8.8 0 16 7.2 16 16v288z' /></svg>
    </CardImage>
    <CardContent title='Message Driven'>
      <p>Hive<sup>io</sup> provides an asynchronous, message passing framework that ensures loose coupling, isolation, and location transparency with Node.js and Kafka. We chose Node.js for its high performance in non-blocking I/O capabilities. Likewise, Kafka for its storage and messaging capabilities.</p>
    </CardContent>
  </Card>
)
