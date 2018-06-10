import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect, getVal } from 'react-redux-firebase'
import { BANK_COLLECTION } from 'constants'

export default compose(
  // create listener for stepdeposit, results go into redux
  connect(({ firestore: { data } }, { methodId }) => ({
    bank: getVal(data, `${BANK_COLLECTION}/${methodId}`)
  }))
)
