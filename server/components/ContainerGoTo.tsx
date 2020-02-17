import {
  createStyles,
  Typography,
  WithStyles,
  withStyles
} from '@material-ui/core'
import React from 'react'

import { lightLimeColor } from 'consts/layout'
import Button from './Button'
import Container from './Container'

const styles = theme =>
  createStyles({
    background: {
      backgroundColor: lightLimeColor,
      overflow: 'hidden'
    },
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      [theme.breakpoints.down('sm')]: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4)
      }
    },
    button: {
      border: '4px solid currentColor',
      borderRadius: 0,
      height: 'auto',
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      [theme.breakpoints.down('sm')]: {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1)
      }
    },
    buttonTypo: {
      fontSize: 18,
      fontWeight: 'bold'
    }
  })

interface ContainerGoToOwnProps {
  href?: string
}

type ContainerGoToProps = ContainerGoToOwnProps & WithStyles<typeof styles>

class ContainerGoTo extends React.Component<ContainerGoToProps> {
  render () {
    const { children, classes, href } = this.props

    return (
      <Container className={classes.background} width='full'>
        <Container className={classes.root} component='section'>
          <Button className={classes.button} href={href}>
            <Typography className={classes.buttonTypo} component='span'>
              {children}
            </Typography>
          </Button>
        </Container>
      </Container>
    )
  }
}

export default withStyles(styles)(ContainerGoTo)
