import { IBrandLink } from '@mf-types/fnalabs_assets/Navbar'

export const VERSION_LABEL = 'v2.1.3'
export const BRAND_LINK: IBrandLink = { href: '/hive', label: 'HiveIO', brandIcon: 'HiveIO' }
export const HOME_LINK = { href: '/hive', label: 'Home' }
export const OVERVIEW_LINK = { href: '/hive/overview', label: 'Overview' }
export const MODEL_LINK = { href: '/hive/model', label: 'Data Model' }
export const DOMAIN_LINK = { href: '/hive/domain', label: 'Domain Logic' }
export const INFRA_LINK = { href: '/hive/infrastructure', label: 'Infrastructure' }
export const TELEMETRY_LINK = { href: '/hive/telemetry', label: 'Telemetry' }
export const START_LINK = { href: '/hive/start', label: 'Get Started' }
export const SETUP_LINK = { href: '/hive/setup', label: 'Setup' }
export const BASIC_LINK = { href: '/hive/basic', label: 'Basic Example' }
export const REST_LINK = { href: '/hive/rest', label: 'REST Example' }
export const CQRS_LINK = { href: '/hive/cqrs-es', label: 'CQRS/ES Example' }
export const DOCS_LINK = { href: '/hive/documentation', label: 'Documentation' }
export const ENV_LINK = { href: '/hive/environments', label: 'Environments' }
export const API_LINK = { href: 'https://fnalabs.github.io/hive-io/', label: 'API Reference' }

export const NAV_LINK_LIST = [
  { ...OVERVIEW_LINK, list: [
    MODEL_LINK,
    DOMAIN_LINK,
    INFRA_LINK,
    TELEMETRY_LINK,
  ]},
  { ...START_LINK, list: [
    { ...SETUP_LINK, divider: true },
    BASIC_LINK,
    REST_LINK,
    CQRS_LINK,
  ]},
  { ...DOCS_LINK, list: [
    ENV_LINK,
    API_LINK,
  ]},
]
export const DIRECTED_LINK_MAP = {
  [HOME_LINK.href]: {
    next: OVERVIEW_LINK,
  },
  [OVERVIEW_LINK.href]: {
    prev: HOME_LINK,
    next: MODEL_LINK,
  },
  [MODEL_LINK.href]: {
    prev: OVERVIEW_LINK,
    up: OVERVIEW_LINK,
    next: DOMAIN_LINK,
  },
  [DOMAIN_LINK.href]: {
    prev: MODEL_LINK,
    up: OVERVIEW_LINK,
    next: INFRA_LINK,
  },
  [INFRA_LINK.href]: {
    prev: DOMAIN_LINK,
    up: OVERVIEW_LINK,
    next: TELEMETRY_LINK,
  },
  [TELEMETRY_LINK.href]: {
    prev: INFRA_LINK,
    up: OVERVIEW_LINK,
    next: START_LINK,
  },
  [START_LINK.href]: {
    prev: TELEMETRY_LINK,
    next: SETUP_LINK,
  },
  [SETUP_LINK.href]: {
    prev: START_LINK,
    up: START_LINK,
    next: BASIC_LINK,
  },
  [BASIC_LINK.href]: {
    prev: SETUP_LINK,
    up: START_LINK,
    next: REST_LINK,
  },
  [REST_LINK.href]: {
    prev: BASIC_LINK,
    up: START_LINK,
    next: CQRS_LINK,
  },
  [CQRS_LINK.href]: {
    prev: REST_LINK,
    up: START_LINK,
    next: DOCS_LINK,
  },
  [DOCS_LINK.href]: {
    prev: CQRS_LINK,
    next: ENV_LINK,
  },
  [ENV_LINK.href]: {
    prev: DOCS_LINK,
    up: DOCS_LINK,
    next: API_LINK,
  },
}
