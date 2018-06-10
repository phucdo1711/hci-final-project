import React from 'react'
import PropTypes from 'prop-types'
import classes from './Profile.scss'

// Material UI
import {  Badge } from 'material-ui'

// components
import ContainerHeader from 'components/ContainerHeader'
import TabInfo from '../TabInfo'
import TabSecurity from '../TabSecurity'
import TabVerification from '../TabVerification'
import TabAppBar from 'components/TabAppBar'

export const Profile = ({ account }) => {
  return (
    <div className={classes.container}>
      <ContainerHeader title={'Profiles'} />
      <div className={classes.bodyContainer}> 
      <TabAppBar 
          path='profiles'
          tabs={[
            {
              label: "Information", 
              content:(<TabInfo info={account} phone={account.Phone} country={account.Country} fullAddress={account.FullAddress}  />) 
            },
            {
              label:<Badge className={classes.badge} badgeContent={4} color="primary">
                      Security
                    </Badge>, 
              content: (<TabSecurity sercurity={account.Security} />) },
            {
              label:'Verification', 
              content: (<TabVerification verify={account.Verifycation} />) 
            },            
          ]}
        />
      </div>
    </div>
  )
}

Profile.propTypes = {
   account: PropTypes.object
}

export default Profile
