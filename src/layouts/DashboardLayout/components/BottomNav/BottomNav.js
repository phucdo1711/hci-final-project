import React from 'react'
import PropTypes from 'prop-types'
import classes from './BottomNav.scss'

import BottomNavigation, {
  BottomNavigationAction
} from 'material-ui/BottomNavigation'
import Dashboard from 'material-ui-icons/Dashboard'
import AccountBalance from 'material-ui-icons/AccountBalance'
import AccountBalanceWallet from 'material-ui-icons/AccountBalanceWallet'
import { Activity, Menu, User, Settings, Users } from 'react-feather'
import { Link } from 'react-router'

const menuList = [
  {
    href: 'dashboard',
    icon: Dashboard,
    text: 'Dashboard'
  },
  {
    href: 'invest',
    icon: Activity,
    text: 'Investments'
  },
  {
    href: 'wallet',
    icon: AccountBalanceWallet,
    text: 'Wallet'
  },
  {
    href: 'profiles',
    icon: User,
    text: 'Profiles'
  },
  {
    href: 'referrals',
    icon: Users,
    text: 'Referrals'
  },
  {
    href: 'settings',
    icon: Settings,
    text: 'Settings'
  }
]

export const BottomNav = ({ pathName }) => {
  return (
    <BottomNavigation
      value={pathName.split('/')[0] || pathName.split('/')[1]}
      className={classes.root}>
      {menuList.map((item, index) => (
        <BottomNavigationAction
          key={index}
          label={item.text}
          value={item.href}
          icon={<item.icon />}
          component={Link}
          to={item.href}
        />
      ))}
    </BottomNavigation>
  )
}

BottomNav.propTypes = {}

export default BottomNav
