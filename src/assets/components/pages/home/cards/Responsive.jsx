import React from 'react'

import { Card, CardContent, CardImage } from 'common/card'

export const Responsive = () => (
  <Card className='is-reactive'>
    <CardImage>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512' height='96'><path d='M295.973 160H180.572L215.19 30.184C219.25 14.956 207.756 0 192 0H56C43.971 0 33.8 8.905 32.211 20.828l-31.996 240C-1.704 275.217 9.504 288 24.004 288h118.701L96.646 482.466C93.05 497.649 104.659 512 119.992 512c8.35 0 16.376-4.374 20.778-11.978l175.973-303.997c9.244-15.967-2.288-36.025-20.77-36.025z' /></svg>
    </CardImage>
    <CardContent title='Responsive'>
      <p>Hive<sup>io</sup> is able to give lightning fast response times by implementing and supporting microservices with Node.js. You immediately get high performance by leveraging a high volume and low latency non-blocking I/O solution.</p>
    </CardContent>
  </Card>
)
