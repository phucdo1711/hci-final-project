import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect, getVal } from 'react-redux-firebase'
import { withState, pure} from 'recompose'

export default compose(
    connect(({ firebase: { auth: { uid } } }) => ({ uid })),
    firestoreConnect(({ uid }) =>[{ collection: 'Wallets', doc: uid }]),
    connect(({ firestore : {data}}, {uid}) => ({
      avaiBalance: getVal(data, `Wallets/${uid}/available`)
    })),
    pure
)