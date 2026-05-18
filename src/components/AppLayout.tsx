import React, { type FC, lazy } from 'react'
import { remoteAppLayout } from '../remotes'
import { BRAND_LINK_LIST, NAV_LINK_LIST } from '../constants'
import styles from '../styles'

const RemoteAppLayout = lazy(remoteAppLayout)

const AppLayout: FC = () => (
  <>
    <style>{styles}</style>
    <RemoteAppLayout
      brandLink={BRAND_LINK_LIST}
      endLinks={NAV_LINK_LIST}
      color='dark'
      spaced
    />
  </>
)
export default AppLayout
