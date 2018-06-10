import React from 'react'
import PropTypes from 'prop-types'
import classes from './PersonalInvest.scss'

// Material UI
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from 'material-ui/Table'
import {
  Paper,
  Typography,
} from 'material-ui'
// components
import FilterToolbar from 'components/FilterToolbar'

import { formatterCurrency } from 'utils/method-helper'
import ContentLoader from 'react-content-loader'
import moment from 'moment'
import {isEmpty} from 'react-redux-firebase'

const options = [
  { type: null, name: 'Tất cả' },
  { type: 'pending', name: 'Đang xử lí giao dịch' , color: '#FFC107' },
  { type: 'active', name: 'Đang trong kì hạn'  , color: '#2196F3'},
  { type: 'done', name: 'Đã kết thúc' , color: '#673AB7' }
]

export const PersonalInvest = ({
  myInvests, 
  router,
  filterType,
  setFilterType
}) => {
  return (
    !isEmpty(myInvests) ?<div className={classes.container}>
      <FilterToolbar
        title='Các gói đầu tư của tôi'
        options={options}
        filterType={filterType}
        setFilterType={setFilterType}
      />
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell className={classes.titleCell} >Gói đầu tư</TableCell>
              <TableCell numeric className={classes.titleCell}>Số tiền đã đầu tư</TableCell>
              <TableCell className={classes.titleCell}>Trạng thái</TableCell>
              <TableCell className={classes.titleCell}>Ngày bắt đầu</TableCell>
              <TableCell className={classes.titleCell}>Ngày đáo hạn</TableCell>              
            </TableRow>
          </TableHead>
          <TableBody>
            {(filterType ?  myInvests.filter(i => i.status === filterType) : myInvests).map((item) => (
              <InvestRow key={item.id} item={item} router={router}/>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div> :
     <div /> 
  )
}

const InvestRow = ({ item, router}) => {
  const color = item && JSON.parse(item.investPackage.styles.color) ;
  const status = options.find((o) => (o.type === item.status))
  return (
    <TableRow hover 
      className={classes.tableRow}
      onClick={() => router.push(`transaction/${item.id}`)}
    >
      <TableCell style={{ color: `rgba(${color.r},${color.g},${color.b},${color.a})`, fontSize: 16 }}>
        {item.investPackage.name}
      </TableCell>
      <TableCell numeric style={{ fontSize: 15}}>{formatterCurrency(item.amount)}</TableCell>
      <TableCell style={{color: status.color, fontSize: 13}}>{status.name}</TableCell>
      <TableCell >{moment(item.createdAt).calendar()}</TableCell>
      <TableCell >{moment(item.createdAt).add(item.investPackage.expTime, 'd').calendar()}</TableCell>      
    </TableRow>
  )
}


export default PersonalInvest
