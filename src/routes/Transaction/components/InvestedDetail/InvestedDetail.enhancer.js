import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { withRouter} from 'utils/components'


export default compose(
  withRouter
  // create listener for investeddetail, results go into redux
  //firestoreConnect([{ collection: 'investeddetail' }]),
  // map redux state to props
  // connect(({ firebase: { data } }) => ({
  //   investeddetail: data.investeddetail
  // }))
)
