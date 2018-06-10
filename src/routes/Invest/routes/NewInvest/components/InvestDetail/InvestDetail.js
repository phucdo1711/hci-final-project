import React from 'react'
import PropTypes from 'prop-types'
import classes from './InvestDetail.scss'

// import style
import ExpansionPanel, {
  ExpansionPanelDetails,
  ExpansionPanelSummary
} from 'material-ui/ExpansionPanel'
import Typography from 'material-ui/Typography'
import ExpandMoreIcon from 'material-ui-icons/ExpandMore'
import Paper from 'material-ui/Paper'

// redux + firebase
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withHandlers, withStateHandlers, withState } from 'recompose'
import { isEmpty } from 'react-redux-firebase'

// import compornents
import Button from 'material-ui/Button'

import {formatDate,moneyNumToText } from 'utils/method-helper'

const enhance = compose(
  withState('expanded', 'setExpanded', null),
  withHandlers({
    handleChange: ({ setExpanded }) => panel => (event, expanded) => {
      setExpanded(expanded ? panel : false)
    }
  })
)

export const InvestDetail = ({invest, expanded, handleChange, continueInvest }) => {
  const data = [
    {
      title: 'Thời gian có thể đầu tư',
      content: `Từ ngày ${formatDate(invest.time.start)} tới ngày ${formatDate(invest.time.end)}`,
      spec: 'Thời gian bạn có thể đầu tư trong 180 ngày'
    },
    {
      title: 'Tổng số tiền có thể đầu tư',
      content: moneyNumToText(invest.totalInvest) + ' Đồng',
      spec: 'Thời gian bạn có thể đầu tư trong 180 ngày'
    },
    {
      title: 'số tiền đã được đầu tư',
      content: moneyNumToText(invest.invested)  + ' Đồng',
      spec: 'Thời gian bạn có thể đầu tư trong 180 ngày'
    },
    {
      title: 'Số tiền tối thiểu có thể đầu tư',
      content: moneyNumToText(invest.minInvest),
      spec: 'Thời gian bạn có thể đầu tư trong 180 ngày'
    },
    {
      title: 'Thời gian đáo hạn của gói đầu tư',
      content: `${invest.expTime} ngày`,
      spec: 'Thời gian bạn có thể đầu tư trong 180 ngày'
    },
    {
      title: 'Lãi suất',
      content: `${invest.interestRateMonth * 100}% / 1 Tháng `,
      spec: 'Thời gian bạn có thể đầu tư trong 180 ngày'
    },
    {
      title: 'Trả lãi suất theo',
      content: 'Tháng ',
      spec: 'Thời gian bạn có thể đầu tư trong 180 ngày'
    },
  ]

  return (
    <div className={classes.container}>
      <Paper>
        {data.map((item, index) => (
          <ExpansionPanel
            expanded={expanded === index}
            onChange={handleChange(index)}
            key={index}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography type="body2" className={classes.heading}>
                {item.title}
              </Typography>
              <Typography className={classes.secondaryHeading}>
                {item.content}
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography type="caption">{item.spec}</Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        ))}
      </Paper>
      <Paper className={classes.paper2}>
        <Typography type="title">Dự tính</Typography>
      </Paper>
      <div className={classes.btnDiv}>
        <Button
          className={classes.primaryButton}
          onClick={() => continueInvest()}>
          Tiếp tục
        </Button>
      </div>
    </div>
  )
}

InvestDetail.propTypes = {
  expanded: PropTypes.any,
  handleChange: PropTypes.func.isRequired,
  invest: PropTypes.object.isRequired
}

export default enhance(InvestDetail)
