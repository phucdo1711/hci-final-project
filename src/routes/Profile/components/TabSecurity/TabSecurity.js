import React from 'react'
import PropTypes from 'prop-types'
import classes from './TabSecurity.scss'
import { Grid, Avatar, Typography, Button, Checkbox,Paper } from 'material-ui'
import {
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  FormHelperText
} from 'material-ui/Form'

const checkBoxList = [
  'Login',
  'Withdraws',
  'PasswordChange',
  'InfoChange',
  'SecurityChange'
]

export const TabSecurity = ({ account, changeValue }) => {
  return (
    <Paper>
    <Grid container className={classes.container}>
      {/* LEFT  */}
      <Grid item md={6} sm={12} xs={12} className={classes.leftContainer}>
        <Avatar
          // alt={profile.displayName}
          src={
            'https://lh3.googleusercontent.com/HPc5gptPzRw3wFhJE1ZCnTqlvEvuVFBAsV9etfouOhdRbkp-zNtYTzKUmUVPERSZ_lAL=w300'
          }
          className={classes.avatar}
        />
        <Typography type="headline" className={classes.logoName}>
          Google Authenticator
        </Typography>
        <Typography className={classes.logoSub}>
          Use Google's Android or iPhone app for adding token-based 2FA.
        </Typography>
        <Button className={classes.primaryButton}>SET UP</Button>
      </Grid>

      {/* RIGHT  */}
      <Grid item md={6} sm={12} xs={12} className={classes.rightContainer}>
        <FormControl component="fieldset">
          <FormGroup>
            {checkBoxList.map((item, index) => (
              <FormControlLabel
                key={index}
                control={
                  <Checkbox
                    checked={account && account.Security[item]}
                    // onChange={this.handleChange('gilad')}
                    value=""
                    onClick={() => changeValue(item, account.Security[item])}
                  />
                }
                label={item}
              />
            ))}
          </FormGroup>
        </FormControl>
      </Grid>
    </Grid>
    </Paper>
  )
}

TabSecurity.propTypes = {}

export default TabSecurity
