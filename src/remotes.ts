import type { RemoteComponent } from '../@mf-types/fnalabs_assets/compiled-types/types'
import type { IHiveIO } from '../@mf-types/fnalabs_assets/brands/HiveIO'
import type { IBlock } from '../@mf-types/fnalabs_assets/Block'
import type { IBox } from '../@mf-types/fnalabs_assets/Box'
import type { ICell } from '../@mf-types/fnalabs_assets/Cell'
import type { ICard } from '../@mf-types/fnalabs_assets/Card'
import type { IColumn } from '../@mf-types/fnalabs_assets/Column'
import type { IColumns } from '../@mf-types/fnalabs_assets/Columns'
import type { IContainer } from '../@mf-types/fnalabs_assets/Container'
import type { IGrid } from '../@mf-types/fnalabs_assets/Grid'
import type { IHero } from '../@mf-types/fnalabs_assets/Hero'
import type { IIcon } from '../@mf-types/fnalabs_assets/Icon'
import type { IImage } from '../@mf-types/fnalabs_assets/Image'
import type { ILevel } from '../@mf-types/fnalabs_assets/Level'
import type { IMedia } from '../@mf-types/fnalabs_assets/Media'
import type { IMenu } from '../@mf-types/fnalabs_assets/Menu'
import type { INotification } from '../@mf-types/fnalabs_assets/Notification'
import type { ISection } from '../@mf-types/fnalabs_assets/Section'

import type { IAppLayout } from '../@mf-types/fnalabs_assets/AppLayout'
import type { IAsideLayout } from '../@mf-types/fnalabs_assets/AsideLayout'
import type { IDirectionLayout } from '../@mf-types/fnalabs_assets/DirectionLayout'

import { loadRemote } from '@module-federation/enhanced/runtime'
import { ASSETS } from './config'

// Brand Icon remote components
export const remoteIconHiveIO = () => loadRemote(`${ASSETS}/brands/HiveIO`) as RemoteComponent<IHiveIO>

// Bulma remote components
export const remoteBlock = () => loadRemote(`${ASSETS}/Block`) as RemoteComponent<IBlock>
export const remoteBox = () => loadRemote(`${ASSETS}/Box`) as RemoteComponent<IBox>
export const remoteCell = () => loadRemote(`${ASSETS}/Cell`) as RemoteComponent<ICell>
export const remoteCard = () => loadRemote(`${ASSETS}/Card`) as RemoteComponent<ICard>
export const remoteColumn = () => loadRemote(`${ASSETS}/Column`) as RemoteComponent<IColumn>
export const remoteColumns = () => loadRemote(`${ASSETS}/Columns`) as RemoteComponent<IColumns>
export const remoteContainer = () =>
  loadRemote(`${ASSETS}/Container`) as RemoteComponent<IContainer>
export const remoteGrid = () => loadRemote(`${ASSETS}/Grid`) as RemoteComponent<IGrid>
export const remoteHero = () => loadRemote(`${ASSETS}/Hero`) as RemoteComponent<IHero>
export const remoteIcon = () => loadRemote(`${ASSETS}/Icon`) as RemoteComponent<IIcon>
export const remoteImage = () => loadRemote(`${ASSETS}/Image`) as RemoteComponent<IImage>
export const remoteLevel = () => loadRemote(`${ASSETS}/Level`) as RemoteComponent<ILevel>
export const remoteMedia = () => loadRemote(`${ASSETS}/Media`) as RemoteComponent<IMedia>
export const remoteMenu = () => loadRemote(`${ASSETS}/Menu`) as RemoteComponent<IMenu>
export const remoteNotification = () => loadRemote(`${ASSETS}/Notification`) as RemoteComponent<INotification>
export const remoteSection = () => loadRemote(`${ASSETS}/Section`) as RemoteComponent<ISection>

// Custom remote components
export const remoteAppLayout = () => loadRemote(`${ASSETS}/AppLayout`) as RemoteComponent<IAppLayout>
export const remoteAsideLayout = () => loadRemote(`${ASSETS}/AsideLayout`) as RemoteComponent<IAsideLayout>
export const remoteDirectionLayout = () => loadRemote(`${ASSETS}/DirectionLayout`) as RemoteComponent<IDirectionLayout>
