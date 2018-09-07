import React from 'react'

import { Card, CardContent, CardImage } from '../../../common/card'

export const Elastic = () => (
  <Card className='is-reactive'>
    <CardImage>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' height='96'><path d='M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z' /></svg>
    </CardImage>
    <CardContent title='Elastic'>
      <p>Hive<sup>io</sup> provides scalable solutions by allowing immediate deployments during peaks in your system load. Furthermore, you can apply auto scaling solutions to save you not only money but increased uptime when production workloads get unpredictable.</p>
    </CardContent>
  </Card>
)
