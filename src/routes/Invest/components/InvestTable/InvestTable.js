import React from 'react'
import PropTypes from 'prop-types'
import classes from './InvestTable.scss'

import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from 'material-ui/Table'

import {
  Paper,
  Typography,
  IconButton
} from 'material-ui'
import { formatterCurrency, moneyNumToText } from 'utils/method-helper'
import moment from 'moment'

export const InvestTable = ({ invests , router}) => (
  <div className={classes.container}>
  <Paper className={classes.root}>
    <Table className={classes.table}>
      <TableHead>
        <TableRow>  
          <TableCell className={classes.titleCell} >Gói đầu tư</TableCell>
          <TableCell numeric className={classes.titleCell}>Số tiền đã đầu tư</TableCell>
          <TableCell className={classes.titleCell}>Mức đầu tư</TableCell>
          <TableCell className={classes.titleCell}>Thời gian đáo hạn</TableCell>
          <TableCell numeric className={classes.titleCell}>Lãi suất</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {invests.map((item) => (
          <InvestRow key={item.id} item={item} router={router} />
        ))}
      </TableBody>
    </Table>
  </Paper>
  </div>
)

const InvestRow = ({ item, router}) => {
  const color = JSON.parse(item.styles.color);
  return (
    <TableRow hover 
      className={classes.tableRow}
      onClick={() => router.push(`invest/new/${item.id}`)}
    >
      <TableCell>
        <Typography type='subheading' style={{color: `rgba(${color.r},${color.g},${color.b},${color.a})`}}>
          {item.name}
        </Typography>
        <Typography type="caption">{moment(item.time.start).calendar()} - {moment(item.time.end).calendar()} </Typography>
      </TableCell>
      <TableCell numeric >{moneyNumToText(item.invested)}</TableCell>
      <TableCell >{moneyNumToText(item.minInvest)} - {moneyNumToText(item.totalInvest)}</TableCell>
      <TableCell >{item.expTime} Ngày</TableCell>
      <TableCell numeric>{item.interestRateMonth * 100}%</TableCell>      
    </TableRow>
  )
}

InvestTable.propTypes = {
  invests: PropTypes.array.isRequired
}

export default InvestTable
