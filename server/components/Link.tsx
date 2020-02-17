import { Link as MuiLink } from '@material-ui/core'
import { LinkProps as MuiLinkProps } from '@material-ui/core/Link'
import NextLink from 'next/link'
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

interface LinkOwnProps {
  offset?: number
}

type LinkProps = MuiLinkProps & LinkOwnProps

function Link (props: LinkProps) {
  const { children, href, offset, ...othersProps } = props

  if (href.startsWith('#')) {
    return (
      <MuiLink
        {...othersProps}
        component={linkProps => (
          <AnchorLink
            {...linkProps}
            offset={offset}
            href={href}
            variant='button'
          />
        )}
      >
        {children}
      </MuiLink>
    )
  } else {
    return (
      <NextLink href={href}>
        <MuiLink {...othersProps} href='#'>
          {children}
        </MuiLink>
      </NextLink>
    )
  }
}

export default Link
