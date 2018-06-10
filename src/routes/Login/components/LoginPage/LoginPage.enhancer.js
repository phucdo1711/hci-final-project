import { withHandlers, pure, compose } from 'recompose'
import { firebaseConnect } from 'react-redux-firebase'
import { withNotifications } from 'modules/notification'
import { UserIsNotAuthenticated } from 'utils/router'
import { withRouter } from 'utils/components'
import { SIGNUP_PATH } from 'constants'

export default compose(
  UserIsNotAuthenticated, // redirect to /projects if user is already authed
  withNotifications, // add props.showError
  withRouter,
  firebaseConnect(), // add props.firebase
  // Handlers as props
  withHandlers({
    onSubmitFail: props => (formErrs, dispatch, err) =>
      props.showError(formErrs ? 'Form Invalid' : err.message || 'Error'),
    googleLogin: ({ firebase, showError, router }) => event =>
      firebase
        .login({ provider: 'google', type: 'popup' })
        .catch(err => showError(err.message)),
    emailLogin: ({ firebase, router, showError }) => creds =>
      firebase.login(creds).catch(err => showError(err.message)),
    gotoRegister: props => () => {
      props.router.push(SIGNUP_PATH)
    }
  }),
  pure // shallow equals comparison on props (prevent unessesary re-renders)
)
