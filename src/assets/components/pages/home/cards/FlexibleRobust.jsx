import React from 'react'

import { Card, CardContent, CardImage } from '../../../common/card'

export const FlexibleRobust = () => (
  <Card className='is-robust'>
    <CardImage>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' height='96'><path d='M0 168v-16c0-13.255 10.745-24 24-24h360V80c0-21.367 25.899-32.042 40.971-16.971l80 80c9.372 9.373 9.372 24.569 0 33.941l-80 80C409.956 271.982 384 261.456 384 240v-48H24c-13.255 0-24-10.745-24-24zm488 152H128v-48c0-21.314-25.862-32.08-40.971-16.971l-80 80c-9.372 9.373-9.372 24.569 0 33.941l80 80C102.057 463.997 128 453.437 128 432v-48h360c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24z' /></svg>
    </CardImage>
    <CardContent title='Flexible &amp; Robust'>
      <p>There is no need to worry about having a certain pattern or architecture available, Hive<sup>io</sup> is exceedingly flexible and extensible. Just design what solution you think fits best and roll it into the infrastructure. Simply pick the container type that fits your needs and get coding.</p>
      <p>Hive<sup>io</sup> uses the JSON Schema and Flux Standard Action specifications to automatically serialize and validate your data Models for network transport. We call it Model JSON Serialization and it allows you to standardize data exchanges directly into fully validated Model instance.</p>
    </CardContent>
  </Card>
)
