import React from 'react'
import PropTypes from 'prop-types'
import classes from './Dashboard.scss'
import Typography from 'material-ui/Typography'
import ContainerHeader from 'components/ContainerHeader'
import Overview from '../Overview'
import Paper from 'material-ui/Paper'
import Lock from 'material-ui-icons/Lock'
import Grid from 'material-ui/Grid'
import KeyboardArrowRight from 'material-ui-icons/KeyboardArrowRight'
import ActivityList from '../ActivityList'
import { Link } from 'react-router'

export const Dashboard = ({ dashboard}) => (
  <div>
    <ContainerHeader title={'Dashboard'} />
    <Overview />
    <Grid xl={9}>
      <Paper
        className={classes.alertPaper}
        component={Link}
        to="profiles?tab=1">
        <div className={classes.alertLeft}>
          <Lock className={classes.iconLock} />
          <div>
            <Typography type="title" className={classes.alertTitle}>
              Set up 2-Step Verification{' '}
            </Typography>
            <Typography>
              Used for Withdrawals and security modification
            </Typography>
          </div>
        </div>
        <KeyboardArrowRight className={classes.iconArrow} />
      </Paper>
    </Grid>
    <Grid xl={9}>
      <ActivityList />
    </Grid>
  </div>
)

Dashboard.propTypes = {
  dashboard: PropTypes.object // from enhancer (firestoreConnect + connect)
}

export default Dashboard
