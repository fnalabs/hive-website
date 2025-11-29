import React, { type FC, lazy } from 'react'
import { remoteAppLayout } from '../remotes'
import { BRAND_LINK, NAV_LINK_LIST } from '../constants'

const RemoteAppLayout = lazy(remoteAppLayout)

const AppLayout: FC = () => (
  <RemoteAppLayout
    brandLink={BRAND_LINK}
    endLinks={NAV_LINK_LIST}
    color='dark'
    spaced
  />
)
export default AppLayout
