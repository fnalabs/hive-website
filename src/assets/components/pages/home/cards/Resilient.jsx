import React from 'react'

import { Card, CardContent, CardImage } from 'common/card'
import { Box } from 'icons'

export const Resilient = () => (
  <Card className='is-reactive'>
    <CardImage><Box height='96' /></CardImage>
    <CardContent title='Resilient'>
      <p>Each microservice container is a stateless, RESTful service with atomic responsibilities that can scale horizontally. You can contain and isolate aggregates in your domain model with these services to ensure that you are still capable of serving traffic, even during a catastrophic event or unexpected high volume.</p>
    </CardContent>
  </Card>
)
