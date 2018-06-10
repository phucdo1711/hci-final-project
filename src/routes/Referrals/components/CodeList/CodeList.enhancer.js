import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect, getVal } from 'react-redux-firebase'
import { withState, withHandlers } from 'recompose'
import { spinnerWhileLoading } from 'utils/components'

export default compose(
  connect(({ firebase: { profile, auth: { uid } } }) => ({ uid , profile})),
  firestoreConnect(({ uid, profile }) => [{ 
    collection: 'users', 
    where: ['refId', '==', profile.ref],
    storeAs: 'UserByRef'
  }]),
  connect(({ firestore: { ordered}}) => ({
      codeList : ordered.UserByRef
  })),
  spinnerWhileLoading(["codeList"]),
  withState('filterType', 'setFilterType', null),
)
