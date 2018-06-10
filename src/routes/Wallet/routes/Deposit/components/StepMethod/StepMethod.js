import React from 'react'
import PropTypes from 'prop-types'
import classes from './StepMethod.scss'
import Paper from 'material-ui/Paper'
import Grid from 'material-ui/Grid'
import Radio from 'material-ui/Radio'
import { isEmpty, isLoaded } from 'react-redux-firebase'
import Typography from 'material-ui/Typography'

export const StepMethod = ({ banks, handleChangeMethod, selectedMethod }) => {
  return (
    <Grid container spacing={24}>
      {!isEmpty(banks) &&
        banks.map((item, index) => (
          <Grid item xs={6} sm={6} key={item.id} xs={12}>
            <Paper className={classes.container}>
              <Radio
                checked={selectedMethod === item.id}
                onChange={handleChangeMethod}
                value={item.id}
              />
              <img src={item.logo} className={classes.logo} />
              <div className={classes.textDiv}>
                <Typography type="title" gutterBottom className={classes.title}>
                  {' '}
                  {item.name.toLocaleUpperCase()}
                </Typography>
                <Typography className={classes.subTitle}>
                  Direct transfer from your linked bank account
                </Typography>
              </div>
              {!item.isActive && <div className={classes.disabled} />}
            </Paper>
          </Grid>
        ))}
    </Grid>
  )
}

StepMethod.propTypes = {
  handleChangeMethod: PropTypes.func.isRequired,
}

export default StepMethod
