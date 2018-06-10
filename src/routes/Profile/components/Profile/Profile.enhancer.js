import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect , getVal, withFirebase} from 'react-redux-firebase'
import { withState , withStateHandlers} from 'recompose'
import { withRouter, spinnerWhileLoading } from 'utils/components'

export default compose(
  connect(({ firebase: { auth: { uid } } }) => ({ uid })),
  spinnerWhileLoading(["uid"]),
  // create listener for profile, results go into redux
  firestoreConnect(({ uid }) => [
    {
      collection: 'Account',
      doc: uid
    }
  ]),
  // // map redux state to props
  connect(({ firestore: { data } }, { uid }) => ({
    account: getVal(data, `Account/${uid}`)
  })),
  spinnerWhileLoading(['account']),
  withRouter
)
