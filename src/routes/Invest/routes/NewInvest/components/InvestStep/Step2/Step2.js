import React from 'react'
import PropTypes from 'prop-types'
import classes from './Step2.scss'

// import components
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import NumberFormat from 'react-number-format'
import Divider from 'material-ui/Divider'
import Input, { InputLabel } from 'material-ui/Input'
import { FormControl } from 'material-ui/Form'
import TextField from 'material-ui/TextField'

//method helper
import { formatterCurrency, moneyNumToText } from 'utils/method-helper'
import { withRouter } from 'utils/components'
import { compose } from 'redux'
import { connect } from 'react-redux'

const enhance = compose(
  withRouter,
  connect(({ firebase: { profile: { phoneNumber } } }) => ({ phoneNumber })),
)

const errorMess = (phoneNumber, router) => {
  if(!phoneNumber)
    return (<Typography 
              className={classes.errorMess}
              onClick={() => router.push(`profiles`)}
            > Vui lòng click vào đây để xác thực số điện thoại trước
            </Typography>)
  else 
    return false;
}
const Step2 = ({ amountInvest, setIsError, invest, phoneNumber, router }) => {
  const fee = 100000;
  const errMess = errorMess(phoneNumber, router);
  if(errMess) setIsError(true)
  else setIsError(false)
  return (
    <Paper className={classes.paper}>
      <div className={classes.header}>
        <Typography type="subheading" align="center" gutterBottom>
          BẠN ĐANG ĐẦU TƯ
        </Typography>
        <Typography
          type="display2"
          align="center"
          gutterBottom
          className={classes.marginText}>
          {formatterCurrency(amountInvest)}
        </Typography>
        <Typography
          type="subheading"
          align="center"
          gutterBottom
          className={classes.marginText}>
          Gói đầu tư: {invest.name}
        </Typography>
      </div>
      <Divider className={classes.divider} />
      {/* <FormControl fullWidth className={classes.formControl}>
                <InputLabel
                    className={classes.inputLabel}
                    htmlFor="custom-color-input"
                >
                    Nhập mã xác thực từ điện thoại
                </InputLabel>
                <Input
                    className={classes.input}
                    id="custom-color-input"
                />
            </FormControl> */}
      <div className={classes.divInputCode}>
        <Typography type="title">Nhập mã xác thực</Typography>
        <TextField
          InputLabelProps={{
            shrink: true
          }}
          helperText={!errMess ? 
            `Chúng tôi đã gửi mã xác thực tới số điện thoại: ${phoneNumber}` 
            : errMess}
          margin="normal"
          className={classes.inputCode}
          error={errMess ? true : false}
        />
      </div>
      <Divider className={classes.divider} />
      <div className={classes.detailPayment}>
        <Typography gutterBottom>Phí giao dịch</Typography>
        <Typography type="subheading" gutterBottom>
          {formatterCurrency(fee)}
        </Typography>
      </div>
      <div className={classes.detailPayment}>
        <Typography gutterBottom>Số tiền đầu tư</Typography>
        <Typography type="subheading" gutterBottom>
          {formatterCurrency(amountInvest)}
        </Typography>
      </div>
      <div className={classes.detailPayment}>
        <Typography gutterBottom>Tổng cộng</Typography>
        <Typography type="subheading" gutterBottom>
          {formatterCurrency(Number(amountInvest) + Number(fee))}
        </Typography>
      </div>
    </Paper>
  )
}

export default enhance(Step2)
