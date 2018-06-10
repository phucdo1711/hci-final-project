import React from 'react'
import PropTypes from 'prop-types'
import classes from './NewInvest.scss'
import ContainerHeader from 'components/ContainerHeader'
import InvestDetail from '../InvestDetail'
import InvestStep from '../InvestStep'

export const NewInvest = ({ invest, isContinue, continueInvest, params }) => {
  invest.id = params.investId;
  return (
    <div className={classes.container}>
      <ContainerHeader title={'Investments: ' + invest.name} />
      {!isContinue ? (
        <InvestDetail invest={invest} continueInvest={continueInvest} />
      ) : (
        <InvestStep invest={invest} />
      )}
    </div>
  )
}

NewInvest.propTypes = {
  invest: PropTypes.object.isRequired,
  isContinue: PropTypes.bool.isRequired,
  continueInvest: PropTypes.func.isRequired
}

export default NewInvest
