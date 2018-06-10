import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { withHandlers, pure,withState, withStateHandlers } from 'recompose'
import { withRouter ,spinnerWhileLoading} from 'utils/components'

export default compose(
  connect(({ firebase: { auth  : {uid} } }) => ({uid})),
  withRouter,
  firestoreConnect(({ uid }) => [
    {
      collection: 'Transactions',
      where: [['createdBy.uid', '==', uid],['type','==','investment']],
      orderBy: [['createdAt', 'desc']],
      storeAs: 'transactionInvest'
    }
  ]),
  connect(({ firestore: { ordered }}) => ({
    myInvests: ordered.transactionInvest
  })),
  spinnerWhileLoading(['myInvests']),
  // create listener for transactions, results go into redux
  withState('filterType', 'setFilterType', null), 
  pure
)   
