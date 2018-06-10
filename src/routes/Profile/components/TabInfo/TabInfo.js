import React from 'react'
import PropTypes from 'prop-types'
import classes from './TabInfo.scss'

import { Grid, Avatar, Typography, Button ,Paper} from 'material-ui'
import Input, { InputLabel, InputAdornment } from 'material-ui/Input'
import { FormControl, FormHelperText } from 'material-ui/Form'

import { Edit2, Save } from 'react-feather'
import images from 'static/images'

export const TabInfo = ({ profile, 
  setIsEdit, 
  isEdit, 
  router , 
  phone, 
  country,
  fullAddress, 
  setPhone, 
  setCountry,
  setFullAddress,
  save
}) => {
  return (
    <Paper className={classes.root}>
      <Grid container className={classes.container}>
        {/* LEFT  */}
        <Grid item md={6} sm={12} xs={12} className={classes.leftContainer}>
          <Avatar
            alt={profile.displayName}
            src={profile.avatarUrl ? profile.avatarUrl : images.defaultAvatar}
            className={classes.avatar}
          />
          <Typography type="headline" className={classes.name}>
            {profile.displayName}
          </Typography>
        </Grid>

        {/* RIGHT  */}
        <Grid item md={6} sm={12} xs={12} className={classes.rightContainer}>
          <FormControl fullWidth className={classes.formControl}>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input defaultValue={profile.email} type="email" disabled />
          </FormControl>
          <FormControl fullWidth className={classes.formControl}>
            <InputLabel htmlFor="p">Phone</InputLabel>
            <Input
              value={phone}
              disabled={isEdit}
              onChange={(event) => setPhone(event.target.value)}
              endAdornment={
                <Button
                  className={classes.unverifiedBtn}
                  onClick={() => router.push(`profiles?tab=2`)}>
                  unverified
                </Button>
              }
            />
          </FormControl>
          <FormControl fullWidth className={classes.formControl}>
            <InputLabel htmlFor="email">Country</InputLabel>
            <Input
              value={country}
              disabled={isEdit}
              onChange={(event) => setCountry(event.target.value)}              
            />
          </FormControl>
          <FormControl fullWidth className={classes.formControl}>
            <InputLabel htmlFor="email">Full Address</InputLabel>
            <Input
              value={fullAddress}
              disabled={isEdit}
              onChange={(event) => setFullAddress(event.target.value)}
            />
          </FormControl>
        </Grid>
      </Grid>
      {isEdit ? (
        <Button className={classes.editBtn} onClick={() => setIsEdit(!isEdit)}>
          <Edit2 size={20} className={classes.editIcon} />
          EDIT
        </Button>
      ) : (
        <Button
          className={classes.primaryButton}
          onClick={save}>
          <Save size={20} className={classes.editIcon} />
          SAVE
        </Button>
      )}
    </Paper>
  )
}

TabInfo.propTypes = {
  tabinfo: PropTypes.object // from enhancer (firestoreConnect + connect)
}

export default TabInfo
