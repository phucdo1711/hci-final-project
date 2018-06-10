import React from "react";
import PropTypes from "prop-types";
import classes from "./AdminLayout.scss";
import { AppBar, Toolbar, Button, Typography } from "material-ui";

import { Link } from "react-router";

export const AdminLayout = ({ children }) => (
  <div className={classes.root}>
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.flex}>
          <Typography type="title" color="inherit" >
            <Link to={"/admin"}>ADMIN</Link>
          </Typography>
          <Typography type="body2" color="inherit" >
            <Link to={"/admin"}>Dashboard</Link>
            <Link to={"/admin/investments"}>Investments</Link>
          </Typography>
        </div>
        <Button color="inherit">Logout</Button>
      </Toolbar>
    </AppBar>
    <div className={classes.body}>{children}</div>
  </div>
);

AdminLayout.propTypes = {
  children: PropTypes.element.isRequired

  // adminlayout: PropTypes.object // from enhancer (firestoreConnect + connect)
};

export default AdminLayout;
