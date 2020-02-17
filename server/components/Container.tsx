import { createStyles, WithStyles, withStyles } from '@material-ui/core'
import { capitalize } from '@material-ui/core/utils/helpers'
import classNames from 'classnames'
import React from 'react'

import { containerBreakpoint } from 'consts/layout'
import { round } from 'lib'

const styles = theme =>
  createStyles({
    widthSmall: {
      width: 'auto',
      [theme.breakpoints.up(660 + theme.spacing(6))]: {
        width: 660,
        marginLeft: 'auto',
        marginRight: 'auto'
      }
    },
    widthMedium: {
      width: 'auto',
      [theme.breakpoints.up(containerBreakpoint(theme))]: {
        width: 850,
        marginLeft: 'auto',
        marginRight: 'auto'
      }
    },
    widthLarge: {
      width: 'auto',
      [theme.breakpoints.up('md')]: {
        width: 880,
        marginLeft: 'auto',
        marginRight: 'auto'
      },
      [theme.breakpoints.up(round(880 / 0.7777))]: {
        width: '77.7777%'
      },
      [theme.breakpoints.up(round(1400 / 0.7777))]: {
        width: 1400
      }
    },
    widthXlarge: {
      width: 'auto',
      [theme.breakpoints.up('md')]: {
        width: 900,
        marginLeft: 'auto',
        marginRight: 'auto'
      },
      [theme.breakpoints.up(round(900 / 0.9))]: {
        width: '90%'
      },
      [theme.breakpoints.up(round(1800 / 0.9))]: {
        width: 1800
      }
    },
    widthFull: {
      width: '100%'
    },
    fullHeight: {
      height: '100%'
    }
  })

interface ContainerOwnProps {
  className?: string
  component?: string | (new (props: any) => React.Component)
  fullHeight?: boolean
  fullWidth?: boolean
  style?: React.CSSProperties
  width?: string | 'small' | 'medium' | 'large' | 'xlarge' | 'full'
}
type ContainerProps = React.HTMLAttributes<HTMLDivElement> &
  ContainerOwnProps &
  WithStyles<typeof styles>

class Container extends React.Component<ContainerProps> {
  static defaultProps = {
    component: 'div',
    fullHeight: false,
    fullWidth: false,
    width: 'medium'
  }

  render () {
    const {
      children,
      classes,
      className,
      component: Component,
      fullHeight,
      fullWidth,
      style,
      width,
      ...other
    } = this.props

    return (
      <Component
        className={classNames(
          {
            [classes[`width${capitalize(width)}`]]: !fullWidth,
            [classes.fullHeight]: fullHeight
          },
          className
        )}
        style={style}
        {...other}
      >
        {children}
      </Component>
    )
  }
}

export default withStyles(styles)(Container)
