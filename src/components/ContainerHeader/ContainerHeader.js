import React from 'react'
import PropTypes from 'prop-types'
import classes from './ContainerHeader.scss'

// material conponent
import Typography from 'material-ui/Typography'

export const ContainerHeader = ({ title }) => (
  <Typography type="display1" gutterBottom>
    {title}
  </Typography>
)

ContainerHeader.propTypes = {
  containerheader: PropTypes.object // from enhancer (firestoreConnect + connect)
}

export default ContainerHeader
