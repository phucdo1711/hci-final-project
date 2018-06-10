import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect, getVal } from 'react-redux-firebase'
import { withRouter } from 'utils/components'
import { UserIsAuthenticated } from 'utils/router'
import { INVEST_COLLECTION } from 'constants'
import { spinnerWhileLoading } from 'utils/components'
import { withHandlers, withState } from 'recompose'

export default compose(
  UserIsAuthenticated,
  // create listener for newinvest, results go into redux
  // firestoreConnect(({ params }) =>[{
  //   collection:  INVEST_COLLECTION,
  //   doc: params.investId
  // }]),
  // map redux state to props
  connect(({ firestore: { data } }, { params }) => ({
    invest: getVal(data, `${INVEST_COLLECTION}/${params.investId}`)
  })),
  spinnerWhileLoading(['invest']),
  withState('isContinue', 'setIsContinue', false),
  withHandlers({
    continueInvest: ({ setIsContinue, isContinue }) => () => {
      setIsContinue(!isContinue)
    }
  })
)
