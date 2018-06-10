import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { withState, withHandlers, pure } from "recompose";

export default compose(
  withState("anchorEl", "setAnchorEl", null),
  withState("color", "setColor", { r: 245, g: 166, b: 35, a: 1 }),

  // pure

  // create listener for invest, results go into redux
  // firestoreConnect([{ collection: 'invest' }]),
  // // map redux state to props
  // connect(({ firebase: { data } }) => ({
  //   invest: data.invest
  // }))
);
