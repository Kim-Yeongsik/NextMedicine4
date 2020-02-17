import {
  Box,
  Button,
  createStyles,
  Grid,
  IconButton,
  Tab,
  Tabs,
  Typography,
  WithStyles,
  withStyles
} from '@material-ui/core'

import ReorderIcon from '@material-ui/icons/reorder'

import CreateIcon from '@material-ui/icons/Create'
import TocIcon from '@material-ui/icons/toc'
import ViewStreamIcon from '@material-ui/icons/viewStream'

import { observer } from 'mobx-react'
import React from 'react'
import { Link } from 'server/routes'
// import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

import BoardTypeOne from '../boardTypeOne'
import BoardTypeThree from '../boardTypeThree'
import BoardTypeTwo from '../boardTypeTwo'
import Pagination from './Pagination'

import classNames from 'classNames'
import { containerBreakpoint } from 'consts/layout'

const styles = theme =>
  createStyles({
    root: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
      [theme.breakpoints.down(containerBreakpoint(theme))]: {
        height: '56px',
        paddingTop: theme.spacing(1),
        paddingBottom: 0,
        backgroundColor: '#2e2e2e',
        zIndex: 1,
        color: '#ffffff'
      }
    },
    sticky: {
      [theme.breakpoints.down(containerBreakpoint(theme))]: {
        position: 'sticky',
        top: '56px'
      }
    },
    search: {
      flexGrow: 1,
      display: 'flex',
      boxShadow: 'none'
    },
    iconButton: {
      float: 'right',
      paddingTop: '6px',
      paddingRight: '17px'
    },
    buttonRight: {
      flex: 1,
      display: 'flex',
      justifyContent: 'flex-end',
      marginTop: '4px',
      marginBottom: '4px'
    },
    buttonFontColor: {
      color: '#ffffff'
    },
    invisible: {
      [theme.breakpoints.down(containerBreakpoint(theme))]: {
        display: 'none'
      }
    },
    buttonInvisible: {
      [theme.breakpoints.down(containerBreakpoint(theme))]: {
        display: 'none'
      }
    },
    Folded: {
      [theme.breakpoints.up(containerBreakpoint(theme))]: {
        display: 'none'
      }
    },
    boardCategory: {
      paddingTop: '10px',
      [theme.breakpoints.down(containerBreakpoint(theme))]: {
        paddingLeft: theme.spacing(1)
      }
    },
    boardNotice: {
      paddingTop: '15px',
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      }
    },
    tabPadding: {
      flex: 1,
      display: 'flex',
      justifyContent: 'flex-end',
      paddingRight: theme.spacing(3)
    },
    pagiNation: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(4),
      [theme.breakpoints.down('md')]: {
        marginTop: theme.spacing(3)
      }
    }
  })

const StyledTabs = withStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    minWidth: 'auto'
  }
})(Tabs)

const StyledTab = withStyles({
  root: {
    minWidth: '33%',
    padding: '4px'
  }
})(Tab)

const StyledIconButon = withStyles({
  root: {
    paddingTop: '6px',
    paddingRight: '10px',
    paddingBottom: '4px'
  }
})(IconButton)

interface PageProps extends WithStyles<typeof styles> {
  board: Model.Board
  limit: number
  page: number
  boardPosts: Array<Model.Post>
  urlPrefix?: any
  isLogin?: boolean
}

@observer
class BoardPostList extends React.Component<PageProps> {
  state = {
    value: 0
  }

  clickChange = (event, value) => {
    this.setState({ value })
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render () {
    if (!this.props.board || !this.props.boardPosts) {
      return null
    }

    const { classes, boardPosts, board, page, limit, urlPrefix } = this.props
    const { value } = this.state

    return (
      <>
        <Grid container className={classNames(classes.sticky, classes.root)}>
          <Grid item container>
            <Grid item xs={4} md={2} className={classes.boardCategory}>
              <span>
                <Typography variant='h5'>{board.name}</Typography>
              </span>
            </Grid>
            <Grid item xs={6} className={classNames(classes.boardNotice)}>
              <span>
                <Typography variant='subtitle1'>{board.notice}</Typography>
              </span>
            </Grid>
            <Grid item container xs={7} md={3} className={classes.tabPadding}>
              <StyledTabs value={value} onChange={this.clickChange}>
                <StyledTab icon={<ReorderIcon />} />
                <StyledTab icon={<ViewStreamIcon />} />
                <StyledTab icon={<TocIcon style={{ fontSize: 28 }} />} />
              </StyledTabs>
            </Grid>
            <Grid item xs={1} className={classes.buttonRight}>
              <Link route={`/new`}>
                <Button
                  variant='outlined'
                  size='small'
                  className={classes.buttonInvisible}
                >
                  글쓰기
                </Button>
              </Link>
              <Link route={`/new`}>
                <StyledIconButon className={classes.Folded}>
                  <CreateIcon className={classes.buttonFontColor} />
                </StyledIconButon>
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            {boardPosts.map((post, postIndex) => (
              <React.Fragment key={postIndex}>
                <Box>
                  {value === 0 && <BoardTypeOne post={post} />}
                  {value === 1 && <BoardTypeTwo post={post} />}
                  {value === 2 && <BoardTypeThree post={post} />}
                </Box>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.pagiNation}>
          <Pagination
            current={page}
            total={board.postCount}
            limit={limit}
            href={`${urlPrefix}`}
          />
        </Grid>
      </>
    )
  }
}

export default withStyles(styles)(BoardPostList)
