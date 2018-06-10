import { compose } from 'redux'
import { connect } from 'react-redux'
// import { firestoreConnect } from 'react-redux-firebase'
import { withState, withHandlers } from 'recompose'

export default compose(
  // create listener for referrallist, results go into redux
  withState('filterType', 'setFilterType', null),
)
