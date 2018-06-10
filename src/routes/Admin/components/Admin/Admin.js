import React from "react";
import PropTypes from "prop-types";
import classes from "./Admin.scss";

export const Admin = ({ admin, children }) => (
  <div className={classes.container}>
    {children ? cloneElement(children, { auth }) : <span>Admin Hme</span>}
  </div>
);

Admin.propTypes = {
  admin: PropTypes.object // from enhancer (firestoreConnect + connect)
};

export default Admin;
