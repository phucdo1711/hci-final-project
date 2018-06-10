import React from 'react'
import PropTypes from 'prop-types'
import classes from './UserCard.scss'

import { Avatar, Typography } from 'material-ui'
import images from 'static/images'

export const UserCard = ({ avatarURL, name, email }) => (
  <div className={classes.container}>
    <Avatar
      className={classes.avatar}
      src={
        avatarURL ? avatarURL : images.defaultAvatar
      }
    />
    <div className={classes.headerName}>
      <Typography className={classes.name}>
        {name || ''} 
      </Typography>
      <Typography className={classes.mail}>
        {email || ''}
      </Typography>
    </div>
  </div>
)

UserCard.propTypes = {
  avatarURL: PropTypes.string,
  name: PropTypes.string, 
  email: PropTypes.string
}

export default UserCard
