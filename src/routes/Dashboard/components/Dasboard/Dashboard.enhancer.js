import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { UserIsAuthenticated } from 'utils/router'

export default compose(
  // UserIsAuthenticated,
  // create listener for dashboard, results go into redux
  // firestoreConnect([{ collection: 'BangGia' }]),
  // map redux state to props
  connect(({ firebase: { auth, data } }) => ({
    auth: auth
  }))
)
