import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { withTabRouter} from 'utils/components'

export default compose(
  withTabRouter
)
