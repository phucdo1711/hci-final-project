/* eslint-disable no-console */
import PropTypes from 'prop-types'
import { pick, some } from 'lodash'
import LoadingSpinner from 'components/LoadingSpinner'
import { isLoaded } from 'react-redux-firebase'
import {
  compose,
  withContext,
  getContext,
  mapProps,
  branch,
  renderComponent, 
  withProps
} from 'recompose'

/**
 * Show a loading spinner when a condition is truthy. Used within
 * spinnerWhileLoading. Accepts a test function and a higher-order component.
 * @param  {Function} condition - Condition function for when to show spinner
 * @return {HigherOrderComponent}
 */
export const spinnerWhile = condition =>
  branch(condition, renderComponent(LoadingSpinner))

/**
 * Show a loading spinner while props are loading . Checks
 * for undefined, null, or a value (as well as handling `auth.isLoaded` and
 * `profile.isLoaded`). **NOTE:** Meant to be used with props which are passed
 * as props from state.firebase using connect (from react-redux), which means
 * it could have unexpected results for other props
 * @example Spinner While Data Loading
 * import { compose } from 'redux'
 * import { connect } from 'react-redux'
 * import { firebaseConnect } from 'react-redux-firebase'
 *
 * const enhance = compose(
 *   firebaseConnect(['projects']),
 *   connect(({ firebase: { data: { projects } } })),
 *   spinnerWhileLoading(['projects'])
 * )
 *
 * export default enhance(SomeComponent)
 * @param  {Array} propNames - List of prop names to check loading for
 * @return {HigherOrderComponent}
 */
export const spinnerWhileLoading = propNames =>
  spinnerWhile(props => some(propNames, name => !isLoaded(props[name])))

/**
 * HOC that logs props using console.log. Accepts an array list of prop names
 * to log, if none provided all props are logged. **NOTE:** Only props at
 * available to the HOC will be logged.
 * @example Log Single Prop
 * import { compose } from 'redux'
 * import { connect } from 'react-redux'
 * import { firebaseConnect } from 'react-redux-firebase'
 *
 * const enhance = compose(
 *   withProps(() => ({ projectName: 'test' })),
 *   logProps(['projectName']) // 'test' would be logged to console when SomeComponent is rendered
 * )
 *
 * export default enhance(SomeComponent)
 * @param  {Array} propNames - List of prop names to log. If none provided, all
 * are logged
 * @return {HigherOrderComponent}
 */
export const logProps = (propNames, logName = '') =>
  mapProps(ownerProps => {
    console.log(
      `${logName} props:`,
      propNames ? pick(ownerProps, propNames) : ownerProps
    )
    return ownerProps
  })

/**
 * HOC that adds store to props
 * @return {HigherOrderComponent}
 */
export const withStore = compose(
  withContext({ store: PropTypes.object }, () => {}),
  getContext({ store: PropTypes.object })
)

/**
 * HOC that adds router to props
 * @return {HigherOrderComponent}
 */
export const withRouter = compose(
  withContext({ router: PropTypes.object }, () => {}),
  getContext({ router: PropTypes.object })
)

export const withTitle = compose(
  withContext({ title: PropTypes.string }, () => {}),
  getContext({ tilte: PropTypes.string })
)

export const withTabRouter = compose(
  withRouter,
  withProps(({router: { location: { query: { tab } }} }) => ({
    tab: tab ? Number(tab) : 0
  })),
)