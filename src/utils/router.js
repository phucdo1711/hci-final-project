import { get } from 'lodash'
import { UserAuthWrapper } from 'redux-auth-wrapper'
import { browserHistory } from 'react-router'
import { LIST_PATH } from 'constants'
import LoadingSpinner from 'components/LoadingSpinner'

const AUTHED_REDIRECT = 'AUTHED_REDIRECT'
const UNAUTHED_REDIRECT = 'UNAUTHED_REDIRECT'

/**
 * @description Higher Order Component that redirects to `/login` instead
 * rendering if user is not authenticated (default of redux-auth-wrapper).
 * @param {Component} componentToWrap - Component to wrap
 * @return {Component} wrappedComponent
 */
export const UserIsAdmin = UserAuthWrapper({
  // eslint-disable-line new-cap
  // redirectPath: '/',
  allowRedirectBack: false,
  failureRedirectPath: (state, props) =>
    // redirect to page user was on or to list path
    props.location.query.redirect || LIST_PATH,
  wrapperDisplayName: 'UserIsAdmin',
  LoadingComponent: LoadingSpinner,
  authSelector: ({ firebase: { profile, auth } }) => ({ auth, profile }),
  authenticatingSelector: ({ firebase: { auth, isInitializing, profile } }) =>
    !auth.isLoaded || !profile.isLoaded || isInitializing,
  predicate: auth => get(auth, `profile.role`) === 'Admin',
  redirectAction: newLoc => dispatch => {
    browserHistory.replace('/home')
    dispatch({
      type: UNAUTHED_REDIRECT,
      payload: { message: 'User is not Admin.' }
    })
  }
})

/**
 * @description Higher Order Component that redirects to `/login` instead
 * rendering if user is not authenticated (default of redux-auth-wrapper).
 * @param {Component} componentToWrap - Component to wrap
 * @return {Component} wrappedComponent
 */
export const UserIsAuthenticated = UserAuthWrapper({
  // eslint-disable-line new-cap
  wrapperDisplayName: 'UserIsAuthenticated',
  LoadingComponent: LoadingSpinner,
  authSelector: ({ firebase: { auth } }) => auth,
  authenticatingSelector: ({ firebase: { auth, isInitializing } }) => {
    !auth.isLoaded || isInitializing
  },
  predicate: auth => !auth.isEmpty,
  redirectAction: newLoc => dispatch => {
    browserHistory.replace(newLoc)
    dispatch({
      type: UNAUTHED_REDIRECT,
      payload: { message: 'User is not authenticated.' }
    })
  }
})

export const UserIsActived = UserAuthWrapper({
  // eslint-disable-line new-cap
  wrapperDisplayName: 'UserIsActived',
  LoadingComponent: LoadingSpinner,
  authSelector: ({ firebase: { profile, auth } }) => ({ auth, profile }),
  authenticatingSelector: ({ firebase: { auth, isInitializing, profile } }) =>
    !auth.isLoaded || !profile.isLoaded || isInitializing,
  predicate: auth => get(auth, `profile.refId`),
  redirectAction: newLoc => dispatch => {
    browserHistory.replace('/ref')
    dispatch({
      type: UNAUTHED_REDIRECT,
      payload: { message: 'User is Actived.' }
    })
  }
})
export const UserIsNotActived = UserAuthWrapper({
  // eslint-disable-line new-cap
  wrapperDisplayName: 'UserIsNotActived',
  LoadingComponent: LoadingSpinner,
  authSelector: ({ firebase: { profile, auth } }) => ({ auth, profile }),
  authenticatingSelector: ({ firebase: { auth, isInitializing, profile } }) =>
    !auth.isLoaded || !profile.isLoaded || isInitializing,
  predicate: auth => !get(auth, `profile.refId`),
  redirectAction: newLoc => dispatch => {
    browserHistory.replace('/dashboard')
    dispatch({
      type: UNAUTHED_REDIRECT,
      payload: { message: 'User is not Actived.' }
    })
  }
})

/**
 * @description Higher Order Component that redirects to listings page or most
 * recent route instead rendering if user is not authenticated. This is useful
 * routes that should not be displayed if a user is logged in, such as the
 * login route.
 * @param {Component} componentToWrap - Component to wrap
 * @return {Component} wrappedComponent
 */
export const UserIsNotAuthenticated = UserAuthWrapper({
  // eslint-disable-line new-cap
  wrapperDisplayName: 'UserIsNotAuthenticated',
  allowRedirectBack: false,
  LoadingComponent: LoadingSpinner,
  failureRedirectPath: (state, props) =>
    // redirect to page user was on or to list path
    props.location.query.redirect || LIST_PATH,
  authSelector: ({ firebase: { auth } }) => auth,
  authenticatingSelector: ({ firebase: { auth, isInitializing } }) =>
    !auth.isLoaded || isInitializing,
  predicate: auth => auth === null,
  predicate: auth => auth.isEmpty,
  redirectAction: newLoc => dispatch => {
    browserHistory.replace(newLoc)
    dispatch({ type: AUTHED_REDIRECT })
  }
})

// visible
export const VisibleOnlyAdmin = UserAuthWrapper({
  authSelector: ({ firebase: { profile, auth } }) => ({ auth, profile }),
  wrapperDisplayName: 'VisibleOnlyAdmin',
  predicate: auth => get(auth, `profile.role`) === 'Admin',
  FailureComponent: null
})

export default {
  UserIsAuthenticated,
  UserIsNotAuthenticated,
  UserIsActived,
  UserIsAdmin,
  UserIsNotActived,
  VisibleOnlyAdmin
}
