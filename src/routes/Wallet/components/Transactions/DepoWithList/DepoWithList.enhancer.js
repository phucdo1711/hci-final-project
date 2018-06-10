import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'

export default compose(
  // // create listener for depowithlist, results go into redux
  // firestoreConnect([{ collection: 'depowithlist' }]),
  // // map redux state to props
  // connect(({ firebase: { data } }) => ({
  //   depowithlist: data.depowithlist
  // }))
)
