import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect, push } from 'react-redux-firebase'
import { withHandlers, pure } from 'recompose'

export default compose(
  connect(({ firebase: { auth: { uid } } }) => ({ uid })),
  firestoreConnect(({ uid }) => [
    {
      collection: 'Account',
      doc: uid
    }
  ]),
  connect(({ firestore: { data } }, { uid }) => ({
    account: data.Account && data.Account[uid]
  })),
  withHandlers({
    changeValue: ({ firestore, uid }) => (item, v) => {
      console.log(firestore)

      return firestore.set(
        `Account/${uid}`,
        {
          Security: {
            [item]: !v
          }
        },
        { merge: true }
      )
    }
  })
)
