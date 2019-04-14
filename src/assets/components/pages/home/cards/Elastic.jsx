import React from 'react'

import { Card, CardContent, CardImage } from 'common/card'
import { ArrowRight } from 'icons'

export const Elastic = () => (
  <Card className='is-reactive'>
    <CardImage><ArrowRight height='96' /></CardImage>
    <CardContent title='Elastic'>
      <p>Hive<sup>io</sup> provides scalable solutions by allowing immediate deployments during peaks in your system load. Furthermore, you can apply auto scaling solutions to save you not only money but increased uptime when production workloads get unpredictable.</p>
    </CardContent>
  </Card>
)
