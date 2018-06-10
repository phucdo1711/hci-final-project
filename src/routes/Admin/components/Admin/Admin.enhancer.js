import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { UserIsAdmin } from 'utils/router'

export default compose(
  UserIsAdmin
  // create listener for admin, results go into redux
  // firestoreConnect([{ collection: 'admin' }]),
  // // map redux state to props
  // connect(({ firebase: { data } }) => ({
  //   admin: data.admin
  // }))
)
