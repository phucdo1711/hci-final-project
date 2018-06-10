import React from 'react'
import PropTypes from 'prop-types'
import classes from './TabAppBar.scss'

import { AppBar, Tabs, Tab, Paper } from 'material-ui'
import { withTabRouter } from 'utils/components'
import { compose } from 'redux'

const enhance = compose(
  withTabRouter
)

export const TabAppBar = ({ path, router, paperStyle, tab, tabs }) => (
  <AppBar className={classes.appBar} position="static">
    <Tabs
      value={tab}
      onChange={(event, value) => {
        router.push(`${path}?tab=${value}`)
      }}
      indicatorColor="primary"
      textColor="primary"
    >
      {tabs.map((item, index) =>
        <Tab key={index} label={item.label} />
      )}
    </Tabs>
    <div className={classes.bodyContainer}>
      {tabs && tabs[tab].content}
    </div>
  </AppBar>
)

TabAppBar.propTypes = {
  tabappbar: PropTypes.object // from enhancer (firestoreConnect + connect)
}

export default enhance(TabAppBar)
