import { compose } from 'redux'
import { connect } from 'react-redux'
import { withFirestore, getVal } from 'react-redux-firebase'
import { withHandlers, withState } from 'recompose'
import { withNotifications } from 'modules/notification'
import generate from 'nanoid/generate'

export default compose(
  withFirestore,
  withNotifications,
  connect(({ firebase: { auth: { uid ,email}, profile :{phoneNumber} } }) => ({ uid,email,phoneNumber })),
  withState('activeStep', 'setActiveStep', 0),
  withState('bankAcc', 'setBankAcc', ''),
  withState('amount', 'setAmount', 0),
  withState('selectedMethod', 'setSelectedMethod', 'VIETCOMBANK'),
  withState('transactionId', 'setTransactionId', null),      
  withHandlers({
    handleChangeMethod: ({ setSelectedMethod }) => event => {
      setSelectedMethod(event.target.value)
    },
    continueBtn: ({
      activeStep, 
      setActiveStep, 
      firestore, 
      uid, email,phoneNumber,
      amount,bankAcc,
      showSuccess,showError,
      selectedMethod,
      setTransactionId
    }) => () => {
      if(activeStep === 1) {
          firestore.add(
              { collection: 'Transactions' },
              {
                type: 'deposit',
                createdBy: {uid, email, phoneNumber},
                createdAt: firestore.FieldValue.serverTimestamp(),
                amount : Number(amount),
                status: 'pending',
                bank: {
                  bankAcccount: bankAcc,
                  bank: selectedMethod
                },
                code : generate('AQWERTYUIOPASDFGHJKLZXCVBNM1234567890', 8)
              }
          ).then((docRef) => {
              showSuccess('Tạo giao dịch mới thành công!')
              setTransactionId(docRef.id)
              setActiveStep(activeStep + 1)               
          }).catch(err => {
              console.error('Lỗi:', err) 
              showError(err.message || 'Không thể tạo giao dịch mới')
              return Promise.reject(err)
          })
      }else {
        setActiveStep(activeStep + 1)      
      }
    },
  })
)
