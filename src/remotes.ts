import type { FC } from 'react'
import type { RemoteComponent } from '@mf-types/fnalabs_assets/compiled-types/types'
import type { IBlock } from '@mf-types/fnalabs_assets/Block'
import type { ICard } from '@mf-types/fnalabs_assets/Card'
import type { IColumn } from '@mf-types/fnalabs_assets/Column'
import type { IColumns } from '@mf-types/fnalabs_assets/Columns'
import type { IContainer } from '@mf-types/fnalabs_assets/Container'
import type { IHero } from '@mf-types/fnalabs_assets/Hero'
import type { IIcon } from '@mf-types/fnalabs_assets/Icon'
import type { IMedia } from '@mf-types/fnalabs_assets/Media'
import type { IMenu } from '@mf-types/fnalabs_assets/Menu'
import type { INotification } from '@mf-types/fnalabs_assets/Notification'
import type { ISection } from '@mf-types/fnalabs_assets/Section'

import type { IAppLayout } from '@mf-types/fnalabs_assets/AppLayout'
import type { IAsideLayout } from '@mf-types/fnalabs_assets/AsideLayout'
import type { IDirectionLayout } from '@mf-types/fnalabs_assets/DirectionLayout'

import { loadRemote } from '@module-federation/enhanced/runtime'
import { ASSETS } from './config'

// Icon remote components
export const remoteIconHiveIO = () => loadRemote(`${ASSETS}/icons/HiveIO`) as RemoteComponent<FC>

// Bulma remote components
export const remoteBlock = () => loadRemote(`${ASSETS}/Block`) as RemoteComponent<IBlock>
export const remoteCard = () => loadRemote(`${ASSETS}/Card`) as RemoteComponent<ICard>
export const remoteColumn = () => loadRemote(`${ASSETS}/Column`) as RemoteComponent<IColumn>;
export const remoteColumns = () => loadRemote(`${ASSETS}/Columns`) as RemoteComponent<IColumns>;
export const remoteContainer = () =>
  loadRemote(`${ASSETS}/Container`) as RemoteComponent<IContainer>
export const remoteHero = () => loadRemote(`${ASSETS}/Hero`) as RemoteComponent<IHero>
export const remoteIcon = () => loadRemote(`${ASSETS}/Icon`) as RemoteComponent<IIcon>
export const remoteMedia = () => loadRemote(`${ASSETS}/Media`) as RemoteComponent<IMedia>
export const remoteMenu = () => loadRemote(`${ASSETS}/Menu`) as RemoteComponent<IMenu>
export const remoteNotification = () => loadRemote(`${ASSETS}/Notification`) as RemoteComponent<INotification>
export const remoteSection = () => loadRemote(`${ASSETS}/Section`) as RemoteComponent<ISection>

// Custom remote components
export const remoteAppLayout = () => loadRemote(`${ASSETS}/AppLayout`) as RemoteComponent<IAppLayout>
export const remoteAsideLayout = () => loadRemote(`${ASSETS}/AsideLayout`) as RemoteComponent<IAsideLayout>
export const remoteDirectionLayout = () => loadRemote(`${ASSETS}/DirectionLayout`) as RemoteComponent<IDirectionLayout>
