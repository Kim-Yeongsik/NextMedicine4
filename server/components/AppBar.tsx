import {
  AppBar as MuiAppBar,
  createStyles,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
  WithStyles,
  withStyles
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import classNames from 'classnames'
import React from 'react'

import { appBarHeight, containerBreakpoint } from 'consts/layout'
import Link from './Link'

const styles = theme =>
  createStyles({
    root: {
      flexGrow: 1
    },
    withoutHome: {
      height: appBarHeight
    },
    invisible: {
      background: 'transparent',
      boxShadow: 'none',
      [theme.breakpoints.up('md')]: {
        // transform: 'translateY(5%)',
        transition: 'all .5s'
      }
    },
    show: {
      background: 'black',
      [theme.breakpoints.up('sm')]: {
        transition: 'all .5s'
      }
    },
    title: {
      fontSize: 25
    },
    toolbar: {
      height: appBarHeight,
      width: 'auto',
      marginLeft: 0,
      marginRight: 0,
      [theme.breakpoints.up(containerBreakpoint(theme))]: {
        width: 850,
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: theme.spacing.unit,
        paddingRight: theme.spacing.unit
      }
    },
    left: {
      flex: 1,
      display: 'flex',
      justifyContent: 'flex-start'
    },
    leftLinkTypo: {
      display: 'none',
      fontSize: 24,
      fontWeight: 'bold',
      color: theme.palette.primary.main, // theme.palette.common.white,
      '&:hover': {
        opacity: 0.8
      }
    },
    leftLinkImg: {
      // display: 'none',
      verticalAlign: 'middle'
    },
    right: {
      flex: 1,
      display: 'flex',
      justifyContent: 'flex-end'
    },
    rightFolded: {
      [theme.breakpoints.up(containerBreakpoint(theme))]: {
        display: 'none'
      }
    },
    rightExpanded: {
      [theme.breakpoints.down(containerBreakpoint(theme))]: {
        display: 'none'
      }
    },
    rightMenu: {
      color: theme.palette.common.white
    },
    rightLink: {
      marginLeft: theme.spacing(3)
    },
    rightLinkTypo: {
      fontSize: 14,
      color: theme.palette.common.white,
      '&:hover': {
        opacity: 0.8
      }
    },
    drawerList: {
      width: 250
    }
  })

interface AppBarOwnProps {
  home?: boolean
}

type AppBarProps = AppBarOwnProps & WithStyles<typeof styles>

interface AppBarState {
  drawer: boolean
  shouldShow: boolean
}

class AppBar extends React.PureComponent<AppBarProps, AppBarState> {
  state: AppBarState = {
    drawer: false,
    shouldShow: true
  }

  componentDidMount () {
    if (this.props.home) {
      window.addEventListener('scroll', this.handleScroll)
      this.handleScroll()
    }
  }

  componentWillUnmount () {
    if (this.props.home) {
      window.removeEventListener('scroll', this.handleScroll)
    }
  }

  handleScroll = () => {
    if (this.props.home) {
      const shouldShow = window.scrollY >= 80

      if (shouldShow !== this.state.shouldShow) {
        this.setState(prevState => ({
          ...prevState,
          shouldShow
        }))
      }
    }
  }

  getScrollClassName () {
    return !this.props.home || this.state.shouldShow
      ? this.props.classes.show
      : this.props.classes.invisible
  }

  toggleDrawer = (open: boolean) => () => {
    this.setState({
      drawer: open
    })
  }

  render () {
    const { classes, home } = this.props

    return (
      <>
        <MuiAppBar
          className={classNames(classes.root, this.getScrollClassName())}
          color='inherit'
          elevation={0}
          position='fixed'
        >
          <Toolbar className={classes.toolbar}>
            <div className={classes.left}>
              <Link underline='none' href={home ? '#top' : '/'}>
                <h1 className={classes.leftLinkTypo}>Lime Society</h1>
                <img
                  className={classes.leftLinkImg}
                  src='/static/components/appbar-logo.png'
                />
              </Link>
            </div>
            <div className={classNames(classes.right, classes.rightFolded)}>
              <IconButton
                className={classes.rightMenu}
                aria-label='Menu'
                onClick={this.toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
            </div>
            <div className={classNames(classes.right, classes.rightExpanded)}>
              <Link
                className={classes.rightLink}
                href='/board'
                underline='none'
              >
                <Typography className={classes.rightLinkTypo} variant='body1'>
                  BOARD 1
                </Typography>
              </Link>
              <Link
                className={classes.rightLink}
                href='/board2'
                underline='none'
              >
                <Typography className={classes.rightLinkTypo} variant='body1'>
                  BOARD 2
                </Typography>
              </Link>
            </div>
          </Toolbar>
          <Drawer
            anchor='right'
            open={this.state.drawer}
            onClose={this.toggleDrawer(false)}
          >
            <div
              tabIndex={0}
              role='button'
              onClick={this.toggleDrawer(false)}
              onKeyDown={this.toggleDrawer(false)}
            >
              <div className={classes.drawerList}>
                <List>
                  <Link underline='none' href={home ? '#top' : '/'}>
                    <ListItem button>
                      <ListItemText primary='Home' />
                    </ListItem>
                  </Link>
                  <Link underline='none' href='/board'>
                    <ListItem button>
                      <ListItemText primary='Board 1' />
                    </ListItem>
                  </Link>
                  <Link underline='none' href='/board2'>
                    <ListItem button>
                      <ListItemText primary='Board 2' />
                    </ListItem>
                  </Link>
                </List>
              </div>
            </div>
          </Drawer>
        </MuiAppBar>
        {!home && <div className={classes.withoutHome} />}
      </>
    )
  }
}

export default withStyles(styles)(AppBar)
