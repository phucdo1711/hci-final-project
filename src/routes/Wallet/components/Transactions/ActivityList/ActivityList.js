import React from 'react'
import PropTypes from 'prop-types'
import classes from './ActivityList.scss'
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from 'material-ui/Table'
import Paper from 'material-ui/Paper'
import moment from 'moment'
import { formatterCurrency } from 'utils/method-helper'

const activityType = [
  { type: 'investment', name: 'Đầu tư' },
  { type: 'deposit', name: 'Nạp tiền vào ví' },
  { type: 'withdraw', name: 'Rút tiền' },
]

export const ActivityList = ({ activitylist , goToDetail}) => {
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Ngày giao dịch</TableCell>
            <TableCell>Hoạt động</TableCell>
            <TableCell numeric>Thay đổi</TableCell>
            <TableCell >Trạng thái</TableCell>            
          </TableRow>
        </TableHead>
        <TableBody>
          {activitylist.map(a => {
            const activity = activityType.find((type) => (type.type === a.type))
            return (
              <TableRow 
                key={a.id} 
                hover 
                className={classes.tableRow}
                onClick={() => goToDetail(a.id)}
              >
                <TableCell>{moment(a.createdAt).calendar()}</TableCell>
                <TableCell>{activity.name}</TableCell>
                <TableCell numeric>
                  {a.type === 'deposit' ? '+' : '-'} {formatterCurrency(a.amount)} 
                </TableCell>
                <TableCell>{a.status}</TableCell>                
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </Paper>
  )
}


ActivityList.propTypes = {
  activitylist: PropTypes.array,
  goToDetail: PropTypes.func.isRequired
}

export default ActivityList
