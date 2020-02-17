import {
  AppBar as MuiAppBar,
  Avatar,
  Box,
  createStyles,
  Divider,
  Drawer,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Grid,
  Icon,
  IconButton,
  InputBase,
  Link,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  WithStyles,
  withStyles
} from '@material-ui/core'

import ClearIcon from '@material-ui/icons/clear'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import HomeIcon from '@material-ui/icons/home'
import MailIcon from '@material-ui/icons/mail'
import MenuIcon from '@material-ui/icons/Menu'
import NotificationsIcon from '@material-ui/icons/notificationsNone'
import PersonIcon from '@material-ui/icons/person'
import SearchIcon from '@material-ui/icons/search'

import Badge from '@material-ui/core/Badge'

import classNames from 'classnames'
import React from 'react'

import { appBarHeight, containerBreakpoint } from 'consts/layout'
// import DrawerButton from '../components/bottomDrawerButton'
import Container from '../components/Container'

const styles = theme =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: 'black'
      // [theme.breakpoints.up(containerBreakpoint(theme))]: {
      //   position: 'static'
      // }
    },
    show: {
      [theme.breakpoints.down('md')]: {
        transform: 'translateY(0)',
        transition: 'transform .7s'
      }
    },
    hide: {
      [theme.breakpoints.down('md')]: {
        transform: 'translateY(-110%)',
        transition: 'transform .7s'
      }
    },
    toolbar: {
      minheight: 'auto',
      width: 'auto',
      marginLeft: 0,
      marginRight: 0,
      [theme.breakpoints.up('md')]: {
        height: appBarHeight,
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1)
      }
      // height: appBarHeight,
      // paddingLeft: theme.spacing(1),
      // paddingRight: theme.spacing(1),
      // [theme.breakpoints.down(containerBreakpoint(theme))]: {
      //   minheight: 'auto',
      //   width: 'auto',
      //   marginLeft: 0,
      //   marginRight: 0
      // }
    },
    invisible: {
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      }
    },
    tabRoot: {
      minWidth: '10%',
      fontWeight: 'bold',
      color: 'white'
    },
    titleNameLong: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      padding: '3px'
    },
    logo: {
      fontSize: '17pt',
      fontWeight: 700,
      color: '#ffffff',
      [theme.breakpoints.down('sm')]: {
        fontSize: '15pt',
        paddingTop: '10px'
      }
    },
    subLogo: {
      fontSize: '12px',
      color: '#ffffff'
    },
    tabBackGroundColor: {
      width: '250px',
      height: '56px',
      backgroundColor: 'black'
    },
    tabLogo: {
      fontSize: '15pt',
      fontWeight: 700,
      color: '#ffffff',
      marginTop: '14px',
      marginLeft: '20px'
    },
    searchGrid: {
      paddingTop: '19px',
      [theme.breakpoints.down('sm')]: {
        paddingTop: theme.spacing(1)
      }
    },
    input: {
      width: '100%'
    },
    iconButton: {
      float: 'right',
      paddingTop: '2px'
    },
    homeButton: {
      marginLeft: '3px',
      marginRight: '4px',
      paddingBottom: '3px'
    },
    menuIcon: {
      flex: 1,
      display: 'flex',
      justifyContent: 'flex-start'
    },
    Center: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center'
    },
    searchIcon: {
      flex: 1,
      display: 'flex',
      justifyContent: 'flex-end'
    },
    iconColorBlack: {
      color: theme.palette.common.black
    },
    iconColorWhite: {
      color: theme.palette.common.white
    },
    Folded: {
      paddingBottom: '50px',
      [theme.breakpoints.up('md')]: {
        display: 'none'
      }
    },
    shortTitle: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center'
    },
    mobileSearchBarTitle: {
      flex: 1,
      display: 'flex',
      justifyContent: 'flex-start',
      paddingBottom: '15px'
    },
    drawerList: {
      width: 250
    },
    anchorButton: {
      paddingLeft: theme.spacing(3),
      paddingBottom: theme.spacing(1)
    },
    ListItemButtonPadding: {
      paddingTop: '5px'
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      marginLeft: 0,
      width: 'auto'
    },
    searchButton: {
      position: 'absolute',
      top: '17%',
      left: '2%'
    },
    clearButton: {
      position: 'absolute',
      top: '-20%',
      right: 0
    },
    inputRoot: {
      color: 'inherit'
    },
    inputInput: {
      padding: theme.spacing(1, 7, 1, 5),
      width: '100%'
    },
    slideMobileMainAppBar: {
      position: 'fixed',
      backgroundColor: 'black'
    },
    slideMobileSearchAppBar: {
      position: 'fixed',
      backgroundColor: 'black',
      height: theme.spacing(6)
    },
    kmlePadding: {
      paddingLeft: theme.spacing(3)
    },
    styledListItemText: {
      fontSize: '11px'
    },
    cardMargin: {
      marginBottom: theme.spacing(5)
    },
    avatar: {
      width: '55px',
      height: '55px',
      paddingRight: 'auto'
    },
    listItemText: {
      paddingLeft: theme.spacing(5)
    },
    iconPadding: {
      paddingTop: '5px'
    },
    listItemTextFontSize: {
      paddingLeft: theme.spacing(4),
      fontSize: '16px'
    },
    nickname: {
      color: '#ffffff',
      fontWeight: 700,
      cursor: 'pointer',
      fontSize: '16px',
      marginTop: theme.spacing(1)
    },
    alias: {
      color: '#A4A4A4',
      fontWeight: 700,
      fontSize: '14px',
      marginTop: '4px'
    },
    marginTop: {
      marginTop: theme.spacing(1)
    },
    paper: {
      backgroundColor: '#1C1C1C'
    },
    colorWhite: {
      color: '#ffffff'
    }
  })

const StyledTab = withStyles({
  root: {
    minHeight: 'auto',
    padding: '6px'
  }
})(Tab)

const StyledList = withStyles({
  root: {
    padding: 0
  }
})(List)

const StyledExpansionPanel = withStyles({
  root: {
    backgroundColor: '#1C1C1C',
    minHeight: 'auto',
    padding: 0,
    marginTop: 0,
    marginBottom: 0,
    '&$expanded': {
      margin: 'auto'
    },
    '&:not(:last-child)': {
      margin: 0
    }
  }
})(ExpansionPanel)

const StyledExpansionPanelSummary = withStyles({
  root: {
    '&$expanded': {
      minHeight: '48',
      paddingTop: 0,
      paddingBottom: 0
    }
  }
})(ExpansionPanelSummary)

const StyledExpansionPanelDetails = withStyles({
  root: {
    backgroundColor: '#424242',
    minHeight: '48',
    paddingTop: 0,
    paddingLeft: '16px',
    paddingRight: '16px',
    paddingBottom: 0,
    '&$expanded': {
      minHeight: '48',
      paddingTop: 0,
      paddingBottom: 0,
      marginTop: 0,
      marginBottom: 0
    }
  }
})(ExpansionPanelDetails)

const StyledLeftIconButton = withStyles({
  root: {
    paddingTop: '14px',
    paddingLeft: '10px'
  }
})(IconButton)

const StyledRightIconButton = withStyles({
  root: {
    paddingRight: '7px'
  }
})(IconButton)

const StyledListItem = withStyles({
  root: {
    minHeight: 'auto',
    paddingTop: 0,
    paddingBottom: 0,
    '&$expanded': {
      minHeight: '48',
      paddingTop: '4px',
      paddingBottom: '6px',
      marginTop: 0,
      marginBottom: '5px'
    }
  }
})(ListItem)

const StyledMenuItem = withStyles({
  root: {
    paddingLeft: '14px',
    paddingRight: '14px'
  }
})(MenuItem)

const ListItemButton = withStyles({
  root: {
    paddingLeft: 0,
    paddingRight: 0
  }
})(ListItem)

interface NMAppBarOwnProps {
  current?: string
}

type AppBarProps = NMAppBarOwnProps & WithStyles<typeof styles>

interface NMAppBarState {
  drawer: boolean
  value: boolean
  shouldShow: boolean
  open: boolean
  anchorEl: Object
  anchorButton: Object
  clearText: ''
}

class AppBar extends React.PureComponent<AppBarProps, NMAppBarState> {
  lastScroll

  constructor (props) {
    super(props)
    this.state = {
      value: false,
      drawer: false,
      shouldShow: null,
      open: false,
      anchorEl: null,
      anchorButton: null,
      clearText: ''
    }

    this.lastScroll = null

    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll, { passive: true })
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll (evt) {
    const lastScroll = window.scrollY

    if (lastScroll === this.lastScroll) {
      return
    }

    const shouldShow =
      this.lastScroll !== null ? lastScroll < this.lastScroll : null

    if (shouldShow !== this.state.shouldShow) {
      this.setState((prevState, props) => ({
        ...prevState,
        shouldShow
      }))
    }

    this.lastScroll = lastScroll
  }

  toggleDrawer = (open: boolean) => () => {
    this.setState({
      drawer: open
    })
  }

  handleMenuOpen = (index, event) => {
    const { currentTarget } = event
    this.setState({
      open: true,
      anchorEl: currentTarget,
      value: index
    })
  }

  handleMenuClose = () => {
    this.setState({
      open: false,
      anchorEl: null
    })
  }

  handleClick = event => {
    this.setState({ anchorButton: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorButton: null })
  }

  clear = () => {
    this.setState({
      clearText: ''
    })
  }

  render () {
    const { classes, current } = this.props
    const { anchorButton } = this.state

    return (
      <>
        <Box
          aria-label='Menu'
          onClick={this.toggleDrawer(true)}
          className={classes.Folded}
        />

        <MuiAppBar className={classes.root}>
          <Toolbar className={classes.toolbar}>
            <Container className={classes.invisible} width='large'>
              <Grid container>
                <Grid item container xs={5}>
                  <Grid item xs={12} className={classes.titleNameLong}>
                    <Link href='/' underline='none'>
                      <Typography className={classes.logo}>
                        Next Medicine 4
                      </Typography>
                    </Link>
                    <Grid item xs={12}>
                      <Typography className={classes.subLogo}>
                        Passion for Better Medicine
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={7} className={classes.searchGrid}>
                  <Box className={classes.search}>
                    <Box className={classes.searchButton}>
                      <SearchIcon className={classes.iconColorBlack} />
                    </Box>
                    <Paper>
                      <InputBase
                        placeholder='전체 검색..'
                        classes={{
                          root: classes.inputRoot,
                          input: classes.inputInput
                        }}
                        fullWidth={true}
                      />
                    </Paper>
                  </Box>
                </Grid>
              </Grid>
            </Container>

            <Container className={classes.Folded}>
              <Grid
                item
                container
                xs={12}
                className={classNames(
                  classes.slideMobileMainAppBar,
                  `${classes.slideMobileMainAppBar} ${
                    this.state.shouldShow === null
                      ? ''
                      : this.state.shouldShow
                      ? classes.show
                      : classes.hide
                  }`
                )}
              >
                <Grid item xs={1} className={classes.menuIcon}>
                  <StyledLeftIconButton
                    aria-label='Menu'
                    onClick={this.toggleDrawer(true)}
                    edge='start'
                  >
                    <MenuIcon className={classes.iconColorWhite} />
                  </StyledLeftIconButton>
                </Grid>
                <Grid item xs={9} className={classes.shortTitle}>
                  <Link href='/'>
                    <Typography className={classes.logo}>
                      Next Medicine 4
                    </Typography>
                  </Link>
                </Grid>
                <Grid item xs={1} className={classes.searchIcon}>
                  <StyledRightIconButton
                    className={classes.iconColorBlack}
                    edge='end'
                    aria-owns={anchorButton ? 'simple-menu' : undefined}
                    aria-haspopup='true'
                    onClick={this.handleClick}
                  >
                    <Icon fontSize='default' className={classes.iconColorWhite}>
                      more_vert
                    </Icon>
                  </StyledRightIconButton>
                </Grid>
              </Grid>

              <Grid
                item
                container
                xs={12}
                className={classNames(
                  classes.slideMobileSearchAppBar,
                  `${classes.slideMobileSearchAppBar}`,
                  `${
                    this.state.shouldShow === null
                      ? classes.hide
                      : this.state.shouldShow
                      ? classes.hide
                      : classes.show
                  }`
                )}
              >
                <Grid item xs={2} className={classes.mobileSearchBarTitle}>
                  <Link href='/' underline='none'>
                    <Typography className={classes.logo}>NM4</Typography>
                  </Link>
                </Grid>

                <Grid item xs={9} className={classes.searchGrid}>
                  <Box className={classes.search}>
                    <Box className={classes.searchButton}>
                      <SearchIcon className={classes.iconColorBlack} />
                    </Box>
                    <Paper>
                      <InputBase
                        value={this.state.clearText}
                        onChange={e => {
                          this.setState({ clearText: e.target.value })
                        }}
                        placeholder='전체 검색..'
                        classes={{
                          root: classes.inputRoot,
                          input: classes.inputInput
                        }}
                        fullWidth={true}
                      />
                    </Paper>
                    <Box className={classes.clearButton}>
                      <IconButton onClick={this.clear}>
                        <ClearIcon />
                      </IconButton>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
              {/* <DrawerButton /> */}
            </Container>
          </Toolbar>

          <Menu
            id='simple-menu'
            anchorEl={anchorButton}
            open={Boolean(anchorButton)}
            onClose={this.handleClose}
          >
            <StyledMenuItem onClick={this.handleClose}>
              <Link underline='none' color='inherit' href='/guideline'>
                <ListItemButton>
                  <Grid item xs={2} className={classes.ListItemButtonPadding}>
                    <PersonIcon />
                  </Grid>
                  <Grid item xs={10} className={classes.anchorButton}>
                    <ListItemText primary='이용지침' />
                  </Grid>
                </ListItemButton>
              </Link>
            </StyledMenuItem>
          </Menu>

          <Drawer
            anchor='left'
            open={this.state.drawer}
            onClose={this.toggleDrawer(false)}
            ModalProps={{
              keepMounted: true
            }}
            classes={{ paper: classes.paper }}
          >
            <Grid
              container
              tabIndex={0}
              role='button'
              // onClick={this.toggleDrawer(false)}
              onKeyDown={this.toggleDrawer(false)}
            >
              <Grid item container className={classes.drawerList}>
                <StyledExpansionPanel elevation={0}>
                  <StyledExpansionPanelSummary expandIcon={<ExpandMoreIcon className={classes.iconColorWhite} />}>
                    <Grid item container>
                      <Grid item xs={12}>
                        <Avatar
                          className={classes.avatar}
                          src='../static/nm/unknown.jpg'
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Typography className={classes.nickname}>
                          UserID
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography className={classes.alias}>
                          멀티 확장한 해철의
                        </Typography>
                      </Grid>
                    </Grid>
                  </StyledExpansionPanelSummary>
                  <Divider />
                  <StyledExpansionPanelDetails>
                    <Grid container>
                      <Grid item xs={12} className={classes.marginTop}>
                        <Link
                          underline='none'
                          color='inherit'
                          href='/notifications'
                        >
                          <ListItem button>
                            <Badge badgeContent={30} color='secondary'>
                              <NotificationsIcon
                                className={classes.iconColorWhite}
                              />
                            </Badge>
                            <ListItemText
                              className={classes.colorWhite}
                              classes={{
                                primary: classes.listItemTextFontSize
                              }}
                              primary='알림'
                            />
                          </ListItem>
                        </Link>
                      </Grid>
                      <Grid item xs={12}>
                        <Link underline='none' color='inherit' href='/message'>
                          <ListItem button>
                            <Badge badgeContent={30} color='secondary'>
                              <MailIcon className={classes.iconColorWhite} />
                            </Badge>
                            <ListItemText
                            className={classes.colorWhite}
                              classes={{
                                primary: classes.listItemTextFontSize
                              }}
                              primary='쪽지'
                            />
                          </ListItem>
                        </Link>
                      </Grid>
                      <Grid item xs={12}>
                        <Link underline='none' color='inherit' href='/userinfo'>
                          <ListItem button>
                            <PersonIcon className={classes.iconColorWhite} />
                            <ListItemText
                            className={classes.colorWhite}
                              classes={{
                                primary: classes.listItemTextFontSize
                              }}
                              primary='내정보'
                            />
                          </ListItem>
                        </Link>
                      </Grid>
                    </Grid>
                  </StyledExpansionPanelDetails>
                </StyledExpansionPanel>
                <StyledList>
                  <Divider />
                  <Link underline='none' color='inherit' href='/'>
                    <ListItem button>
                      <HomeIcon className={classNames(classes.homeButton, classes.iconColorWhite)} />
                      <ListItemText className={(classes.colorWhite)} primary='Home' />
                    </ListItem>
                  </Link>

                  <Divider />

                  <StyledExpansionPanel elevation={0}>
                    <StyledExpansionPanelSummary
                      expandIcon={<ExpandMoreIcon className={classes.iconColorWhite} />}
                    >
                      <Grid container>
                        <Grid item xs={12}>
                          <Typography className={classes.colorWhite}>친목</Typography>
                        </Grid>
                      </Grid>
                    </StyledExpansionPanelSummary>
                    <StyledExpansionPanelDetails>
                      <Grid container>
                        <Grid item xs={12}>
                          <Link underline='none' color='inherit' href='/group/1'>
                            <StyledListItem button>
                              <ListItemText className={classes.colorWhite} primary='전체' />
                            </StyledListItem>
                          </Link>
                        </Grid>
                        <Grid item xs={12}>
                          <Link underline='none' color='inherit' href='/board/1'>
                            <StyledListItem button>
                              <ListItemText className={classes.colorWhite} primary='넥메' />
                            </StyledListItem>
                          </Link>
                        </Grid>
                        <Grid item xs={12}>
                          <Link underline='none' color='inherit' href='/board/2'>
                            <StyledListItem button>
                              <ListItemText className={classes.colorWhite} primary='알림' />
                            </StyledListItem>
                          </Link>
                        </Grid>
                        <Grid item xs={12}>
                          <Link underline='none' color='inherit' href='/board/3'>
                            <StyledListItem button>
                              <ListItemText className={classes.colorWhite} primary='학생' />
                            </StyledListItem>
                          </Link>
                        </Grid>
                        <Grid item xs={12}>
                          <Link
                            underline='none'
                            color='inherit'
                            href='/board/32'
                          >
                            <StyledListItem button>
                              <ListItemText className={classes.colorWhite} primary='인턴' />
                            </StyledListItem>
                          </Link>
                        </Grid>
                        <Grid item xs={12}>
                          <Link underline='none' color='inherit' href='/board/4'>
                            <StyledListItem button>
                              <ListItemText className={classes.colorWhite} primary='전공의' />
                            </StyledListItem>
                          </Link>
                        </Grid>
                        <Grid item xs={12}>
                          <Link underline='none' color='inherit' href='/board/5'>
                            <StyledListItem button>
                              <ListItemText className={classes.colorWhite} primary='전문의' />
                            </StyledListItem>
                          </Link>
                        </Grid>
                        <Grid item xs={12}>
                          <Link underline='none' color='inherit' href='/board/6'>
                            <StyledListItem button>
                              <ListItemText className={classes.colorWhite} primary='머니' />
                            </StyledListItem>
                          </Link>
                        </Grid>
                        <Grid item xs={12}>
                          <Link underline='none' color='inherit' href='/board/7'>
                            <StyledListItem button>
                              <ListItemText className={classes.colorWhite} primary='연애' />
                            </StyledListItem>
                          </Link>
                        </Grid>
                        <Grid item xs={12}>
                          <Link
                            underline='none'
                            color='inherit'
                            href='/board/30'
                          >
                            <StyledListItem button>
                              <ListItemText className={classes.colorWhite} primary='남성' />
                            </StyledListItem>
                          </Link>
                        </Grid>
                      </Grid>
                    </StyledExpansionPanelDetails>
                  </StyledExpansionPanel>

                  <Divider />

                  <StyledExpansionPanel elevation={0}>
                    <StyledExpansionPanelSummary
                      expandIcon={<ExpandMoreIcon className={classes.iconColorWhite} />}
                    >
                      <Grid container>
                        <Grid item xs={12}>
                          <Typography className={classes.colorWhite}>진로</Typography>
                        </Grid>
                      </Grid>
                    </StyledExpansionPanelSummary>
                    <StyledExpansionPanelDetails>
                      <Grid container>
                        <Grid item xs={12}>
                          <Link underline='none' color='inherit' href='/group/2'>
                            <StyledListItem button>
                              <ListItemText className={classes.colorWhite} primary='전체' />
                            </StyledListItem>
                          </Link>
                        </Grid>
                        <Grid item xs={12}>
                          <Link underline='none' color='inherit' href='/board/9'>
                            <StyledListItem button>
                              <ListItemText className={classes.colorWhite} primary='과선택' />
                            </StyledListItem>
                          </Link>
                        </Grid>
                        <Grid item xs={12}>
                          <Link
                            underline='none'
                            color='inherit'
                            href='/board/10'
                          >
                            <StyledListItem button>
                              <ListItemText className={classes.colorWhite} primary='병원선택' />
                            </StyledListItem>
                          </Link>
                        </Grid>
                        <Grid item xs={12}>
                          <Link
                            underline='none'
                            color='inherit'
                            href='/board/12'
                          >
                            <StyledListItem button>
                              <ListItemText className={classes.colorWhite} primary='군대' />
                            </StyledListItem>
                          </Link>
                        </Grid>
                        <Grid item xs={12}>
                          <Link
                            underline='none'
                            color='inherit'
                            href='/board/13'
                          >
                            <StyledListItem button>
                              <ListItemText className={classes.colorWhite} primary='로컬' />
                            </StyledListItem>
                          </Link>
                        </Grid>
                        <Grid item xs={12}>
                          <Link
                            underline='none'
                            color='inherit'
                            href='/board/14'
                          >
                            <StyledListItem button>
                              <ListItemText className={classes.colorWhite} primary='정보글' />
                            </StyledListItem>
                          </Link>
                        </Grid>
                        <Grid item xs={12}>
                          <Link
                            underline='none'
                            color='inherit'
                            href='/board/15'
                          >
                            <StyledListItem button>
                              <ListItemText className={classes.colorWhite} primary='기초기타' />
                            </StyledListItem>
                          </Link>
                        </Grid>
                        <Grid item xs={12}>
                          <Link
                            underline='none'
                            color='inherit'
                            href='/board/36'
                          >
                            <StyledListItem button>
                              <ListItemText className={classes.colorWhite} primary='해외' />
                            </StyledListItem>
                          </Link>
                        </Grid>
                        <Grid item xs={12}>
                          <Link
                            underline='none'
                            color='inherit'
                            href='/board/38'
                          >
                            <StyledListItem button>
                              <ListItemText className={classes.colorWhite} primary='모셔요' />
                            </StyledListItem>
                          </Link>
                        </Grid>
                      </Grid>
                    </StyledExpansionPanelDetails>
                  </StyledExpansionPanel>

                  <Divider />

                  <StyledExpansionPanel elevation={0}>
                    <StyledExpansionPanelSummary
                      expandIcon={<ExpandMoreIcon className={classes.iconColorWhite} />}
                    >
                      <Grid container>
                        <Grid item xs={12}>
                          <Typography className={classes.colorWhite}>고진선처</Typography>
                        </Grid>
                      </Grid>
                    </StyledExpansionPanelSummary>
                    <StyledExpansionPanelDetails>
                      <Grid container>
                        <Grid item xs={12}>
                          <Link underline='none' color='inherit' href='/group/3'>
                            <StyledListItem button>
                              <ListItemText className={classes.colorWhite} primary='전체' />
                            </StyledListItem>
                          </Link>
                        </Grid>
                        <Grid item xs={12}>
                          <Link
                            underline='none'
                            color='inherit'
                            href='/board/16'
                          >
                            <StyledListItem button>
                              <ListItemText className={classes.colorWhite} primary='국시' />
                            </StyledListItem>
                          </Link>
                        </Grid>
                        <Grid item xs={12}>
                          <Link
                            underline='none'
                            color='inherit'
                            href='/board/17'
                          >
                            <StyledListItem button>
                              <ListItemText className={classes.colorWhite} primary='실기' />
                            </StyledListItem>
                          </Link>
                        </Grid>
                        <Grid item xs={12}>
                          <Link
                            underline='none'
                            color='inherit'
                            href='/board/18'
                          >
                            <StyledListItem button>
                              <ListItemText className={classes.colorWhite} primary='교재' />
                            </StyledListItem>
                          </Link>
                        </Grid>
                        <Grid item xs={12}>
                          <Link
                            underline='none'
                            color='inherit'
                            href='/board/19'
                          >
                            <StyledListItem button>
                              <ListItemText className={classes.colorWhite} primary='시험후기' />
                            </StyledListItem>
                          </Link>
                        </Grid>
                        <Grid item xs={12}>
                          <Link
                            underline='none'
                            color='inherit'
                            href='/board/20'
                          >
                            <StyledListItem button>
                              <ListItemText className={classes.colorWhite} primary='인턴' />
                            </StyledListItem>
                          </Link>
                        </Grid>
                        <Grid item xs={12}>
                          <Link
                            underline='none'
                            color='inherit'
                            href='/board/21'
                          >
                            <StyledListItem button>
                              <ListItemText className={classes.colorWhite} primary='전공의' />
                            </StyledListItem>
                          </Link>
                        </Grid>
                        <Grid item xs={12}>
                          <Link
                            underline='none'
                            color='inherit'
                            href='/board/22'
                          >
                            <StyledListItem button>
                              <ListItemText className={classes.colorWhite} primary='컨설트' />
                            </StyledListItem>
                          </Link>
                        </Grid>
                        <Grid item xs={12}>
                          <Link
                            underline='none'
                            color='inherit'
                            href='/board/23'
                          >
                            <StyledListItem button>
                              <ListItemText className={classes.colorWhite} primary='기타질문' />
                            </StyledListItem>
                          </Link>
                        </Grid>
                      </Grid>
                    </StyledExpansionPanelDetails>
                  </StyledExpansionPanel>

                  <Divider />

                  <StyledExpansionPanel elevation={0}>
                    <StyledExpansionPanelSummary
                      expandIcon={<ExpandMoreIcon className={classes.iconColorWhite} />}
                    >
                      <Grid container>
                        <Grid item xs={12}>
                          <Typography className={classes.colorWhite}>자료실</Typography>
                        </Grid>
                      </Grid>
                    </StyledExpansionPanelSummary>
                    <StyledExpansionPanelDetails>
                      <Grid container>
                        <Grid item xs={12}>
                          <Link
                            underline='none'
                            color='inherit'
                            href='/group/4'
                          >
                            <StyledListItem button>
                              <ListItemText className={classes.colorWhite} primary='전체' />
                            </StyledListItem>
                          </Link>
                        </Grid>
                        <Grid item xs={12}>
                          <Link
                            underline='none'
                            color='inherit'
                            href='/board/24'
                          >
                            <StyledListItem button>
                              <ListItemText className={classes.colorWhite} primary='문제풀' />
                            </StyledListItem>
                          </Link>
                        </Grid>
                        <Grid item xs={12}>
                          <Link
                            underline='none'
                            color='inherit'
                            href='/board/25'
                          >
                            <StyledListItem button>
                              <ListItemText className={classes.colorWhite}primary='정리노트' />
                            </StyledListItem>
                          </Link>
                        </Grid>
                        <Grid item xs={12}>
                          <Link
                            underline='none'
                            color='inherit'
                            href='/board/26'
                          >
                            <StyledListItem button>
                              <ListItemText className={classes.colorWhite}primary='기타자료' />
                            </StyledListItem>
                          </Link>
                        </Grid>
                        <Grid item xs={12}>
                          <Link
                            underline='none'
                            color='inherit'
                            href='/board/37'
                          >
                            <StyledListItem button>
                              <ListItemText className={classes.colorWhite}primary='자료요청' />
                            </StyledListItem>
                          </Link>
                        </Grid>
                      </Grid>
                    </StyledExpansionPanelDetails>
                  </StyledExpansionPanel>

                  <Divider />

                  <StyledExpansionPanel elevation={0}>
                    <StyledExpansionPanelSummary
                      expandIcon={<ExpandMoreIcon className={classes.iconColorWhite} />}
                    >
                      <Grid container>
                        <Grid item xs={12}>
                          <Typography className={classes.colorWhite}>토론</Typography>
                        </Grid>
                      </Grid>
                    </StyledExpansionPanelSummary>
                    <StyledExpansionPanelDetails>
                      <Grid container>
                        <Grid item xs={12}>
                          <Link underline='none' color='inherit' href='/group5'>
                            <StyledListItem button>
                              <ListItemText className={classes.colorWhite} primary='전체' />
                            </StyledListItem>
                          </Link>
                        </Grid>
                        <Grid item xs={12}>
                          <Link
                            underline='none'
                            color='inherit'
                            href='/board/27'
                          >
                            <StyledListItem button>
                              <ListItemText className={classes.colorWhite} primary='원격의료' />
                            </StyledListItem>
                          </Link>
                        </Grid>
                        <Grid item xs={12}>
                          <Link
                            underline='none'
                            color='inherit'
                            href='/board/28'
                          >
                            <StyledListItem button>
                              <ListItemText className={classes.colorWhite} primary='전공의유급' />
                            </StyledListItem>
                          </Link>
                        </Grid>
                        <Grid item xs={12}>
                          <Link
                            underline='none'
                            color='inherit'
                            href='/board/29'
                          >
                            <StyledListItem button>
                              <ListItemText className={classes.colorWhite} primary='기타논의' />
                            </StyledListItem>
                          </Link>
                        </Grid>
                      </Grid>
                    </StyledExpansionPanelDetails>
                  </StyledExpansionPanel>

                  <Divider />

                  <StyledExpansionPanel elevation={0}>
                    <StyledExpansionPanelSummary
                      expandIcon={<ExpandMoreIcon className={classes.iconColorWhite} />}
                    >
                      <Grid container>
                        <Grid item xs={12}>
                          <Typography className={classes.colorWhite}>장터</Typography>
                        </Grid>
                      </Grid>
                    </StyledExpansionPanelSummary>
                    <StyledExpansionPanelDetails>
                      <Grid container>
                        <Grid item xs={12}>
                          <Link
                            underline='none'
                            color='inherit'
                            href='/group/6'
                          >
                            <StyledListItem button>
                              <ListItemText className={classes.colorWhite} primary='전체' />
                            </StyledListItem>
                          </Link>
                        </Grid>
                        <Grid item xs={12}>
                          <Link
                            underline='none'
                            color='inherit'
                            href='/board/33'
                          >
                            <StyledListItem button>
                              <ListItemText className={classes.colorWhite} primary='삽니다' />
                            </StyledListItem>
                          </Link>
                        </Grid>
                        <Grid item xs={12}>
                          <Link
                            underline='none'
                            color='inherit'
                            href='/board/34'
                          >
                            <StyledListItem button>
                              <ListItemText className={classes.colorWhite} primary='팝니다' />
                            </StyledListItem>
                          </Link>
                        </Grid>
                        <Grid item xs={12}>
                          <Link
                            underline='none'
                            color='inherit'
                            href='/board/35'
                          >
                            <StyledListItem button>
                              <ListItemText className={classes.colorWhite} primary='나눔' />
                            </StyledListItem>
                          </Link>
                        </Grid>
                      </Grid>
                    </StyledExpansionPanelDetails>
                  </StyledExpansionPanel>
                  <Divider />

                  <StyledExpansionPanel elevation={0}>
                    <StyledExpansionPanelSummary expandIcon={<ExpandMoreIcon className={classes.iconColorWhite} />}>
                      <Grid container>
                        <Grid item xs={12}>
                          <Typography className={classes.colorWhite}>국시지원</Typography>
                        </Grid>
                      </Grid>
                    </StyledExpansionPanelSummary>
                    <StyledExpansionPanelDetails>
                      <Grid container>
                        <Grid item xs={12}>
                          <Link underline='none' color='inherit' href='/kmle'>
                            <StyledListItem button>
                              <ListItemText
                                className={classNames(classes.styledListItemText, classes.colorWhite)}
                                primary='전체'
                              />
                            </StyledListItem>
                          </Link>
                        </Grid>
                        <Grid item xs={12}>
                          <Link underline='none' color='inherit' href='/tscore'>
                            <StyledListItem button>
                              <ListItemText
                                className={classNames(classes.styledListItemText, classes.colorWhite)}
                                primary='T점수변환기'
                              />
                            </StyledListItem>
                          </Link>
                        </Grid>
                        <Grid item xs={12}>
                          <Link underline='none' color='inherit' href='/kmleElementary'>
                            <StyledListItem button>
                              <ListItemText
                                className={classNames(classes.styledListItemText, classes.colorWhite)}
                                primary='국시평가항목체크'
                              />
                            </StyledListItem>
                          </Link>
                        </Grid>
                        <Grid item xs={12}>
                          <Link
                            underline='none'
                            color='inherit'
                            href='/kmleElementaryOld'
                          >
                            <StyledListItem button>
                              <ListItemText
                                className={classNames(classes.styledListItemText, classes.colorWhite)}
                                primary='Old국시평가항목체크'
                              />
                            </StyledListItem>
                          </Link>
                        </Grid>
                        <Grid item xs={12}>
                          <Link underline='none' color='inherit' href='/internApply'>
                            <StyledListItem button>
                              <ListItemText
                                className={classNames(classes.styledListItemText, classes.colorWhite)}
                                primary='인턴지원경쟁률'
                              />
                            </StyledListItem>
                          </Link>
                        </Grid>
                      </Grid>
                    </StyledExpansionPanelDetails>
                  </StyledExpansionPanel>
                  <Divider />
                </StyledList>
              </Grid>
            </Grid>
          </Drawer>
        </MuiAppBar>
      </>
    )
  }
}

export default withStyles(styles)(AppBar)
