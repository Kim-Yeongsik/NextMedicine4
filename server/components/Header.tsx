import {
  createStyles,
  Typography,
  WithStyles,
  withStyles
} from '@material-ui/core'
import React from 'react'

import Container from './Container'

const styles = theme =>
  createStyles({
    background: {
      backgroundImage: 'url("/static/components/header-bg.jpg")',
      color: theme.palette.common.white,
      overflow: 'hidden'
    },
    root: {
      marginTop: theme.spacing(10),
      marginBottom: theme.spacing(10),
      [theme.breakpoints.down('xs')]: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4)
      }
    }
  })

interface HeaderOwnProps {
  title?: any
  content?: any
}

type HeaderProps = HeaderOwnProps & WithStyles<typeof styles>

class Header extends React.Component<HeaderProps> {
  render () {
    const { classes, title, content } = this.props

    return (
      <Container className={classes.background} width='full'>
        <Container className={classes.root} component='section'>
          <Typography
            color='inherit'
            component={'h2' as any}
            gutterBottom
            variant='h3'
          >
            {title}
          </Typography>
          <Typography color='inherit' paragraph variant='body1'>
            {content}
          </Typography>
        </Container>
      </Container>
    )
  }
}

export default withStyles(styles)(Header)
