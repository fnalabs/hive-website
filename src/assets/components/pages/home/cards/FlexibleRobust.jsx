import React from 'react'

import { Card, CardContent, CardImage } from 'common/card'
import { Flexible } from 'icons'

export const FlexibleRobust = () => (
  <Card className='m-6 is-robust'>
    <CardImage><Flexible height='96' /></CardImage>
    <CardContent title='Flexible &amp; Robust'>
      <p>Hive<sup>io</sup> uses the JSON Schema and Flux Standard Action specifications to automatically serialize and validate your data Models for network transport. We call it Model JSON Serialization and it allows you to standardize data exchanges directly into fully validated Model instance.</p>
    </CardContent>
  </Card>
)
