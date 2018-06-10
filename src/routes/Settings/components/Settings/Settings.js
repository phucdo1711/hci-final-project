import React from 'react'
import PropTypes from 'prop-types'
import classes from './Settings.scss'
import ContainerHeader from 'components/ContainerHeader'

import List, {
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  ListSubheader
} from 'material-ui/List'
import Switch from 'material-ui/Switch'
import { SwapHoriz } from 'material-ui-icons'
import Paper from 'material-ui/Paper'
import { Activity, LogIn, CreditCard } from 'react-feather'

const settinglist = [
  {
    icon: <Activity />,
    name: 'Thông báo cho tôi khi có gói đầu tư mới'
  },
  {
    icon: <LogIn />,
    name: 'Thông báo cho tôi khi có đăng nhập'
  },
  {
    icon: <CreditCard />,
    name: 'Thông báo cho tôi khi số dư tài khoản thay đổi'
  },
  {
    icon: <SwapHoriz />,
    name: 'Thông báo cho tôi khi trạng tháo giao dịch thay đổi'
  }
]

export const Settings = ({ settings }) => (
  <div className={classes.container}>
    <ContainerHeader title={'Settings'} />
    <Paper className={classes.root}>
      <List subheader={<ListSubheader>Settings</ListSubheader>}>
        {settinglist.map((item, index) => (
          <ListItem key={index}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.name} />
            <ListItemSecondaryAction>
              <Switch
              // onChange={this.handleToggle('wifi')}
              // checked={this.state.checked.indexOf('wifi') !== -1}
              />
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Paper>
  </div>
)

Settings.propTypes = {
  settings: PropTypes.object // from enhancer (firestoreConnect + connect)
}

export default Settings
