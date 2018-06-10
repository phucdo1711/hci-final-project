import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { withState, withHandlers } from 'recompose'
import { BANK_COLLECTION } from 'constants'
import {  spinnerWhileLoading } from 'utils/components'

export default compose(
  // create listener for deposit, results go into redux
  firestoreConnect([{ collection: BANK_COLLECTION, orderBy: [['isActive', 'desc']] }]),
  // map redux state to props
  connect(({ firestore: { ordered } }) => ({
    banks: ordered.Banks
  })),
  spinnerWhileLoading(['banks']),
  // withState("selectedMethod", "setSelectedMethod", 'NlpbD1AElk5b1JwSBd87'),
  // withHandlers({
  //   handleChangeMethod: ({setSelectedMethod}) => event => {
  //     setSelectedMethod(event.target.value)
  //   }
  // })
)
