import type { IDirectionLayout } from '@mf-types/fnalabs_assets/DirectionLayout'
import React, { type FC, lazy } from 'react'
import { useLocation } from 'react-router'
import { remoteDirectionLayout } from '../remotes'
import { DIRECTED_LINK_MAP } from '../constants'

const RemoteDirectionLayout = lazy(remoteDirectionLayout)

const DirectionLayout: FC = () => {
  const location = useLocation().pathname
  const footerLinks: IDirectionLayout['links'] = DIRECTED_LINK_MAP[location]

  return <RemoteDirectionLayout color='primary' links={footerLinks} />
}
export default DirectionLayout
