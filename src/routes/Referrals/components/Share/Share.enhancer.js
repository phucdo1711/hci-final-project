import { compose } from 'redux'
import { connect } from 'react-redux'
import { withFirestore } from 'react-redux-firebase'
import generate from 'nanoid/generate'
import { withHandlers, withStateHandlers, withState } from 'recompose';
import {  spinnerWhileLoading } from 'utils/components'

export default compose(
  // create listener for share, results go into redux
  
  // map redux state to props
  connect(({ firebase: { profile:{ref} } }) => ({ code: ref})),
  spinnerWhileLoading(['code']),

  withState('isPendingCreateCode', 'setIsPendingCreateCode', false),  
  withHandlers({
    // createCode: ({setCode, setIsPendingCreateCode, firestore, uid}) => () => {
    //   setIsPendingCreateCode(true);
    //   var code = generate('AQWERTYUIOPASDFGHJKLZXCVBNM1234567890', 8);
    //   setCode(code);
    //   firestore.set(`Referrals/${code}`,{
    //     createTime: new Date(),
    //     creater: uid,
    //     status: 'unused',
    //     usedBy:  null
    //   }).then(() => {
    //     setIsPendingCreateCode(false);
    //   })
    // }
  })

)
