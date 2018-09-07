import React from 'react'

import { Card, CardContent, CardImage } from '../../../common/card'

export const Resilient = () => (
  <Card className='is-reactive'>
    <CardImage>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' height='96'><path d='M0 180V56c0-13.3 10.7-24 24-24h124c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H64v84c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12zM288 44v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12V56c0-13.3-10.7-24-24-24H300c-6.6 0-12 5.4-12 12zm148 276h-40c-6.6 0-12 5.4-12 12v84h-84c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24V332c0-6.6-5.4-12-12-12zM160 468v-40c0-6.6-5.4-12-12-12H64v-84c0-6.6-5.4-12-12-12H12c-6.6 0-12 5.4-12 12v124c0 13.3 10.7 24 24 24h124c6.6 0 12-5.4 12-12z' /></svg>
    </CardImage>
    <CardContent title='Resilient'>
      <p>Each microservice container is a stateless, RESTful service with atomic responsibilities that can scale horizontally. You can contain and isolate aggregates in your domain model with these services to ensure that you are still capable of serving traffic, even during a catastrophic event or unexpected high volume.</p>
    </CardContent>
  </Card>
)
