import { createStyles, Grid, WithStyles, withStyles } from '@material-ui/core'
import NextSeo from 'next-seo'
import Error from 'next/error'
import React from 'react'

import { inject } from 'mobx-react'
import { Store } from 'stores'

import Container from 'components/Container'
import NMAppBar from 'components/nmAppBar'
import NMFooter from 'components/nmfooter'
import SideBar from 'components/SideBar'

import { containerBreakpoint } from 'consts/layout'

const styles = theme =>
  createStyles({
    root: {
      fontSize: '14px',
      marginTop: theme.spacing(12),
      marginBottom: theme.spacing(3),
      // [theme.breakpoints.down(containerBreakpoint(theme))]: {
      //   marginTop: theme.spacing(8),
      [theme.breakpoints.down('md')]: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        fontSize: '15px',
        [theme.breakpoints.down('sm')]: {
          marginTop: '6px',
          marginLeft: theme.spacing(0),
          marginRight: theme.spacing(0)
        }
        // }
      }
    },
    invisible: {
      [theme.breakpoints.down(containerBreakpoint(theme))]: {
        display: 'none'
      }
    }
  })

interface PageProps extends WithStyles<typeof styles> {
  titleContainer?: any
  title?: string
}

@inject((allStores: any) => ({
  store: allStores.store as Store
}))
class Layout extends React.Component<PageProps> {
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render () {
    const { children, classes, title, titleContainer = {} } = this.props

    return (
      <>
        <NextSeo
          config={{
            title: ['넥메4', ' ', title || titleContainer.title].join('')
          }}
        />
        <NMAppBar />
        <Container className={classes.root} width='large'>
          <Grid container>
            <Grid item xs={2} className={classes.invisible}>
              <SideBar />
            </Grid>
            <Grid item xs={1} className={classes.invisible} />
            <Grid item xs={12} md={9}>
              {children}
            </Grid>
          </Grid>
        </Container>
        <NMFooter />
      </>
    )
  }
}

const StyledLayout = withStyles(styles)(Layout)

export const withLayout = (layoutProps: any = {}) => ComposedComponent => {
  interface HOCProps {
    initialProps?: any
  }

  const HOC = class extends React.Component<HOCProps> {
    static async getInitialProps (ctx) {
      let initialProps: any = {}
      if (ComposedComponent.getInitialProps) {
        try {
          initialProps = await ComposedComponent.getInitialProps(ctx)
        } catch (err) {
          throw err
        }
      }
      return {
        ...initialProps,
        initialProps
      }
    }

    render () {
      const { initialProps } = this.props
      const mergedProps: any = {}

      if (this.props) {
        Object.keys(this.props).forEach(p => {
          mergedProps[p] = this.props[p]
        })
      }
      if (initialProps) {
        Object.keys(initialProps).forEach(p => {
          mergedProps[p] = initialProps[p]
        })
      }

      if (
        process.env.NODE_ENV === 'production' &&
        mergedProps.statusCode &&
        mergedProps.statusCode !== 200
      ) {
        return <Error statusCode={mergedProps.statusCode} />
      }

      return (
        <StyledLayout {...layoutProps} {...mergedProps}>
          {React.createElement(ComposedComponent, mergedProps)}
        </StyledLayout>
      )
    }
  }

  return HOC
}
