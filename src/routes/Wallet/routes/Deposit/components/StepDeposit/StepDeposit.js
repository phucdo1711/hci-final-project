import React from 'react'
import PropTypes from 'prop-types'
import classes from './StepDeposit.scss'

import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import TextField from 'material-ui/TextField'
import Input, { InputLabel, InputAdornment } from 'material-ui/Input'
import { FormControl, FormHelperText } from 'material-ui/Form'
import NumberFormat from 'react-number-format'

const NumberFormatCustom = props => {
  return (
    <NumberFormat
      {...props}
      onValueChange={values => {
        props.onChange({
          target: {
            value: values
          }
        })
      }}
      thousandSeparator
    />
  )
}

export const StepDeposit = ({
   bank, 
   bankAcc,
  setBankAcc,
  amount,
  setAmount,
  }) => {
  return (
    <div>
      <Paper className={classes.paper1}>
        <div className={classes.bankContainer}>
          <div className={classes.logoContainer}>
            <img src={bank.logo} className={classes.logo} />
          </div>
          <div className={classes.textDiv}>
            <Typography type="title" gutterBottom className={classes.title}>
              {' '}
              {bank.name.toLocaleUpperCase()}
            </Typography>
            <Typography className={classes.subTitle}>
              Direct transfer from your linked bank account
            </Typography>
          </div>
        </div>
        <div className={classes.bankContainer}>
          <div className={classes.logoContainer} />
          <div className={classes.accountBankDiv}>
            <Typography
              type="display1"
              gutterBottom
              className={classes.accountTitle}>
              Số tài khoản
            </Typography>
            <TextField
              InputProps={{
                disableUnderline: true,
                classes: {
                  input: classes.accountInput
                }
              }}
              value={bankAcc}
              onChange={(e) => setBankAcc(e.target.value)}
              helperText={'Số tài khoản chuyển tiền tại ' + bank.name}
            />
          </div>
        </div>
      </Paper>
      <Paper className={classes.paper2}>
        <Typography
          type="display1"
          gutterBottom
          className={classes.accountTitle}>
          Số tiền
        </Typography>
        <FormControl className={classes.formControl}>
          <Input
            className={classes.input}
            value={amount}
            onChange={(e) => e.target.value.floatValue && setAmount(e.target.value.floatValue) }
            endAdornment={
              <InputAdornment position="end">
                <Typography type="title">VNĐ</Typography>
              </InputAdornment>
            }
            inputComponent={NumberFormatCustom}
          />
        </FormControl>
      </Paper>
    </div>
  )
}

StepDeposit.propTypes = {
  bank: PropTypes.object // from enhancer (firestoreConnect + connect)
}

export default StepDeposit
