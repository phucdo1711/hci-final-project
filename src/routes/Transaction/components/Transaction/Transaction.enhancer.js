import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect, getVal , withFirestore} from 'react-redux-firebase'
import { TRANSACTION_COLLECTION } from 'constants'
import { spinnerWhileLoading } from 'utils/components'

export default compose(
  // create listener for transaction, results go into redux
  // firestoreConnect([{ collection: 'Transactions' }]),
  firestoreConnect(({ params }) => [
    {
      collection: 'Transactions',
      doc: params.id
    }
  ]),
  // map redux state to props
  connect(({ firestore: { data } }, { params }) => ({
    transaction: getVal(data, `${TRANSACTION_COLLECTION}/${params.id}`)
  })),
  spinnerWhileLoading(['transaction']),

)
