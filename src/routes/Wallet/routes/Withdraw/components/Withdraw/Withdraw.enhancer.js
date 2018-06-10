import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect, getVal } from 'react-redux-firebase'
import {withState , withHandlers} from 'recompose'
import {  spinnerWhileLoading, withRouter } from 'utils/components'
import { BANK_COLLECTION } from 'constants'
import { withNotifications } from 'modules/notification'
import generate from 'nanoid/generate'

export default compose(
  // create listener for withdraw, results go into redux
  withState('amount', 'setAmount', 10000000),
  withState('bank', 'setBank', 'VIETCOMBANK'),  
  withState('bankAcc', 'setBankAcc', ''),    
  firestoreConnect([{ collection: BANK_COLLECTION, orderBy: [['isActive', 'desc']] }]),
  // map redux state to props
  connect(({ firestore: { ordered } }) => ({
    banks: ordered.Banks
  })),
  spinnerWhileLoading(['banks']),
  connect(({ firebase: { auth: { uid } } }) => ({ uid })),
  spinnerWhileLoading(["uid"]),
  firestoreConnect(({ uid }) =>[{ collection: 'Wallets', doc: uid }]),

  // map redux state to props
  connect(({ firestore: { data } }, {uid}) => ({
    balance: getVal(data, `Wallets/${uid}/available`)
  })),
  spinnerWhileLoading(['balance']),
  withNotifications,
  withRouter,
  connect(({ firebase: { auth: { uid ,email}, profile :{phoneNumber} } }) => ({ uid,email,phoneNumber })),
  withHandlers({
    withdraw: ({router, amount,bank,bankAcc, firestore, uid, email,phoneNumber, showSuccess,showError}) => () => {
      firestore.add(
        { collection: 'Transactions' },
        {
          type: 'withdraw',
          createdBy: {uid, email, phoneNumber},
          createdAt: firestore.FieldValue.serverTimestamp(),
          amount : Number(amount),
          status: 'pending',
          bank: {
            bankAcccount: bankAcc,
            bank: bank
          },
          code : generate('AQWERTYUIOPASDFGHJKLZXCVBNM1234567890', 8)
        }
    ).then((docRef) => {
        showSuccess('Tạo giao dịch mới thành công!')
        console.log(docRef.id)
        router.push(`/transaction/${docRef.id}`)
    }).catch(err => {
        console.error('Lỗi:', err) 
        showError(err.message || 'Không thể tạo giao dịch mới')
        return Promise.reject(err)
    })
    } 
  })
)
