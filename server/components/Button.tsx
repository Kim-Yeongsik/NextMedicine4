import { Button as MuiButton } from '@material-ui/core'
import { ButtonProps as MuiButtonProps } from '@material-ui/core/Button'
import NextLink from 'next/link'
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Button (props: MuiButtonProps) {
  const { children, href, ...othersProps } = props

  if (href.startsWith('#')) {
    return (
      <MuiButton
        {...othersProps}
        component={linkProps => (
          <AnchorLink {...linkProps} href={href} variant='button' />
        )}
      >
        {children}
      </MuiButton>
    )
  } else {
    return (
      <NextLink href={href}>
        <MuiButton {...othersProps}>{children}</MuiButton>
      </NextLink>
    )
  }
}

export default Button
