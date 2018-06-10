import { withFirebase } from 'react-redux-firebase'
import { withHandlers, pure, compose } from 'recompose'
import { UserIsNotAuthenticated } from 'utils/router'
import { withNotifications } from 'modules/notification'

export default compose(
  UserIsNotAuthenticated, // redirect to list page if logged in
  withNotifications, // add props.showError
  withFirebase, // add props.firebase (firebaseConnect() can also be used)
  // Handlers
  withHandlers({
    onSubmitFail: props => (formErrs, dispatch, err) =>
      props.showError(formErrs ? 'Form Invalid' : err.message || 'Error'),
    googleLogin: ({ firebase, showError }) => e =>
      firebase
        .login({ provider: 'google', type: 'popup' })
        .catch(err => showError(err.message)),
    emailSignup: ({ firebase, showError }) => async creds => {
      // await localStorage.setItem('ref', "data111121112");
      // await localStorage.getItem('ref');

      return firebase
        .createUser(creds, {
          email: creds.email,
          displayName: creds.displayName
        })
        .catch(err => showError(err.message))
    }
  }),
  pure // shallow equals comparison on props (prevent unessesary re-renders)
)
