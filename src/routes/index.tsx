import React from 'react'
import { RouteObject } from 'react-router'
import { registerRemotes } from '@module-federation/enhanced/runtime'
import cfg from '../config'

import AppLayout from '../components/AppLayout'
import AsideLayout from '../components/AsideLayout'
import DirectionLayout from '../components/DirectionLayout'

import Home from './Home/Home'
import Overview from './Overview/Overview'
import Model from './Overview/Model'
import Domain from './Overview/Domain'
import Infrastructure from './Overview/Infrastructure'
import Telemetry from './Overview/Telemetry'
import Start from './Start/Start'
import Setup from './Start/Setup'
import Basic from './Start/Basic'
import Rest from './Start/Rest'
import CqrsEs from './Start/CqrsEs'
import Documentation from './Documentation/Documentation'
import Environments from './Documentation/Environments'

registerRemotes(Object.entries(cfg.remotes).map(([name, remote]) => ({
  name,
  entry: remote.entry,
})))

const Routes: RouteObject = {
  element: <AppLayout />,
  children: [
    {
      element: <DirectionLayout />,
      children: [
        {
          path: '/hive',
          element: <Home />,
        },
        {
          element: <AsideLayout />,
          children: [
            {
              path: '/hive/overview',
              element: <Overview />,
            },
            {
              path: '/hive/model',
              element: <Model />,
            },
            {
              path: '/hive/domain',
              element: <Domain />,
            },
            {
              path: '/hive/infrastructure',
              element: <Infrastructure />,
            },
            {
              path: '/hive/telemetry',
              element: <Telemetry />,
            },
            {
              path: '/hive/start',
              element: <Start />,
            },
            {
              path: '/hive/setup',
              element: <Setup />,
            },
            {
              path: '/hive/basic',
              element: <Basic />,
            },
            {
              path: '/hive/rest',
              element: <Rest />,
            },
            {
              path: '/hive/cqrs-es',
              element: <CqrsEs />,
            },
            {
              path: '/hive/documentation',
              element: <Documentation />,
            },
            {
              path: '/hive/environments',
              element: <Environments />,
            },
          ],
        },
      ],
    },
  ],
}
export default Routes
