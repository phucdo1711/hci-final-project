// This file is shared across the demos.

import React from 'react'
import PropTypes from 'prop-types'
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import { MenuList, MenuItem } from 'material-ui/Menu'
import Dashboard from 'material-ui-icons/Dashboard'
import AccountBalance from 'material-ui-icons/AccountBalance'

import { Link } from 'react-router'
import { withStyles } from 'material-ui/styles'
import { VisibleOnlyAdmin } from 'utils/router'

const styles = {
  color: { color: 'rgb(10, 63, 107)' }
}

const styleLine = {
  width: 3,
  backgroundColor: '#2e72be',
  height: 36,
  position: 'absolute',
  left: 0,
  top: 6
}

const colorStyle = {
  color: 'rgb(32, 79, 163)'
}

const OnlyAdminLink = VisibleOnlyAdmin(() => {
  return (
    <MenuItem>
      <Link to="/admin">{'Admin'}</Link>
    </MenuItem>
  )
})

export const AdminList = ({ classes, currentLocation }) => {
  const menuList = [
    {
      href: '/dashboard',
      icon: Dashboard,
      text: 'Dashboard'
    },
    {
      href: '/invest',
      icon: AccountBalance,
      text: 'Invest'
    }
  ]
  return (
    <MenuList>
      {menuList.map((item, index) => (
        <MenuItem
          disableRipple
          key={index}
          component={Link}
          to={item.href}
          button>
          {item.href === currentLocation ? <div style={styleLine} /> : <div />}
          <ListItemIcon>
            <item.icon
              style={item.href === currentLocation ? colorStyle : {}}
            />
          </ListItemIcon>
          <ListItemText
            classes={
              item.href === currentLocation ? { text: classes.color } : {}
            }
            primary={item.text}
          />
        </MenuItem>
      ))}
      <OnlyAdminLink />
    </MenuList>
  )
}

MailFolderListItems.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(AdminList)
