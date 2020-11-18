import React from 'react'

import { Card, CardContent, CardImage } from 'common/card'
import { Box } from 'icons'

export const Resilient = () => (
  <Card className='m-6 is-reactive'>
    <CardImage><Box height='96' /></CardImage>
    <CardContent title='Resilient'>
      <p>Each microservice contains and isolates aggregates in your domain model to ensure that you are still capable of serving traffic, even during a catastrophic event or unexpected high volume.</p>
    </CardContent>
  </Card>
)
