import React from 'react'
import PropTypes from 'prop-types'
import classes from './DepoWithList.scss'

import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from 'material-ui/Table'
import Paper from 'material-ui/Paper'
import moment from 'moment'
import { formatterCurrency } from 'utils/method-helper'

export const DepoWithList = ({ list , type, goToDetail}) => (
  <Paper className={classes.root}>
    <Table className={classes.table}>
      <TableHead> 
        <TableRow>
          <TableCell>Mã giao dịch</TableCell>
          <TableCell>Ngày giao dịch</TableCell>
          <TableCell numeric>{type === 'deposit' ? 'Số tiền nạp' : 'Số tiền rút'}</TableCell>
          <TableCell >Tài khoản {type === 'deposit' ? 'nạp tiền' : 'rút tiền'}</TableCell>          
          <TableCell >Trạng thái</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {list.map(l => {
          return (
            <TableRow 
              key={l.id} 
              hover
              className={classes.tableRow}
              onClick={() => goToDetail(l.id)}
            >
              <TableCell>{l.code}</TableCell>
              <TableCell>{moment(l.createdAt).calendar()}</TableCell>
              <TableCell numeric>{formatterCurrency(l.amount)}</TableCell>
              <TableCell>{l.bank.bankAcccount} ({l.bank.bank})</TableCell>              
              <TableCell>{l.status}</TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  </Paper>
)

DepoWithList.propTypes = {
  list: PropTypes.array,
  type: PropTypes.string,
  goToDetail: PropTypes.func.isRequired
}

export default DepoWithList
