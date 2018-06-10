import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect, withFirestore } from "react-redux-firebase";
import { UserIsAdmin } from "utils/router";
import { spinnerWhileLoading } from "utils/components";
import { withState, withHandlers, pure } from "recompose";
import { withNotifications } from "modules/notification";

export default compose(
  UserIsAdmin,
  withNotifications,
  withState("selectedInvest", "setSelectedInvest", 0),
  // withFirestore,
  // create listener for ainvestment, results go into redux
  firestoreConnect([{ collection: "Investments" }]),
  // // map redux state to props
  connect(({ firestore: { ordered } }) => ({
    investments: ordered.Investments
  })),
  spinnerWhileLoading(["investments"]),
  withHandlers({
    handleDeleteInvest: props => id => {
      // print the form values to the console
      const { firestore, showError, showSuccess } = props;
      return firestore
        .delete({ collection: "Investments", doc: id })
        .then(() => showSuccess("Invesment deleted successfully"))
        .catch(err => {
          console.error("Error:", err); // eslint-disable-line no-console
          showError(err.message || "Could not delete Investment");
          return Promise.reject(err);
        });
    }
  })
);
