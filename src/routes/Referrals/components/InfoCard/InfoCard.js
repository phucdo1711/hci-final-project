import React from 'react'
import PropTypes from 'prop-types'
import classes from './InfoCard.scss'

import { Card, Typography } from 'material-ui'

export const InfoCard = ({}) => (
  <Card className={classes.card}>
    <div className={classes.bodyContainer}>
      <div className={classes.leftCard}>
        <Typography type="subheading" className={classes.text}>
          Total Earn
        </Typography>
        <Typography type="title" className={classes.textlarge}>
          100,000,000 đ
        </Typography>
      </div>
      <div className={classes.rightCard}>
        <Typography type="subheading" className={classes.text}>
          Referrals
        </Typography>
        <Typography type="title" className={classes.textlarge}>
          14 persons
        </Typography>
      </div>
    </div>
    <div>
      <Typography type="body1" align="center" className={classes.text}>
        Pending: 90,000,000 đ | Next payout : 29/02/2018
      </Typography>
      {/* <Typography type='body1' className={classes.text}>Next payout : 29/02/2018</Typography> */}
    </div>
  </Card>
)

InfoCard.propTypes = {}

export default InfoCard
