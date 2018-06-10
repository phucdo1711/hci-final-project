import React from 'react'
import PropTypes from 'prop-types'
import classes from './InvestedDetail.scss'
import InvestPackage from '../../../Invest/components/InvestPackage';
import ContainerHeader from 'components/ContainerHeader'
import moment from 'moment'
import { Grid, Typography, Paper, Divider } from 'material-ui'
import { formatterCurrency, moneyNumToText, interestDates } from 'utils/method-helper'
import ExpansionPanel, {
  ExpansionPanelDetails,
  ExpansionPanelSummary
} from 'material-ui/ExpansionPanel'
import ExpandMoreIcon from 'material-ui-icons/ExpandMore'

export const InvestedDetail = ({ invest, router }) => {
  const item = invest.investPackage;
  const data = [
    { title: 'Gói đầu tư ', content: item.name, type: 'title' },
    { title: 'Số tiền đầu tư', content: formatterCurrency(invest.amount), type: 'subheading' },
    { title: 'Lãi suất hàng tháng', content: item.interestRateMonth * 100 + '%', type: 'body1' },
    {
      title: 'Tổng tiền lãi nhận được',
      content: formatterCurrency((item.interestRateMonth / 30) * invest.amount * item.expTime),
      type: 'subheading'
    },
    { title: 'Ngày đầu tư ', content: moment(invest.createdAt).calendar(), type: 'body1' },
    { title: 'Ngày trả gốc ', content: moment(invest.createdAt).add(item.expTime, 'd').calendar(), type: 'body1' },
  ];
  const interests = interestDates(item.expTime, invest.amount, item.interestRateMonth / 30);
  return (
    <div>
      <ContainerHeader title={`Gói đầu tư ${item.name}`} />
      <Grid container>
        <Grid item lg={3} md={4} sm={12} xs={12}>
          <div className={classes.packageContainer}>
            <InvestPackage
              color={JSON.parse(item.styles.color)}
              expTime={item.expTime}
              title={item.name}
              time={item.time}
              min={item.minInvest}
              max={item.totalInvest}
              rate={item.interestRateMonth}
              goToNewInvest={() => router.push(`invest/new/${item.id}`)}
              id={item.id}
              ribbon={item.styles.ribbon}
              invested={item.invested}
            />
          </div>
        </Grid>
        <Grid item lg={7} md={8} sm={12} xs={12}>
          <Paper className={classes.paperDetail}>
            {data.map((item, index) => (
              <div key={index}>
                <div className={classes.detailText}>
                  <Typography gutterBottom>{item.title}</Typography>
                  <Typography type={item.type} gutterBottom>
                    {item.content}
                  </Typography>
                </div>
                <Divider />
              </div>
            ))}
          </Paper>
          <ExpansionPanel >
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography type="title" className={classes.heading}>
                Ngày trả lãi
              </Typography>
            </ExpansionPanelSummary>
            {interests.map((item, index) => (
              <ExpansionPanelDetails key={index}>
                <div className={classes.detailText}>
                  <Typography className={classes.rightTextExpand}>{item.date}</Typography>
                  <Typography>{formatterCurrency(item.interest)}</Typography>
                </div>
              </ExpansionPanelDetails>
            ))}
          </ExpansionPanel>
        </Grid>
      </Grid>
    </div>
  )
}
InvestedDetail.propTypes = {
  investeddetail: PropTypes.object // from enhancer (firestoreConnect + connect)
}

export default InvestedDetail
