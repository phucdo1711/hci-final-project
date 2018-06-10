import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect, withFirestore } from "react-redux-firebase";
import { withState, withHandlers } from "recompose";

export default compose(
  withState("anchorEl", "setAnchorEl", null),
  // withFirestore,
  // create listener for invest, results go into redux
  // firestoreConnect([{ collection: 'invest' }]),
  // // map redux state to props
  // connect(({ firebase: { data } }) => ({
  //   invest: data.invest
  // }))
);
