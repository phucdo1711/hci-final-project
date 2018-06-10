import React from 'react'
import PropTypes from 'prop-types'
import classes from './InvestDetail.scss'
import Typography from 'material-ui/Typography'

export const InvestDetail = ({ investdetail }) => (
  <div>
    <Typography type="display1" gutterBottom>
      Invest Detail
    </Typography>
    <span>InvestDetail Component</span>
    <pre>{JSON.stringify(investdetail, null, 2)}</pre>
  </div>
)

InvestDetail.propTypes = {
  investdetail: PropTypes.object // from enhancer (firestoreConnect + connect)
}

export default InvestDetail
