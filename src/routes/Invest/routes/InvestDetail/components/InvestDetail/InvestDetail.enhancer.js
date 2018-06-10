import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'

export default compose(
  // create listener for investdetail, results go into redux
  firestoreConnect([{ collection: 'investdetail' }]),
  // map redux state to props
  connect(({ firebase: { data } }) => ({
    investdetail: data.investdetail
  }))
)
