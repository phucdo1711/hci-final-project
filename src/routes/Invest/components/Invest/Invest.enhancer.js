import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { withHandlers, pure } from 'recompose'
import withSizes from 'react-sizes'
import { INVEST_COLLECTION } from 'constants'

export default compose(
  // withFirestore,
  withSizes(({ width }) => ({ screenWidth: width })),
  // create listener for invest, results go into redux
  firestoreConnect([
    {
      collection: INVEST_COLLECTION,
      where: ['status', '==', 'active'],
      orderBy: [['order'], ['styles.pin', 'desc']]
    }
  ]),
  // map redux state to props
  connect(({ firestore: { ordered } }) => ({
    Invest: ordered.Investments
  })),
  withHandlers({
    goToNewInvest: ({ router }) => investId => {
      router.push(`invest/new/${investId}`)
    }
  }),
  pure
)
