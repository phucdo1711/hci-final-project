import React from 'react'
import PropTypes from 'prop-types'
import classes from './Vi.scss'

// Material UI
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import { Grid } from 'material-ui'
import { formatterCurrency } from 'utils/method-helper'

export const Vi = ({ wallet, goToDepsit, goToWithdraw }) => (
  <Grid container item md={12} xl={9} lg={8}>
    <Grid item md={4} sm={12} xs={12}>
      <Card className={classes.card}>
        <div>{'Tổng tài khoản'.toLocaleUpperCase()}</div>
        <Typography type="display1" className={classes.money} gutterBottom>
          {formatterCurrency(wallet.balance)} ‎
        </Typography>
        <div
          style={{
            justifyContent: 'flex-end',
            flexDirection: 'row',
            display: 'flex'
          }}>
          <Button className={classes.button} onClick={goToWithdraw}>
            WITHDRAW
          </Button>
          <Button className={classes.button} onClick={goToDepsit}>
            DEPOSIT
          </Button>
        </div>
      </Card>
    </Grid>
    <Grid item md={4} sm={12} xs={12}>
      <Card className={classes.car2}>
        {'Tài khoản khả dụng'.toLocaleUpperCase()}
        <Typography type="display1" className={classes.money} gutterBottom>
          {formatterCurrency(wallet.available)} ‎
        </Typography>
      </Card>
    </Grid>
    <Grid item md={4} sm={12} xs={12}>
      <Card className={classes.car3}>
        {'số tiền đang đầu tư'.toLocaleUpperCase()}
        <Typography type="display1" className={classes.money} gutterBottom>
          {formatterCurrency(wallet.investing)} ‎
        </Typography>
      </Card>
    </Grid>
  </Grid>
)

Vi.propTypes = {
  wallet: PropTypes.object // from enhancer (firestoreConnect + connect)
}

export default Vi
