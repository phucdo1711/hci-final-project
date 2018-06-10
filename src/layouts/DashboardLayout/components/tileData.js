// This file is shared across the demos.

import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import { VisibleOnlyAdmin } from 'utils/router'

// Icon
// var Icon = require("react-svg-icons");
import Icon from 'react-svgcon'
import Dash from 'static/icons/dashboard1.svg'

// import SVGInline from "react-svg-inline"

// Material component
import { withStyles } from 'material-ui/styles'
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import { MenuList, MenuItem } from 'material-ui/Menu'
import Dashboard from 'material-ui-icons/Dashboard'
import AccountBalance from 'material-ui-icons/AccountBalance'
import AccountBalanceWallet from 'material-ui-icons/AccountBalanceWallet'
import { Activity, Menu, User, Settings, Users } from 'react-feather'
import Divider from 'material-ui/Divider/Divider'
import ListSubheader from 'material-ui/List/ListSubheader'

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

// const OnlyAdminLink = VisibleOnlyAdmin(({ classes, currentLocation, menuOpen }) => {
//   const menuList = [
//     {
//       href: "/invest",
//       icon: Activity,
//       text: "Investments"
//     }
//   ];
//   return(
//     <MenuList subheader={!menuOpen ? <ListSubheader style={{backgroundColor:'white'}}>Admin Panel</ListSubheader>:<Divider />}>
//       {menuList.map((item, index) => (
//         <MenuItem
//           disableRipple={true}
//           key={index}
//           component={Link}
//           to={item.href}
//           button
//         >
//           {item.href === currentLocation ? (
//             <div style={styleLine}> </div>
//           ) : (
//             <div />
//           )}
//           <ListItemIcon>
//             <item.icon
//               style={item.href === currentLocation ? colorStyle : {}}
//             />
//           </ListItemIcon>
//           <ListItemText
//             classes={
//               item.href === currentLocation ? { text: classes.color } : {}
//             }
//             primary={item.text}
//           />
//         </MenuItem>
//       ))}

//     </MenuList>
//   );
// });

export const MailFolderListItems = ({ classes, currentLocation, menuOpen }) => {
  const menuList = [
    {
      href: '/dashboard',
      icon: () => {
        return (
          <div style={{ paddingRight: '14px', paddingLeft: '1px' }}>
            <Icon svg={Dash} width="24px" height="24px" />
          </div>
        )
      },
      text: 'Dashboard'
    },
    {
      href: '/invest',
      icon: Activity,
      text: 'Investments'
    },
    {
      href: '/wallet',
      icon: AccountBalanceWallet,
      text: 'Wallet'
    },
    {
      href: '/profiles',
      icon: User,
      text: 'Profiles'
    },
    {
      href: '/referrals',
      icon: Users,
      text: 'Referrals'
    },
    {
      href: '/settings',
      icon: Settings,
      text: 'Settings'
    }
  ]
  // console.log('====================================');
  //         console.log(currentLocation, item.href);
  //         console.log('====================================');
  return (
    <div>
      <MenuList>
        {menuList.map((item, index) => (
          <MenuItem
            disableRipple
            key={index}
            component={Link}
            to={item.href}
            button>
            {`/${currentLocation}/`.includes(item.href) ? (
              <div style={styleLine} />
            ) : (
              <div />
            )}
            <ListItemIcon
              style={
                `/${currentLocation}/`.includes(item.href) ? colorStyle : {}
                // item.href === currentLocation ? colorStyle : {}
              }>
              <item.icon />
            </ListItemIcon>
            <ListItemText
              classes={
                `/${currentLocation}/`.includes(item.href)
                  ? { text: classes.color }
                  : {}
                // item.href === currentLocation ? { text: classes.color } : {}
              }
              primary={item.text}
            />
          </MenuItem>
        ))}
      </MenuList>
      {/* <OnlyAdminLink currentLocation={currentLocation} classes={classes} menuOpen={menuOpen}/> */}
    </div>
  )
}

MailFolderListItems.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(MailFolderListItems)
