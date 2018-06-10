import React from 'react'
import PropTypes from 'prop-types'
import classes from './Referrals.scss'
import ContainerHeader from 'components/ContainerHeader'

// Material UI
import AppBar from 'material-ui/AppBar'
import Tabs, { Tab } from 'material-ui/Tabs'
import Typography from 'material-ui/Typography'
import { Paper, Card, Badge , Grid} from 'material-ui'

import Share from '../Share'
import InfoCard from '../InfoCard'
import ReferralList from '../ReferralList'
import CodeList from '../CodeList'

import TabAppBar from 'components/TabAppBar'

export const Referrals = ({ tab, router, location }) => (
  <div className={classes.container}>
    <ContainerHeader title={'Referrals'} />
    <div className={classes.bodyContainer}>
      <Grid container spacing={16}>
        <Grid item md={5} sm={12} xs={12}>
          <InfoCard />
        </Grid>
        <Grid item md={7} sm={12} xs={12}>
          <Share />
        </Grid>
      </Grid>
        <TabAppBar 
          path='referrals'
          tabs={[
            {label: "Hoạt động", content:(<ReferralList />) },
            {label:"Đã giới thiệu", content: (<CodeList />) }
          ]}
        />
    </div>
  </div>
)

Referrals.propTypes = {
  referrals: PropTypes.object // from enhancer (firestoreConnect + connect)
}

export default Referrals
