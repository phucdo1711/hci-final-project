import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect, getVal } from 'react-redux-firebase'
import { spinnerWhileLoading } from 'utils/components'

export default compose(
  connect(({ firebase: { auth: { uid } } }) => ({ uid })),
  firestoreConnect(({ uid }) =>[{ collection: 'Wallets', doc: uid },{
    collection: 'Transactions',
    where: [['createdBy.uid', '==', uid],['type','==','investment']],
    orderBy: [['createdAt', 'desc']],
    storeAs: 'transactionInvest'
  }]),

  // map redux state to props
  connect(({ firestore: { data , ordered} }, {uid}) => ({
    balance: getVal(data, `Wallets/${uid}/available`),
    totalInvest: ordered.transactionInvest &&ordered.transactionInvest.length,
  })),
  spinnerWhileLoading(['balance', 'totalInvest']),
  connect(({ firestore: { ordered} }) => ({
    activeInvest: ordered.transactionInvest.filter(tran => tran.status === 'active').length
  })),
)
