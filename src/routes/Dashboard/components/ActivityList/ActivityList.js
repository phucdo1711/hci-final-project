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
import Typography from 'material-ui/Typography'

let id = 0
function createData(time, agent, ip) {
  id += 1
  return { id, time, agent, ip }
}

const data = [
  createData('2018-01-08 16:19:28', 'Chrome/63.0.3239.132', '42.113.238.252'),
  createData('2018-01-08 16:19:28', 'Chrome/63.0.3239.132', '42.113.238.252'),
  createData('2018-01-08 16:19:28', 'Chrome/63.0.3239.132', '42.113.238.252'),
  createData('2018-01-08 16:19:28', 'Chrome/63.0.3239.132', '42.113.238.252'),
  createData('2018-01-08 16:19:28', 'Chrome/63.0.3239.132', '42.113.238.252'),
  createData('2018-01-08 16:19:28', 'Chrome/63.0.3239.132', '42.113.238.252'),
  createData('2018-01-08 16:19:28', 'Chrome/63.0.3239.132', '42.113.238.252')
]

export const ActivityList = ({ activitylist }) => (
  <Paper className={classes.root}>
    <Typography type="title" className={classes.alertTitle}>
      Your Activites
    </Typography>
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <TableCell>Login Time</TableCell>
          <TableCell>User Agent</TableCell>
          <TableCell>IP Address</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map(n => {
          return (
            <TableRow key={n.id} hover>
              <TableCell>{n.time}</TableCell>
              <TableCell>{n.agent}</TableCell>
              <TableCell>{n.ip}</TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  </Paper>
)

ActivityList.propTypes = {
  activitylist: PropTypes.object // from enhancer (firestoreConnect + connect)
}

export default ActivityList
