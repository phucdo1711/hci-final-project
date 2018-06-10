import React from 'react'
import PropTypes from 'prop-types'
import classes from './Dashboard.scss'
import Typography from 'material-ui/Typography'
import ContainerHeader from 'components/ContainerHeader'
export const Dashboard = ({ dashboard, auth }) => {
  // user token
  console.log(auth.stsTokenManager.accessToken)
  console.log(dashboard)

  return (
    <div>
      <ContainerHeader title={'Dashboard'} />
      <span>Dashboard Component</span>
      <pre>{JSON.stringify(dashboard, null, 2)}</pre>
    </div>
  )
}

Dashboard.propTypes = {
  dashboard: PropTypes.object // from enhancer (firestoreConnect + connect)
}

export default Dashboard
