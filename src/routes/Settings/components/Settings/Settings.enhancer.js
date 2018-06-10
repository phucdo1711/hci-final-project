import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'

export default compose(
  // create listener for settings, results go into redux
  // firestoreConnect([{ collection: 'settings' }]),
  // map redux state to props
  connect(({ firebase: { data } }) => ({
    settings: data.settings
  }))
)
