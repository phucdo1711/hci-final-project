import { compose } from "redux";
import { connect } from "react-redux";
import {
  firestoreConnect,
  withFirestore,
  withFirebase
} from "react-redux-firebase";
import { withHandlers, withStateHandlers } from "recompose";
import { UserIsAuthenticated, UserIsNotActived } from "utils/router";
import generate from 'nanoid/generate'

export default compose(
  UserIsAuthenticated,
  UserIsNotActived,
  withFirestore,
  withFirebase,
  connect(({ firebase: { auth } }) => ({ auth })),
  withStateHandlers(
    ({ initialCode = localStorage.getItem("refId") || "" }) => ({
      code: initialCode
    }),
    {
      handleChange: ({ code }) => event => ({
        code: event.target.value
      })
    }
  ),
  withHandlers({
    handleSubmit: ({ code, firestore, auth: { uid, email } }) => async () => {
      console.log(code);
      const data = await firestore.get({ collection: "users", where: ["ref", "==", code] })
      if (data.docs.length === 1) {
        await firestore.update(`users/${uid}`, {refId: code, ref: generate('AQWERTYUIPASDFGHJKLZXCVBNM1234567890', 6)})
        await localStorage.clear('refId')
      }
      else {
        alert('Mã giới thiệu không khả dụng')
      }
    },
    handleLogout: props => () => {
      props.firebase.logout();
      props.router.push("/login");
    }
  })
);
