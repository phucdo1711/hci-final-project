import { compose } from 'redux'
import { connect } from 'react-redux'
import { withFirestore } from 'react-redux-firebase'
import { withState, withHandlers } from 'recompose'
import { withRouter } from 'utils/components'

export default compose(
  connect(({ firebase: { profile, auth } }) => ({
    profile,
    auth: auth
  })), 
  withRouter,
  withFirestore, 
  withState('isEdit', 'setIsEdit', true),
  withState('phone', 'setPhone', ({phone}) => phone || ''),
  withState('country', 'setCountry', ({country}) => country || ''),
  withState('fullAddress', 'setFullAddress', ({fullAddress}) => fullAddress || ''),  
  withHandlers({
    save: ({phone, country, fullAddress, firestore, auth, setIsEdit, firebase}) => () => {
      firestore.update(`Account/${auth.uid}`, {
        Phone: phone || null, 
        Country: country || null , 
        FullAddress : fullAddress || null
      }) 
      firebase.updateProfile({
        phoneNumber: phone
      }).then(function() {
        console.log('update phone thành công')
        // Update successful.
      }).catch(function(error) {
        console.log(error)
      });
      setIsEdit(true)
    } 
  })
)
