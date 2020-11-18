import React from 'react'

import { Card, CardContent, CardImage } from 'common/card'
import { ArrowRight } from 'icons'

export const Elastic = () => (
  <Card className='m-6 is-reactive'>
    <CardImage><ArrowRight height='96' /></CardImage>
    <CardContent title='Elastic'>
      <p>Hive<sup>io</sup> enables auto scaling solutions to save you not only money but increased uptime when production workloads get unpredictable.</p>
    </CardContent>
  </Card>
)
