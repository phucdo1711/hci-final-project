import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect, getVal } from 'react-redux-firebase'
import { spinnerWhileLoading } from 'utils/components'
import { withState, withHandlers, pure, lifecycle } from "recompose";

export default compose(
  withState("anchorEl", "setAnchorEl", null),
  withState("color", "setColor", null),

  // create listener for editinvest, results go into redux
  firestoreConnect(({ params }) => [
    {
      collection: 'Investments',
      doc: params.investId
      // path: `projects/${params.projectname}`
    }
  ]),
  connect(({ firestore: { data } }, { params }) => ({
    invest: getVal(data, `Investments/${params.investId}`)

  })),
  spinnerWhileLoading(['invest']),
  lifecycle({
    componentWillMount() {
      const {invest} = this.props;
      console.log(invest);
      setColor(JSON.parse(invest.styles.color))
    }
    
  })

)
