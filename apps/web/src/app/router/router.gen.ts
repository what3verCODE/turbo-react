/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './../../pages/__root'
import { Route as TagsIndexImport } from './../../pages/tags/index'
import { Route as SchedulesIndexImport } from './../../pages/schedules/index'
import { Route as TagsTagIdImport } from './../../pages/tags/$tagId'
import { Route as SchedulesScheduleIdImport } from './../../pages/schedules/$scheduleId'
import { Route as SchedulesScheduleIdCopyImport } from './../../pages/schedules/$scheduleId_.copy'

// Create Virtual Routes

const TagsLazyImport = createFileRoute('/tags')()
const SchedulesLazyImport = createFileRoute('/schedules')()

// Create/Update Routes

const TagsLazyRoute = TagsLazyImport.update({
    path: '/tags',
    getParentRoute: () => rootRoute,
} as any).lazy(() => import('./../../pages/tags.lazy').then((d) => d.Route))

const SchedulesLazyRoute = SchedulesLazyImport.update({
    path: '/schedules',
    getParentRoute: () => rootRoute,
} as any).lazy(() => import('./../../pages/schedules.lazy').then((d) => d.Route))

const TagsIndexRoute = TagsIndexImport.update({
    path: '/',
    getParentRoute: () => TagsLazyRoute,
} as any)

const SchedulesIndexRoute = SchedulesIndexImport.update({
    path: '/',
    getParentRoute: () => SchedulesLazyRoute,
} as any)

const TagsTagIdRoute = TagsTagIdImport.update({
    path: '/$tagId',
    getParentRoute: () => TagsLazyRoute,
} as any)

const SchedulesScheduleIdRoute = SchedulesScheduleIdImport.update({
    path: '/$scheduleId',
    getParentRoute: () => SchedulesLazyRoute,
} as any)

const SchedulesScheduleIdCopyRoute = SchedulesScheduleIdCopyImport.update({
    path: '/$scheduleId/copy',
    getParentRoute: () => SchedulesLazyRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
    interface FileRoutesByPath {
        '/schedules': {
            id: '/schedules'
            path: '/schedules'
            fullPath: '/schedules'
            preLoaderRoute: typeof SchedulesLazyImport
            parentRoute: typeof rootRoute
        }
        '/tags': {
            id: '/tags'
            path: '/tags'
            fullPath: '/tags'
            preLoaderRoute: typeof TagsLazyImport
            parentRoute: typeof rootRoute
        }
        '/schedules/$scheduleId': {
            id: '/schedules/$scheduleId'
            path: '/$scheduleId'
            fullPath: '/schedules/$scheduleId'
            preLoaderRoute: typeof SchedulesScheduleIdImport
            parentRoute: typeof SchedulesLazyImport
        }
        '/tags/$tagId': {
            id: '/tags/$tagId'
            path: '/$tagId'
            fullPath: '/tags/$tagId'
            preLoaderRoute: typeof TagsTagIdImport
            parentRoute: typeof TagsLazyImport
        }
        '/schedules/': {
            id: '/schedules/'
            path: '/'
            fullPath: '/schedules/'
            preLoaderRoute: typeof SchedulesIndexImport
            parentRoute: typeof SchedulesLazyImport
        }
        '/tags/': {
            id: '/tags/'
            path: '/'
            fullPath: '/tags/'
            preLoaderRoute: typeof TagsIndexImport
            parentRoute: typeof TagsLazyImport
        }
        '/schedules/$scheduleId/copy': {
            id: '/schedules/$scheduleId/copy'
            path: '/$scheduleId/copy'
            fullPath: '/schedules/$scheduleId/copy'
            preLoaderRoute: typeof SchedulesScheduleIdCopyImport
            parentRoute: typeof SchedulesLazyImport
        }
    }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
    SchedulesLazyRoute: SchedulesLazyRoute.addChildren({
        SchedulesScheduleIdRoute,
        SchedulesIndexRoute,
        SchedulesScheduleIdCopyRoute,
    }),
    TagsLazyRoute: TagsLazyRoute.addChildren({ TagsTagIdRoute, TagsIndexRoute }),
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/schedules",
        "/tags"
      ]
    },
    "/schedules": {
      "filePath": "schedules.lazy.tsx",
      "children": [
        "/schedules/$scheduleId",
        "/schedules/",
        "/schedules/$scheduleId/copy"
      ]
    },
    "/tags": {
      "filePath": "tags.lazy.tsx",
      "children": [
        "/tags/$tagId",
        "/tags/"
      ]
    },
    "/schedules/$scheduleId": {
      "filePath": "schedules/$scheduleId.tsx",
      "parent": "/schedules"
    },
    "/tags/$tagId": {
      "filePath": "tags/$tagId.tsx",
      "parent": "/tags"
    },
    "/schedules/": {
      "filePath": "schedules/index.tsx",
      "parent": "/schedules"
    },
    "/tags/": {
      "filePath": "tags/index.tsx",
      "parent": "/tags"
    },
    "/schedules/$scheduleId/copy": {
      "filePath": "schedules/$scheduleId_.copy.tsx",
      "parent": "/schedules"
    }
  }
}
ROUTE_MANIFEST_END */
