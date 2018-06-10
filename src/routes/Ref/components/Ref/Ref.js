import React from 'react'
import PropTypes from 'prop-types'
import classes from './Ref.scss'

// Material UI
import Grid from 'material-ui/Grid'
import Button from 'material-ui/Button'
import Divider from 'material-ui/Divider'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'

import { Field } from 'redux-form'
import { TextField } from 'redux-form-material-ui'
import { Link } from 'react-router'
import { required } from 'utils/form'

export const Ref = ({
  pristine,
  submitting,
  handleSubmit,
  handleLogout,
  handleChange,
  code,
  children,
  auth
}) => children ? (
  React.cloneElement(children, { auth })
) : (
  <div className={classes.topContainer}>
    <div className={classes.header}>
      <div className={classes.logo}>COINVND</div>
    </div>

    <div className={classes.title}>Nhập mã giới thiệu</div>

    <div className={classes.container}>
      <Paper className={classes.panel}>
        <div className={classes.formContainer}>
          <TextField
            id="refCode"
            label="Mã giới thiệu"
            value={code}
            onChange={handleChange}
            margin="normal"
          />
          <div className={classes.submit}>
          <Button
              // className={classes.loginButton}
              // raised
              onClick={handleLogout}>
              Đổi tài khoản
            </Button>

            <Button
              className={classes.loginButton}
              color="primary"
              type="submit"
              raised
              disabled = {code.length <= 0}
              onClick={handleSubmit}>
              Xác nhận
            </Button>
          </div>
        </div>
        <Typography style={{ padding: 10 }}>
          Bạn không có mã giới thiệu?{' '}
          <Link className={classes.refRequest} to={'/ref/request'}>
            Lấy mã giới thiệu
          </Link>
        </Typography>
      </Paper>
    </div>
  </div>
)

Ref.propTypes = {
  ref: PropTypes.object // from enhancer (firestoreConnect + connect)
}

export default Ref
