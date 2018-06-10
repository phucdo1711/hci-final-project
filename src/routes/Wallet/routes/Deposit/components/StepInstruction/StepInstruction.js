import React from 'react'
import PropTypes from 'prop-types'
import classes from './StepInstruction.scss'
import momment from 'moment'

import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import {Paper, Typography} from 'material-ui';
import { formatterCurrency } from 'utils/method-helper'

const Code = ({code}) => (
  <div>
    <Typography gutterBottom type='title'>{code}</Typography>
    <Typography>Cung cấp mã giao dịch này nếu bạn cần hỗ trợ về giao dịch</Typography>    
  </div>
)

const Intruction = ({code, bank }) => (
  <div>
    <Typography gutterBottom>Vui lòng chuyển khoản cho tài khoản <strong>{bank.bank}</strong>:</Typography>
    <Typography gutterBottom>Số tài khoản: <strong>0451000375586</strong></Typography> 
    <Typography gutterBottom>Tên chủ tài khoản: <strong>DO THANH PHUC</strong></Typography> 
    <Typography gutterBottom>Chi nhánh: <strong>Ha Noi</strong></Typography> 
    <Typography gutterBottom>Nội dung chuyển khoản: <strong>giao dịch {code} tai COINVND</strong></Typography> 
  </div>
)
export const StepInstruction = ({ transaction }) => {
  const info = [
    {title: 'Mã giao dịch ', content: <Code code={transaction.code}/>},
    {title: 'Hướng dẫn thanh toán', content: <Intruction code={transaction.code} bank={transaction.bank}/>},    
    {title: 'Số tài khoản của bạn', content: <strong>{transaction.bank.bankAcccount}</strong>},
    {title: 'Bạn nạp vào ví', content: <Typography>{formatterCurrency(transaction.amount)}</Typography>},    
    {title: 'Trạng thái', content: <Typography>Đang chờ thanh toán từ {transaction.bank.bank}</Typography>},
    {title: 'Thời gian giao dịch', content: <Typography>{momment(transaction.createdAt).calendar()}</Typography>},            
  ]
  return (
      <Paper className={classes.root}>
        <TableBody>
            {info.map((i, index) => {
              return (
                <TableRow key={index}>
                  <TableCell numeric className={classes.title}>{i.title}</TableCell>
                  <TableCell>{i.content}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
      </Paper>
  )
}

StepInstruction.propTypes = {
  transaction: PropTypes.object // from enhancer (firestoreConnect + connect)
}

export default StepInstruction
