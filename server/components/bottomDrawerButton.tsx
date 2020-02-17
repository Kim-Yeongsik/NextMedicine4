import {
  createStyles,
  Fab,
  Icon,
  WithStyles,
  withStyles
} from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu'

import classNames from 'classnames'
import { containerBreakpoint } from 'consts/layout'

import React from 'react'

const styles = theme =>
  createStyles({
    fab: {
      top: 'auto',
      position: 'fixed',
      justifyContent: 'flex-start',
      left: '14px',
      bottom: '27px'
    },
    iconCenter: {
      // paddingLeft: '12px',
      paddingLeft: theme.spacing(2)
    }
    // hide: {
    //   [theme.breakpoints.down(containerBreakpoint(theme))]: {
    //     transform: 'translateY(170%)',
    //     transition: 'transform .5s'
    //   }
    // },
    // show: {
    //   [theme.breakpoints.down(containerBreakpoint(theme))]: {
    //     transform: 'translateY(-10%)',
    //     transition: 'transform .5s'
    //   }
    // }
  })

type bottomDrawerButtonProps = WithStyles<typeof styles>

class DrawerButton extends React.PureComponent<
  bottomDrawerButtonProps
  // , DrawerButtonState
> {
  // lastScroll

  // constructor (props) {
  //   super(props)

  //   this.state = {
  //     shouldShow: null
  //   }

  //   this.lastScroll = null

  //   this.handleScroll = this.handleScroll.bind(this)
  // }

  // componentDidMount () {
  //   window.addEventListener('scroll', this.handleScroll, { passive: true })
  // }

  // componentWillUnmount () {
  //   window.removeEventListener('scroll', this.handleScroll)
  // }

  // handleScroll (evt) {
  //   const lastScroll = window.scrollY

  //   if (lastScroll === this.lastScroll) {
  //     return
  //   }

  //   const shouldShow =
  //     this.lastScroll !== null ? lastScroll < this.lastScroll : null

  //   if (shouldShow !== this.state.shouldShow) {
  //     this.setState((prevState, props) => ({
  //       ...prevState,
  //       shouldShow
  //     }))
  //   }

  //   this.lastScroll = lastScroll
  // }

  render () {
    const { classes } = this.props

    return (
      <Fab
        color='primary'
        // size='medium'
        size='large'
        // className={`${classes.fab} ${
        //   this.state.shouldShow === null
        //     ? classes.hide
        //     : this.state.shouldShow
        //     ? classes.hide
        //     : classes.show
        // }`}
        // className={classes.fab}
        className={classNames(classes.fab, classes.iconCenter)}
      >
        <MenuIcon />
      </Fab>
    )
  }
}

export default withStyles(styles)(DrawerButton)
