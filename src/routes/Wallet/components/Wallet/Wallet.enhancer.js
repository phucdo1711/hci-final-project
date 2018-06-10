import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect, getVal} from 'react-redux-firebase'
import { withHandlers, pure } from 'recompose'
import { WALLET_PATH } from 'constants'
import { withRouter, spinnerWhileLoading, withTabRouter } from 'utils/components'

export default compose(
  connect(({ firebase: { auth: { uid } } }) => ({ uid })),
  spinnerWhileLoading(["uid"]),
  firestoreConnect(({ uid }) =>[{ collection: 'Wallets', doc: uid }]),

  // map redux state to props
  connect(({ firestore: { data } }, {uid}) => ({
    wallet: getVal(data, `Wallets/${uid}`)
  })),
  spinnerWhileLoading(['wallet']),
  withHandlers({
    goToDepsit: ({ router }) => () => {
      router.push(`${WALLET_PATH}/deposit`)
    },
    goToWithdraw: ({ router }) => () => {
      router.push(`${WALLET_PATH}/withdraw`)
    }
  }),
  pure
)
