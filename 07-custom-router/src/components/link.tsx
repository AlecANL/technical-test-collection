import {EVENTS} from "../const/events.ts";
import {AnchorHTMLAttributes} from "react";
interface IUrlParameters {
}

interface ILinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string
  children?: React.ReactNode
}

export function navigate (path: string, parameters?: IUrlParameters) {
  window.history.pushState(parameters, '', path)
  const navigationEvent = new Event(EVENTS.PUSH_STATE)
  window.dispatchEvent(navigationEvent)
}

export function Link(props: ILinkProps) {
  const {to, children, target, ...otherProps} = props

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const isMainEvent = event.button === 0;
    const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey;
    const isManageableEvent = !target || target === '_self';

    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      event.preventDefault()
      navigate(to)
    }
  }

  return (
    <>
      <a {...otherProps} onClick={handleClick} href={to} >
        {children}
      </a>
    </>
  )
}