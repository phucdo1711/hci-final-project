import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'

export default compose(
  // // create listener for activitylist, results go into redux
  // firestoreConnect([{ collection: 'activitylist' }]),
  // // map redux state to props
  // connect(({ firebase: { data } }) => ({
  //   activitylist: data.activitylist
  // }))
)
