import React from 'react'
import PropTypes from 'prop-types'
import Navbar from 'containers/Navbar'
import classes from './HomeLayout.scss'
import { Notifications } from 'modules/notification'
import 'styles/core.scss'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'

import purple from 'material-ui/colors/purple'
import green from 'material-ui/colors/green'
import indigo from 'material-ui/colors/indigo'

export const HomeLayout = ({ children }) => <div>{children}</div>

HomeLayout.propTypes = {
  children: PropTypes.element.isRequired
}

export default HomeLayout
