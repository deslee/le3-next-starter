import React from 'react'
import { Link as MaterialLink } from "@material-ui/core"
import NextLink, { LinkProps } from 'next/link'

type Props = {} & LinkProps

const Link: React.FC<Props> = ({href, as, children, ...rest}) => {
  return <NextLink href={href} as={as}>
      <MaterialLink href={href.toString()} {...rest}>{children}</MaterialLink>
  </NextLink>
}

export default Link