import React from "react";
import PropTypes from "prop-types";
import classes from "./CodeList.scss";
import { isLoaded } from "react-redux-firebase";
import {
  Paper,
  Avatar,
  Typography,
} from "material-ui";
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "material-ui/Table";
import { formatDate } from "utils/method-helper";
//components
import UserCard from 'components/UserCard'
import FilterToolbar from 'components/FilterToolbar'

const options = [
  { type: null, name: 'Tất cả' },
  { type: 'pending', name: 'Đang xử lí giao dịch' },
  { type: 'active', name: 'Đang trong kì hạn' },
  { type: 'done', name: 'Đã kết thúc' }
]

export const CodeList = ({
  filterType, setFilterType,
  codeList
}) => {
  return (
    <Paper className={classes.root}>
      <FilterToolbar
        title='Danh sách tài khoản đã giới thiệu'
        options={options}
        filterType={filterType}
        setFilterType={setFilterType}
      />

      <Table>
        {/* TABLE HEADER */}
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography className={classes.textBold}>Người được giới thiệu</Typography>
            </TableCell>
            <TableCell>
              <Typography className={classes.textBold}>Trạng thái </Typography>
            </TableCell>
            <TableCell>
              <Typography className={classes.textBold}>Ngày tạo</Typography>
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {/* ROW */}
          {isLoaded(codeList) ? (
            codeList.map((item, index) => {
              // console.log(item);
              if (item)
                return (
                  <RowItem
                    key={index}
                    status={"Hoạt động"}
                    date='03/02/2018'
                    avatarURL={item.avatarUrl}
                    name={item.displayName}
                    email={item.email}
                  />
                );
            })
          ) : (
              <TableRow />
            )}
        </TableBody>
      </Table>
    </Paper>
  );
};

const RowItem = ({ avatarURL, name, email, status, date }) => {
  return (
    <TableRow>
      <TableCell>
        <UserCard
          avatarURL={avatarURL}
          name={name}
          email={email}
        />
      </TableCell>
      <TableCell>
        <Typography>{status}</Typography>
      </TableCell>
      <TableCell>{date}</TableCell>
    </TableRow>
  );
};

CodeList.propTypes = {
  codeList: PropTypes.array
};

export default CodeList;
