import React, { type FC, lazy } from 'react'
import { remoteAsideLayout } from '../remotes'
import { VERSION_LABEL, NAV_LINK_LIST } from '../constants'

const RemoteAsideLayout = lazy(remoteAsideLayout)

const AsideLayout: FC = () => (
  <RemoteAsideLayout list={[{ label: VERSION_LABEL, list: NAV_LINK_LIST }]} />
)
export default AsideLayout
