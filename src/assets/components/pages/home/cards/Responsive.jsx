import React from 'react'

import { Card, CardContent, CardImage } from 'common/card'
import { Lightning } from 'icons'

export const Responsive = () => (
  <Card className='is-reactive'>
    <CardImage><Lightning height='96' /></CardImage>
    <CardContent title='Responsive'>
      <p>Hive<sup>io</sup> is able to give lightning fast response times by implementing and supporting microservices with Node.js. You immediately get high performance by leveraging a high volume and low latency non-blocking I/O solution.</p>
    </CardContent>
  </Card>
)
