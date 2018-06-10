import React from 'react'
import PropTypes from 'prop-types'
import classes from './Overview.scss'

// import components
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import { formatterCurrency } from 'utils/method-helper'

export const Overview = ({ balance, totalInvest, activeInvest }) => {
  return (
    <Grid container spacing={24}>
      <Grid item xs={12} md={4} xl={3}>
        <Paper className={classes.paper1}>
          <div>{'wallet balance'.toLocaleUpperCase()}</div>
          <Typography
            type="display1"
            align="right"
            className={classes.money}
            gutterBottom>
            {formatterCurrency(balance)}
        </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4} xl={3}>
        <Paper className={classes.paper2}>
          <div>{'Number of active Investments'.toLocaleUpperCase()}</div>
          <Typography
            type="display1"
            align="right"
            className={classes.money}
            gutterBottom>
            {activeInvest}/{totalInvest}
        </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4} xl={3}>
        <Paper className={classes.paper3}>
          <div>{'Total Referrals'.toLocaleUpperCase()}</div>
          <Typography
            type="display1"
            align="right"
            className={classes.money}
            gutterBottom>
            2
        </Typography>
        </Paper>
      </Grid>
    </Grid>
  )
}

Overview.propTypes = {
  overview: PropTypes.object // from enhancer (firestoreConnect + connect)
}

export default Overview
