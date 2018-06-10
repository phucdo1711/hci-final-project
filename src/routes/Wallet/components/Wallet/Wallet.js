import React, { cloneElement } from 'react'
import PropTypes from 'prop-types'
import classes from './Wallet.scss'
import ContainerHeader from 'components/ContainerHeader'
import DocumentTitle from 'react-document-title'
import Vi from '../Vi'
import Transactions from '../Transactions'

export const Wallet = ({ wallet, children, auth, goToDepsit, goToWithdraw }) =>
  children ? (
    cloneElement(children, { auth })
  ) : (
    <div className={classes.container}>
      <DocumentTitle title={'Wallet'} />
      <ContainerHeader title={'Wallet'} />
      <Vi wallet={wallet} goToDepsit={goToDepsit} goToWithdraw={goToWithdraw} />
      <Transactions />
    </div>
  )

Wallet.propTypes = {
  wallet: PropTypes.object // from enhancer (firestoreConnect + connect)
}

export default Wallet
