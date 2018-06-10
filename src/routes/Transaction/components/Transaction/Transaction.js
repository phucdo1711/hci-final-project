import React from 'react'
import PropTypes from 'prop-types'
import classes from './Transaction.scss'
import InvestedDetail from '../InvestedDetail'

import DepositDetail from '../../../Wallet/routes/Deposit/components/StepInstruction/StepInstruction';
import WithdrawDetail from '../WithdrawDetail'
import ContainerHeader from 'components/ContainerHeader'

export const Transaction = ({ transaction }) => {
    switch (transaction.type) {
      case 'investment':
        return <InvestedDetail invest={transaction}/>
        break;
      case 'deposit':
        return <div className={classes.depositContainer}>
                <ContainerHeader title={'Giao dịch nạp tiền'} />
                <DepositDetail transaction={transaction} />
              </div>
        break;
      case 'withdraw':
        return <WithdrawDetail transaction={transaction} />
        break;
      default:
        break;
    }
}

Transaction.propTypes = {
  transaction: PropTypes.object // from enhancer (firestoreConnect + connect)
}

export default Transaction
