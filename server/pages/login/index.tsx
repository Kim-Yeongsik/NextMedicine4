import {
  Button,
  createStyles,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography,
  WithStyles,
  withStyles
} from '@material-ui/core'
import React from 'react'
import { Router } from 'server/routes'

import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import { inject, observer } from 'mobx-react'
import { withLayout } from '../page/layout'

import { containerBreakpoint } from 'consts/layout'
import profileController from 'controllers/profile'
import { Form } from 'lib/mobx-react-form'
import { Store } from 'stores'

const styles = theme =>
  createStyles({
    root: {
      width: 500,
      margin: '200px auto',
      padding: 50,
      [theme.breakpoints.down(containerBreakpoint(theme))]: {
        width: '95%',
        marginTop: theme.spacing(12)
      }
    },
    form: {
      width: '100%'
    },
    button: {
      marginTop: theme.spacing(5)
    }
  })

interface PageProps extends WithStyles<typeof styles> {}
interface PageState {
  showPassword: boolean
}

@inject((allStores: any) => ({
  store: allStores.store as Store
}))
@observer
class Page extends React.Component<PageProps & { store?: Store }, PageState> {
  form
  passwordInputRef

  constructor (props) {
    super(props)

    if (props.store.viewer) {
      props.store.snackOpen('이미 로그인 되어있어요')
    }

    this.passwordInputRef = React.createRef()

    this.state = {
      showPassword: false
    }
    this.form = new Form(
      {
        fields: [
          {
            name: 'email',
            label: 'Email',
            rules: 'required|email|string',
            bindings: 'TextField'
          },
          {
            name: 'password',
            label: 'Password',
            rules: 'string|min:4',
            bindings: 'TextField'
          }
        ]
      },
      {
        hooks: {
          async onSuccess (form) {
            const mobxStore = props.store
            const { email, password } = form.values()

            const data = {
              email,
              password,
              remember: false,
              'g-rechaptcha-response': undefined
            }

            const res = await profileController.login(data, { useAlert: true })

            if (res) {
              const viewer = res.profile
              mobxStore.login(viewer)
              Router.pushRoute('/')
              mobxStore.snackOpen(res.profile.name + '님 반갑습니다')
            } else {
              console.log(res)
            }
          }
        }
      }
    )
  }

  handleClickShowPassword = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword
    }))
  }

  render () {
    const { classes } = this.props
    const form = this.form
    const isLogin = Boolean(this.props.store.viewer)

    return (
      <>
        <Paper elevation={1} className={classes.root}>
          <Typography variant='h4' align='center' gutterBottom>
            LOGIN
          </Typography>
          <form className={classes.form} onSubmit={form.onSubmit}>
            <TextField
              autoComplete='email'
              type='email'
              autoFocus
              fullWidth
              margin='normal'
              required
              disabled={isLogin}
              onKeyPress={e =>
                e.key === 'Enter' && this.passwordInputRef.focus()
              }
              {...form.$('email').bind()}
            />
            <TextField
              autoComplete='password'
              fullWidth
              margin='normal'
              required
              type={this.state.showPassword ? 'text' : 'password'}
              disabled={isLogin}
              inputRef={ref => (this.passwordInputRef = ref)}
              onKeyPress={e => e.key === 'Enter' && form.submit(e)}
              {...form.$('password').bind()}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton
                      edge='end'
                      aria-label='Toggle password visibility'
                      size='small'
                      onClick={this.handleClickShowPassword}
                    >
                      {this.state.showPassword ? (
                        <Visibility fontSize='small' />
                      ) : (
                        <VisibilityOff fontSize='small' />
                      )}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            <Typography align='center'>{form.error}</Typography>
            <Button
              className={classes.button}
              color='primary'
              variant='contained'
              fullWidth
              onClick={form.onSubmit}
              disabled={isLogin}
            >
              {!isLogin ? '로그인' : '이미 로그인 되어있어요'}
            </Button>
          </form>
        </Paper>
      </>
    )
  }
}

const layout = {
  title: '로그인',
  titleContainer: false
}

export default withLayout(layout)(withStyles(styles)(Page))
