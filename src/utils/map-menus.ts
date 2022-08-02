import { RouteRecordRaw } from 'vue-router'

let firstRoute: any = null

export function mapMenuToRoute(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  // 1. 先去加载默认所有的routes
  const allRoutes: RouteRecordRaw[] = []
  const routeFiles = require.context('../router/main', true, /\.ts/)
  routeFiles.keys().forEach((key) => {
    console.log(key)
    const route = require('../router/main' + key.split('.')[1])
    allRoutes.push(route.default)
  })

  // 2. 根据菜单获取需要添加的routes
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) routes.push(route)
        if (!firstRoute) {
          firstRoute = menu
        }
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }

  _recurseGetRoute(userMenus)

  return routes
}

export function menuMapToRoute(menuList: any[], currentPath: string): any {
  for (const key of menuList) {
    if (key.type === 1) {
      const findMenu = menuMapToRoute(key.children ?? [], currentPath)
      if (findMenu) {
        return findMenu
      }
    } else if (key.type === 2 && currentPath === key.url) {
      return key
    }
  }
}

export { firstRoute }
