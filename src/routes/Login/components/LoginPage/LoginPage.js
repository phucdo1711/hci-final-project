import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import GoogleButton from 'react-google-button'
import Paper from 'material-ui/Paper'
import { SIGNUP_PATH } from 'constants'
import LoginForm from '../LoginForm'

import classes from './LoginPage.scss'

// Material UI
import Grid from 'material-ui/Grid'
import Button from 'material-ui/Button'
import Divider from 'material-ui/Divider'

export const LoginPage = ({
  emailLogin,
  googleLogin,
  onSubmitFail,
  gotoRegister
}) => (
  <div className={classes.topContainer}>
    <div className={classes.header}>
      <div className={classes.logo}>COINVND</div>
      <Button className={classes.registerButton} onClick={gotoRegister}>
        Register
      </Button>
    </div>

    <div className={classes.title}>Login</div>

    <div className={classes.container}>
      <Paper className={classes.panel}>
        <div className={classes.or}>
          <div className={classes.orLine} />
          <div>Sign with </div>
          <div className={classes.orLine} />
        </div>
        <div className={classes.provider}>
          <div className={classes.item}>
            <Button className={classes.providerButton} onClick={googleLogin}>
              Google
            </Button>
          </div>
          <div className={classes.item}>
            <Button className={classes.providerButton}>Facebook</Button>
          </div>
        </div>
        <div className={classes.or} style={{ marginTop: 50 }}>
          <div className={classes.orLine} />
          <div>Or sign</div>
          <div className={classes.orLine} />
        </div>
        {/* <div className={classes.loginForm}> */}
        <LoginForm onSubmit={emailLogin} onSubmitFail={onSubmitFail} />
        {/* </div> */}
      </Paper>
      {/* <div className={classes.or}>or</div>
    <div className={classes.providers}>
      <GoogleButton onClick={googleLogin} />
    </div>
    <div className={classes.signup}>
      <span className={classes.signupLabel}>Need an account?</span>
      <Link className={classes.signupLink} to={SIGNUP_PATH}>
        Sign Up
      </Link>
    </div> */}
    </div>
  </div>
)

LoginPage.propTypes = {
  emailLogin: PropTypes.func, // from enhancer (withHandlers)
  onSubmitFail: PropTypes.func, // from enhancer (withHandlers)
  googleLogin: PropTypes.func // from enhancer (withHandlers)
}

export default LoginPage
