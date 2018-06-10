import React from 'react'
import PropTypes from 'prop-types'
import classes from './InvestAdd.scss'
import Typography from 'material-ui/Typography'

export const InvestAdd = ({ investadd }) => (
  <div>
    <Typography type="display1" gutterBottom>
      Add Invest Package
    </Typography>
    <span>InvestAdd Component</span>
    <pre>{JSON.stringify(investadd, null, 2)}</pre>
  </div>
)

InvestAdd.propTypes = {
  investadd: PropTypes.object // from enhancer (firestoreConnect + connect)
}

export default InvestAdd
