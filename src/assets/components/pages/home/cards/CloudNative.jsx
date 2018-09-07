import React from 'react'

import { Card, CardContent, CardImage } from '../../../common/card'

export const CloudNative = () => (
  <Card className='is-serverless'>
    <CardImage>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 512' height='96'><path d='M537.585 226.56C541.725 215.836 544 204.184 544 192c0-53.019-42.981-96-96-96-19.729 0-38.065 5.954-53.316 16.159C367.042 64.248 315.288 32 256 32c-88.366 0-160 71.634-160 160 0 2.728.07 5.439.204 8.133C40.171 219.845 0 273.227 0 336c0 79.529 64.471 144 144 144h368c70.692 0 128-57.308 128-128 0-61.93-43.983-113.586-102.415-125.44z' /></svg>
    </CardImage>
    <CardContent title='Cloud Native'>
      <p>Hive<sup>io</sup> provides cloud-native computing through standardized Docker images to wrap your domain logic with a lightweight, RESTful interface. This allows you to skip the boilerplate setup/maintenance and dive straight into adding immediate value to your application.</p>
      <p>Each base image is highly extensible and configurable right out of the box. They make very few assumptions to support different architectures which allows it to pair well with other cloud native initiatives and patterns.</p>
      <p>Overall Hive<sup>io</sup> allows you to make infrastructure decisions to suit your needs with little compromise.</p>
    </CardContent>
  </Card>
)
