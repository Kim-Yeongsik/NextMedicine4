import {
  Button,
  createStyles,
  Grid,
  IconButton,
  Link,
  Tab,
  Tabs,
  Typography,
  WithStyles,
  withStyles
} from '@material-ui/core'

import React from 'react'

import { containerBreakpoint } from 'consts/layout'
import Container from '../../components/Container'

const styles = theme =>
  createStyles({
    root: {
      marginTop: theme.spacing(7),
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(6),
      [theme.breakpoints.down(containerBreakpoint(theme))]: {
        marginTop: '10px',
        position: 'sticky',
        top: '56px',
        backgroundColor: '#ffffff',
        zIndex: 1
      }
    },
    iconButton: {
      float: 'right',
      paddingTop: '6px',
      paddingRight: '17px'
    },
    groupCategory: {
      paddingTop: '6px',
      [theme.breakpoints.down(containerBreakpoint(theme))]: {
        paddingLeft: theme.spacing(1)
      }
    }
  })

type WritePostAppBarProps = WithStyles<typeof styles>

class WritePageAppBar extends React.Component<WritePostAppBarProps> {
  render () {
    const { classes } = this.props

    return (
      <>
        <Container className={classes.root}>
          <Grid container>
            <Grid item xs={11} className={classes.groupCategory}>
              <span>
                <Typography variant='h5'>회원정보</Typography>
              </span>
            </Grid>
          </Grid>
        </Container>
      </>
    )
  }
}

export default withStyles(styles)(WritePageAppBar)
