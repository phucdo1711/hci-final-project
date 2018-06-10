import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect, getVal , withFirestore} from 'react-redux-firebase'
import { withState,withHandlers, pure} from 'recompose'
import { withNotifications } from 'modules/notification'

export default compose(
    withFirestore,
    withNotifications,
    connect(({ firebase: { auth: { uid ,email}, profile :{phoneNumber} } }) => ({ uid,email,phoneNumber })),
    firestoreConnect(({ uid }) =>[{ collection: 'Wallets', doc: uid }]),
    connect(({ firestore : {data}}, {uid}) => ({
      avaiBalance: getVal(data, `Wallets/${uid}/available`)
    })),
    withState('amountInvest', 'setAmountInvest', ({invest}) => invest.minInvest),
    withState('isError', 'setIsError', false), 
    withState('activeStep', 'setActiveStep', 0),    
    withHandlers({
        continueBtn: ({
            activeStep, 
            setActiveStep, 
            uid, email,phoneNumber,
            firestore, 
            isError, 
            showError,
            showSuccess, 
            invest,
            amountInvest,
            avaiBalance,
        }) => () => {
            if(activeStep === 2) {
                if(isError){
                    return showError('Có lỗi xảy ra, vui lòng thử lại') 
                }
                firestore.add(
                    { collection: 'Transactions' },
                    {
                      type: 'investment',
                      createdBy: {uid, email, phoneNumber},
                      createdAt: firestore.FieldValue.serverTimestamp(),
                      investPackage: invest,
                      amount : Number(amountInvest),
                      status: 'pending',
                      balanceBefore: Number(avaiBalance),
                      balanceAfter: Number(avaiBalance - amountInvest),
                    }
                ).then(() => {
                    showSuccess('Tạo giao dịch mới thành công!')
                }).catch(err => {
                    console.error('Lỗi:', err) 
                    showError(err.message || 'Không thể tạo giao dịch mới')
                    return Promise.reject(err)
                })
            }
            setActiveStep(activeStep + 1)      
        },
    }),
    pure
)