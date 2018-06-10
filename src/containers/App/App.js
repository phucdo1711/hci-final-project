import React from 'react'
import PropTypes from 'prop-types'
import { browserHistory, Router } from 'react-router'
import DocumentTitle from 'react-document-title'
import { Provider } from 'react-redux'

const App = ({ routes, store }) => (
  <DocumentTitle title="COINVND - Investments">
    <Provider store={store}>
      <Router history={browserHistory}>{routes}</Router>
    </Provider>
  </DocumentTitle>
)

App.propTypes = {
  routes: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
}

export default App
