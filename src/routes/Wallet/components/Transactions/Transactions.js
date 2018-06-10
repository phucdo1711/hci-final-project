import React from 'react'
import PropTypes from 'prop-types'
import classes from './Transactions.scss'

// Library
import { StickyContainer, Sticky } from 'react-sticky'

// Component
import TransactionList from './TransactionList'
import ActivityList from './ActivityList'
import DepoWithList from  './DepoWithList'

// Material UI
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Tabs, { Tab } from 'material-ui/Tabs'
import Typography from 'material-ui/Typography'

export const Transactions = ({
  transactions,
  tab,
  setTab,
  goToType,
  params,
  goToTransactionDetail
}) => (
    <div className={classes.container}>
      <AppBar className={classes.appBar} position="static">
        <Tabs
          value={tab}
          onChange={(event, value) => {
            setTab(value)
            // goToType(value);
          }}
          indicatorColor="primary"
          textColor="primary"
        // scrollable
        // scrollButtons="auto"
        >
          <Tab label="ACTIVITY" />
          <Tab label="DEPOSIT" />
          <Tab label="WITHDRAW" />
          <Tab label="INTEREST RATES" />
        </Tabs>
      </AppBar>

      <div className={classes.bodyContent}>
        {tab === 0 && <ActivityList 
                        activitylist={transactions} 
                        goToDetail={goToTransactionDetail}
                      />}
        {tab === 1 && <DepoWithList 
                        list={transactions.filter((tran) => tran.type === 'deposit')} 
                        type='deposit' 
                        goToDetail={goToTransactionDetail}                        
                      />}
        {tab === 2 && <DepoWithList 
                        list={transactions.filter((tran) => tran.type === 'withdraw')} 
                        type='withdraw'
                        goToDetail={goToTransactionDetail}
                      />}
        {tab === 3 && <TransactionList type={`Rates`} />}
      </div>
    </div>
  )

Transactions.propTypes = {
  transactions: PropTypes.array // from enhancer (firestoreConnect + connect)
}

export default Transactions
