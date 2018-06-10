import React from 'react'
import PropTypes from 'prop-types'
import classes from './WithdrawDetail.scss'
import momment from 'moment'

import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import {Paper, Typography} from 'material-ui';
import { formatterCurrency } from 'utils/method-helper'
import ContainerHeader from 'components/ContainerHeader'

const Code = ({code}) => (
  <div>
    <Typography gutterBottom type='headline'>{code}</Typography>
    <Typography>Cung cấp mã giao dịch này nếu bạn cần hỗ trợ về giao dịch</Typography>    
  </div>
)

const statusTypes = [
  {type: 'pending', name: 'Đang chờ xử lí giao dịch'},
  {type: 'done', name: 'Đã chuyển tiền vào tài khoản của bạn'},
]

const Time = ({time}) => (
  <div>
    <Typography gutterBottom><b>{momment(time).calendar()}</b></Typography>
    <Typography gutterBottom>Thời gian chuyển tiền có thể từ 2-3 ngày tùy vào ngân hàng của bạn</Typography>
  </div>
)
export const WithdrawDetail = ({ transaction }) => {
  const info = [
    {title: 'Mã giao dịch ', content: <Code code={transaction.code}/>},
    {title: 'Số tài khoản nhận tiền', content: <Typography><strong>{transaction.bank.bankAcccount}</strong> ({transaction.bank.bank})</Typography>},
    {title: 'Số tiền rút', content: <Typography>{formatterCurrency(transaction.amount)}</Typography>},    
    {title: 'Trạng thái', content: <Typography>{statusTypes.find((type) => type.type === transaction.status).name}</Typography>},
    {title: 'Thời gian giao dịch', content: <Time time={transaction.createdAt}/>},            
  ]
  return (
  <div className={classes.container}>
  <ContainerHeader title={'Giao dịch rút tiền'} />
    <Paper className={classes.root}>
        <TableBody>
            {info.map((i, index) => {
              return (
                <TableRow key={index}>
                  <TableCell numeric ><Typography type='title'>{i.title}</Typography></TableCell>
                  <TableCell>{i.content}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
      </Paper>
  </div>
)}

WithdrawDetail.propTypes = {
  transaction: PropTypes.object // from enhancer (firestoreConnect + connect)
}

export default WithdrawDetail
