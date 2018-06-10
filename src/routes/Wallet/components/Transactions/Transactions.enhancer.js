import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { WALLET_PATH } from 'constants'
import { withHandlers, pure, withState } from 'recompose'
import { withRouter ,spinnerWhileLoading} from 'utils/components'

export default compose(
  // Add props.router
  withRouter,
  withState('tab', 'setTab', 0),
  connect(({ firebase: { auth  : {uid} } }) => ({uid})),
  firestoreConnect(({ uid }) => [
    {
      collection: 'Transactions',
      where: ['createdBy.uid', '==', uid],
      orderBy: [['createdAt', 'desc']]
    }
  ]),
  connect(({ firestore: { ordered }}) => ({
    transactions: ordered.Transactions
  })),
  spinnerWhileLoading(['transactions']),
  withHandlers({
    goToType: ({ router }) => type => {
      router.push(`${WALLET_PATH}?type=${type}`)
    },
    goToTransactionDetail: ({router}) => id => {
      router.push(`transaction/${id}`)
    }
  }),
  pure
)
