import type { ComponentType } from 'react'
import type { ICard } from '@mf-types/fnalabs_assets/Card'
import type { IContainer } from '@mf-types/fnalabs_assets/Container'
import type { IHero } from '@mf-types/fnalabs_assets/Hero'
import type { IMedia } from '@mf-types/fnalabs_assets/Media'
import type { ITile } from '@mf-types/fnalabs_assets/Tile'

import { loadRemote } from '@module-federation/enhanced/runtime'
import { ASSETS } from './config'

export const remoteCard = () => loadRemote(`${ASSETS}/Card`) as Promise<{ default: ComponentType<ICard> }>
export const remoteContainer = () =>
  loadRemote(`${ASSETS}/Container`) as Promise<{ default: ComponentType<IContainer> }>
export const remoteHero = () => loadRemote(`${ASSETS}/Hero`) as Promise<{ default: ComponentType<IHero> }>
export const remoteMedia = () => loadRemote(`${ASSETS}/Media`) as Promise<{ default: ComponentType<IMedia> }>
export const remoteTile = () => loadRemote(`${ASSETS}/Tile`) as Promise<{ default: ComponentType<ITile> }>
