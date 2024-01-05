import { Nav } from "react-bootstrap"
import React from "react"

export interface HashLinkProps {
  style?: object
  path?: string
  disabled?: boolean
  className?: string
  onClick?: () => void
}

const HashLink = (props: React.PropsWithChildren<HashLinkProps>) => {
  const { path, className, disabled, style, children, onClick, ...other } = props

  const href = path ? import.meta.env.VITE_BASE_PATH + path : ""

  return (
    <span onClick={onClick}>
      <Nav.Link href={href} className={className} disabled={disabled} style={style} {...other}>
        {children}
      </Nav.Link>
    </span>
  )
}

export default HashLink
