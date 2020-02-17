import {
  Box,
  createStyles,
  Grid,
  Typography,
  WithStyles,
  withStyles
} from '@material-ui/core'
import React from 'react'

import classNames from 'classnames'

import Container from 'components/Container'

const styles = theme =>
  createStyles({
    root: {
      display: 'flex',
      flexGrow: 1,
      flexDirection: 'column',
      marginTop: 'calc(11% + 10px)',
      left: 0,
      width: 'full',
      backgroundColor: 'black'
    },
    footer: {
      flex: 1,
      display: 'flex',
      textAlign: 'center',
      fontSize: '11px',
      paddingTop: theme.spacing(1),
      paddingLeft: '20px',
      paddingRight: '20px',
      paddingBottom: theme.spacing(1)
    },
    TypographyColor: {
      color: '#FFFFFF'
    }
  })

type AppBarProps = WithStyles<typeof styles>

class Footer extends React.PureComponent<AppBarProps> {
  render () {
    const { classes } = this.props

    return (
      <Container
        className={classNames(classes.root, classes.footer)}
        width='fullWidth'
      >
        <Grid container>
          <Grid item xs={12}>
            <Typography className={classes.TypographyColor} variant='subtitle2'>
              신나는 의료인 커뮤니티 넥스트메디신
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.TypographyColor} variant='subtitle1'>
              넥메 시즌4!
            </Typography>
          </Grid>
        </Grid>
      </Container>
    )
  }
}

export default withStyles(styles)(Footer)
