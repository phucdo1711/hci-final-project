import React from 'react'
import PropTypes from 'prop-types'
import classes from './Share.scss'

import { Grid, Paper, Button, Typography } from 'material-ui'
import { Link, Facebook, Copy } from 'react-feather'
import Input, { InputLabel, InputAdornment } from 'material-ui/Input'

export const Share = ({ code }) => {
  return (
    <Paper className={classes.root}>
      {/* <div className={classes.buttonGroup}> */}
      <Grid container justify="space-between">
        <Grid item md={4} sm={4} className={classes.btnGrid}>
          <Button className={classes.sendMailBtn}>
            <Link size={15} className={classes.iconBtn} />
            Send Mail
          </Button>
        </Grid >
        <Grid item md={4} sm={4} className={classes.btnGrid}>
          <Button className={classes.fbBtn}>
            <Facebook size={15} className={classes.iconBtn} />
            Facebook
          </Button>
        </Grid>
        <Grid item md={4} sm={4} className={classes.btnGrid}>
          <Button className={classes.googleBtn}>
            <img src='https://cdn.worldvectorlogo.com/logos/google-plus.svg' width={15} height={15} className={classes.iconBtn} />
            Google
          </Button>
        </Grid>
      </Grid>
      {/* </div> */}
      <div className={classes.buttonGroup}>
        <Typography type="subheading">Referral URL</Typography>
        <Input
          disabled
          className={classes.input}
          value={code ? `https://coinvnd.com/ref/${code}` : ''}
          // value={this.state.amount}
          // onChange={this.handleChange('amount')}
          endAdornment={
            <InputAdornment position="end">
              <Typography type="body2">COPY</Typography>
            </InputAdornment>
          }
          disableUnderline
        />
      </div>
    </Paper>
  )
}

Share.propTypes = {
  code: PropTypes.string
}

export default Share
