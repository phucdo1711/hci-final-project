import React from 'react'
import PropTypes from 'prop-types'
import classes from './ReferralList.scss'
import {
  Paper,
  Typography,
} from 'material-ui'
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from 'material-ui/Table'
import UserCard from 'components/UserCard'
import FilterToolbar from 'components/FilterToolbar'
import _ from 'lodash'

const options = [
  { type: null, name: 'Tất cả' },
  { type: 'pending', name: 'Đang xử lí giao dịch'  },
  { type: 'active', name: 'Đang trong kì hạn' },
  { type: 'done', name: 'Đã kết thúc' }
]
export const ReferralList = ({filterType, setFilterType}) => (
  <Paper className={classes.root}>
    <FilterToolbar 
       title='List of Refferals'
       options={options}
       filterType={filterType}
       setFilterType={setFilterType}
    />
    <Table>
      {/* TABLE HEADER */}
      <TableHead>
        <TableRow>
          <TableCell />
          <TableCell>
            <Typography className={classes.textBold}>Packages</Typography>
          </TableCell>
          <TableCell numeric>
            <Typography className={classes.textBold}>Earn </Typography>
          </TableCell>
          <TableCell>
            <Typography className={classes.textBold}>Status</Typography>
          </TableCell>
          <TableCell>
            <Typography className={classes.textBold}>Date</Typography>
          </TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {/* ROW */}
        {_.range(10).map((i, k) => <RowItem key={k} />)}
      </TableBody>
    </Table>
  </Paper>
)

const RowItem = () => {
  return (
    <TableRow>
      <TableCell>
        <UserCard 
            avatarURL="https://lh3.googleusercontent.com/-o7rbSR-nUOc/AAAAAAAAAAI/AAAAAAAAAVk/oH_YnTRLUgM/photo.jpg"
            name='Do Thanh Phuc'
            email='thanhphuc1711@gmail.com'
        />
      </TableCell>
      <TableCell>
        <Typography>Quantum of solace</Typography>
      </TableCell>
      <TableCell numeric>
        <Typography className={classes.textBold}>100,000,000đ</Typography>
      </TableCell>
      <TableCell>Pending</TableCell>
      <TableCell>20/10/2018</TableCell>
    </TableRow>
  )
}

ReferralList.propTypes = {
  filterType: PropTypes.string,
  setFilterType: PropTypes.func
}

export default ReferralList
