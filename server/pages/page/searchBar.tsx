import {
  Box,
  createStyles,
  FormControl,
  Grid,
  IconButton,
  InputBase,
  NativeSelect,
  WithStyles,
  withStyles
} from '@material-ui/core'
import React from 'react'

import ClearIcon from '@material-ui/icons/clear'
import SearchIcon from '@material-ui/icons/search'

import Container from 'components/Container'

import classNames from 'classnames'
import { containerBreakpoint } from 'consts/layout'

const styles = theme =>
  createStyles({
    root: {
      flexGrow: 1,
      marginTop: theme.spacing(2),
      paddingLeft: '2px',
      [theme.breakpoints.down(containerBreakpoint(theme))]: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1)
      }
    },
    gridBorder: {
      borderStyle: 'solid'
    },
    searchGrid: {
      paddingTop: '2px',
      paddingLeft: '4px',
      [theme.breakpoints.down(containerBreakpoint(theme))]: {
        paddingTop: '3px'
      }
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      marginLeft: 0,
      width: 'auto'
    },
    searchButton: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    mobileSearchButton: {
      position: 'absolute',
      top: '17%',
      left: '2%'
    },
    mobileClearButton: {
      position: 'absolute',
      top: '-20%',
      right: 0
    },
    inputRoot: {
      color: 'inherit'
    },
    inputInput: {
      width: '100%',
      padding: theme.spacing(1, 1, 1, 6),
      [theme.breakpoints.down(containerBreakpoint(theme))]: {
        padding: theme.spacing(1, 5, 1, 5)
      }
    },
    iconColorBlack: {
      color: theme.palette.common.black
    },
    Folded: {
      [theme.breakpoints.up(containerBreakpoint(theme))]: {
        display: 'none'
      }
    },
    formControl: {
      display: 'flex',
      wrap: 'nowrap',
      marginTop: '4px',
      marginLeft: theme.spacing(1),
      marginBottom: '3px',
      fullWifth: 'true'
    }
  })

interface SearchBarProps extends WithStyles<typeof styles> {
  // posts: Model.Post
}

interface SearchBarState {
  clearText: ''
  bId: ''
  data: []
  searchString: []
}

class SearchBar extends React.PureComponent<SearchBarProps, SearchBarState> {
  constructor (props) {
    super(props)
    this.state = {
      clearText: '',
      bId: '',
      data: [],
      searchString: []
    }
  }

  clear = () => {
    this.setState({
      clearText: ''
    })
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  searchRegister = event => {}

  render () {
    const { classes } = this.props

    return (
      <Container className={classes.root}>
        <Grid container className={classes.gridBorder}>
          <Grid item xs={4} sm={2}>
            <FormControl className={classes.formControl}>
              <NativeSelect
                value={this.state.bId}
                onChange={this.handleChange}
                name='bId'
                id='bId'
                disableUnderline={true}
              >
                <option value={-1}>제목</option>
                <option value={1}>작성자</option>
                <option value={2}>내용</option>
              </NativeSelect>
            </FormControl>
          </Grid>
          <Grid item xs={8} sm={10} className={classes.searchGrid}>
            <Box className={classes.search}>
              <Box className={classes.mobileSearchButton}>
                <SearchIcon className={classes.iconColorBlack} />
              </Box>
              <InputBase
                value={this.state.clearText}
                onChange={e => {
                  this.setState({ clearText: e.target.value })
                }}
                placeholder='게시판 검색..'
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                fullWidth={true}
              />
              <Box
                className={classNames(
                  classes.mobileClearButton,
                  classes.Folded
                )}
              >
                <IconButton onClick={this.clear}>
                  <ClearIcon />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    )
  }
}

export default withStyles(styles)(SearchBar)
