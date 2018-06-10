import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect, getVal, withFirestore } from 'react-redux-firebase'
import { TRANSACTION_COLLECTION } from 'constants'
import {  spinnerWhileLoading } from 'utils/components'

export default compose(
  // create listener for stepinstruction, results go into redux
  firestoreConnect(({transactionId}) => [{ collection: TRANSACTION_COLLECTION , doc: transactionId }]),
  // map redux firestore to props
  connect(({ firestore: { data }}, {transactionId}) => ({
    transaction: getVal(data, `${TRANSACTION_COLLECTION}/${transactionId}`)
  })),
  spinnerWhileLoading(['transaction'])
)
