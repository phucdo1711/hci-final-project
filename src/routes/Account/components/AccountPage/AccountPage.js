import React from 'react'
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper'
import AccountForm from '../AccountForm'
import defaultUserImageUrl from 'static/User.png'
import classes from './AccountPage.scss'
import ContentLoader from 'react-content-loader'

export const AccountPage = ({
  avatarUrl,
  updateAccount,
  profile,
  isUpdate
}) => (
  <div className={classes.container}>
    {!isUpdate ? (
      <Paper className={classes.pane}>
        <div className={classes.loader}>
          <ContentLoader type="code" />
        </div>
      </Paper>
    ) : (
      <Paper className={classes.pane}>
        <div className={classes.settings}>
          <div className={classes.avatar}>
            <img
              className={classes.avatarCurrent}
              src={avatarUrl || defaultUserImageUrl}
            />
          </div>
          <div className={classes.meta}>
            <AccountForm
              onSubmit={updateAccount}
              account={profile}
              initialValues={profile}
            />
          </div>
        </div>
      </Paper>
    )}
  </div>
)

AccountPage.propTypes = {
  avatarUrl: PropTypes.string,
  profile: PropTypes.object,
  updateAccount: PropTypes.func
}

export default AccountPage
