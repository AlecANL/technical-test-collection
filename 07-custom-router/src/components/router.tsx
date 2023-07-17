import {IRouter} from "../models/router.interface.ts";
import {Children, useEffect, useState} from "react";
import {EVENTS} from "../const/events.ts";
import {match} from "path-to-regexp";

interface IRouterProps {
  routes: IRouter[]
  defaultComponent?: React.ElementType<any>
  children?: React.ReactNode
}

export function Router (props: IRouterProps) {
  const [route, setRoute] = useState(window.location.pathname)
  const { routes, children,  defaultComponent: DefaultComponent } = props

  useEffect(() => {
    const onLocationChange = () => {
      setRoute(window.location.pathname)
    }

    window.addEventListener(EVENTS.PUSH_STATE, onLocationChange)
    window.addEventListener(EVENTS.POP_STATE, onLocationChange)

    return () => {
      window.removeEventListener(EVENTS.PUSH_STATE, onLocationChange)
      window.removeEventListener(EVENTS.POP_STATE, onLocationChange)
    }
  }, [])

  let routeParameters = {}

  const routesFromChildren = Children.map((children), (child) => {
    const { props, type } = child as any
    const { name } = type
    const isRoute = name === 'Route'

    if (!isRoute) { return null; }

    return props
  });

  const routesToUse = routes.concat(routesFromChildren as IRouter[])


  const CurrentComponent = routesToUse.find((currentRoute) => {
    if (currentRoute.path === route) { return true; }

    const matchedUrl = match(currentRoute.path, { decode: decodeURIComponent })
    const matched = matchedUrl(route)

    if (!matched) { return false; }

    routeParameters = matched.params
    return true
  })?.Component



 return CurrentComponent
   ? <CurrentComponent routeParams={routeParameters} />
   : DefaultComponent ? <DefaultComponent routeParams={routeParameters} /> : <h1>404 - Not Found</h1>
}

