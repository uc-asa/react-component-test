import {ReactNode} from 'react'

export interface Props {
  href: string;
  children: ReactNode | Array<ReactNode>
}

function HyperLink ({children, href = '#'}: Props) {
  return (
    <a href={href}>{children}</a>
  )
}

export default HyperLink
