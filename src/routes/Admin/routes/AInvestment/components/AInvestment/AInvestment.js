import React,  { cloneElement } from "react";
import PropTypes from "prop-types";
import classes from "./AInvestment.scss";
import { isLoaded, isEmpty } from "react-redux-firebase";
import { formatDate } from "utils/method-helper";
import { Link } from 'react-router'

//material ui
import Invest from "../Invest";

import List, { ListItem, ListItemText } from "material-ui/List";

import {
  Typography,
  Grid,
  Paper,
  Checkbox,
  Avatar,
  IconButton
} from "material-ui";
import { Folder, Add } from "material-ui-icons";
import DeleteIcon from "material-ui-icons/Delete";

export const AInvestment = ({ 
  router,
  auth,
  children,
  investments ,
  selectedInvest, 
  setSelectedInvest,
  handleDeleteInvest
}) => {
  // console.log(investments);
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} sm={4}>
        <Paper>
          <div className={classes.pHeader}>
            <div className={classes.headTitle}>Investments List</div>
            <div className={classes.icon}>
              <IconButton component={Link} to="/admin/investments/create" color="primary">
                <Add color="primary"/>
              </IconButton>
            </div>
          </div>
          <div className={classes.investContainer}>
            <List>
              {investments.map((item, key) => {
                  return (
                    <ListItem button key={key} onClick={() => {
                      router.push('/admin/investments')
                      setSelectedInvest(key)
                      }}>
                      <ListItemText
                        primary={item.name}
                        secondary={item.status}
                      />
                      <Typography className={classes.date}>{`${formatDate(
                        item.time.start
                      )} - ${formatDate(item.time.end)}`}</Typography>
                    </ListItem>
                  );
                })}
            </List>
          </div>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={8}>
      {children ? (
        cloneElement(children, { auth })
      ) : (
        <Invest investment={investments[selectedInvest]} handleDeleteInvest={handleDeleteInvest} />
      )}
      </Grid>
    </Grid>
  );
};

AInvestment.propTypes = {
  investments: PropTypes.array, // from enhancer (firestoreConnect + connect)
  selectedInvest: PropTypes.number.isRequired,
};

export default AInvestment;
