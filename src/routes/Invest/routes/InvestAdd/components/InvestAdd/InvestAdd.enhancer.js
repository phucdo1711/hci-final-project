import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'

export default compose(
  // create listener for investadd, results go into redux
  firestoreConnect([{ collection: 'investadd' }]),
  // map redux state to props
  connect(({ firebase: { data } }) => ({
    investadd: data.investadd
  }))
)
