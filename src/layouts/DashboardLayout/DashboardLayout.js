import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { withFirebase } from 'react-redux-firebase'
import { withHandlers, withStateHandlers, withState } from 'recompose'
import { withRouter } from 'utils/components'
import Navbar from 'containers/Navbar'
import { LogOut, Sidebar } from 'react-feather'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { UserIsAuthenticated, UserIsActived } from 'utils/router'

// Material UI
import withWidth from 'material-ui/utils/withWidth'
import Hidden from 'material-ui/Hidden'

// styles + component
import classes from './DashboardLayout.scss'
import { Notifications } from 'modules/notification'
import 'styles/core.scss'
import Drawer from 'material-ui/Drawer'
import IconButton from 'material-ui/IconButton'
import Divider from 'material-ui/Divider'
import List from 'material-ui/List'
import MailFolderListItems from './components/tileData'
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import Typography from 'material-ui/Typography'
import UserCard from 'components/UserCard'

// animation
import { tween } from 'popmotion'
import { MotionValue } from 'popmotion-react'

// Icon
import Icon from 'react-svgcon'
import SidebarUnpin from 'static/icons/sidebar_unpin.svg'

import BottomNav from './components/BottomNav'

const enhance = compose(
  UserIsAuthenticated,
  UserIsActived,
  withFirebase,
  withWidth(),
  withState('expanded', 'setExpanded', true),
  connect(state => ({
    auth: state.firebase.auth
  })),
  withHandlers({
    addTodo: props => () => {
      console.log(props)
    },
    handleLogout: props => () => {
      props.firebase.logout()
      props.router.push('/')
      // props.closeAccountMenu()
    }
  })
)

export const DashboardLayout = ({
  location,
  children,
  addTodo,
  expanded,
  setExpanded,
  handleLogout,
  auth,
  width
}) => {
  return (
    <div>
      <Hidden mdUp>
        <BottomNav pathName={location.pathname} />
      </Hidden>

      <div className={classes.container}>
        <MotionValue
          onStateChange={{
            on: ({ value }) =>
              tween({
                from: value.get(),
                to: 0,
                duration: 150
              }).start(value),
            off: ({ value }) =>
              tween({
                from: value.get(),
                to: 180,
                duration: 150
              }).start(value)
          }}>
          {({ v, state, setStateTo }) => (
            <div>
              <Hidden smDown>
                <Drawer type="permanent">
                  <div
                    style={{ width: 240 - v + 'px' }}
                    className={classes.drawer}
                    onMouseEnter={setStateTo.on}
                    onMouseLeave={expanded ? setStateTo.on : setStateTo.off}>
                    <div className={classes.drawerHeader}>
                      <UserCard 
                        avatarURL={auth.photoURL}
                        name={auth.displayName}
                        email={auth.email}
                      />
                      <List className={classes.toggleMenu}>
                        <ListItem
                          className={classes.toggleMenuButton}
                          onClick={() => {
                            setExpanded(!expanded)
                          }}>
                          <ListItemIcon>
                            {!expanded ? (
                              <Sidebar />
                            ) : (
                              <div
                                style={{
                                  paddingRight: '14px',
                                  paddingLeft: '2px',
                                  paddingTop: '2px'
                                }}>
                                <Icon
                                  svg={SidebarUnpin}
                                  width="20px"
                                  height="20px"
                                />
                              </div>
                            )}
                          </ListItemIcon>
                        </ListItem>
                      </List>

                      <List className={classes.list}>
                        <MailFolderListItems
                          currentLocation={location.pathname}
                        />
                        <Divider />
                        <ListItem onClick={handleLogout} button>
                          <ListItemIcon>
                            <LogOut />
                          </ListItemIcon>
                          <ListItemText primary="Logout" />
                        </ListItem>
                      </List>
                    </div>
                  </div>
                </Drawer>
              </Hidden>
              <div
                style={
                  ['md', 'xl', 'lg'].includes(width)
                    ? { marginLeft: 240 - v + 'px' }
                    : { marginLeft: 0 }
                }>
                {children}
              </div>
            </div>
          )}
        </MotionValue>
        <Notifications />
      </div>
    </div>
  )
}

DashboardLayout.propTypes = {
  children: PropTypes.element.isRequired
}

export default enhance(DashboardLayout)
