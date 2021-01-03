import React from 'react'

import { Card, CardContent, CardImage } from 'common/card'
import { Cloud } from 'icons'

export const CloudNative = () => (
  <Card className='m-6 is-serverless'>
    <CardImage><Cloud height='96' /></CardImage>
    <CardContent title='Cloud Native'>
      <p>Hive<sup>io</sup> is implemented with standardized Docker images to wrap your domain logic with a lightweight, RESTful interface. This allows you to skip the boilerplate setup/maintenance and dive straight into adding immediate value to your application.</p>
      <p>Each base image is highly extensible and configurable right out of the box. They make very few assumptions to support different architectures which allows it to pair well with other cloud native initiatives and patterns.</p>
      <p>We've even added embedded observability with the flip of a switch by integrating with OpenTelemetry. This gives immediate visibility into how your services perform with tracing and metrics support.</p>
    </CardContent>
  </Card>
)
