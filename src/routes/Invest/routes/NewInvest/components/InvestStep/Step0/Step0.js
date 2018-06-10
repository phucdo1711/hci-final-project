import React from 'react'
import classes from './Step0.scss'
import Typography from 'material-ui/Typography'

import Divider from 'material-ui/Divider'
import Paper from 'material-ui/Paper'
import Input, { InputAdornment } from 'material-ui/Input'
import { FormControl, FormHelperText } from 'material-ui/Form'
import NumberFormat from 'react-number-format'
import { formatterCurrency, moneyNumToText, interestDates } from 'utils/method-helper'
import moment from 'moment'
import ExpansionPanel, {
  ExpansionPanelDetails,
  ExpansionPanelSummary
} from 'material-ui/ExpansionPanel'
import ExpandMoreIcon from 'material-ui-icons/ExpandMore'

const NumberFormatCustom = props => {
  return (
    <NumberFormat
      {...props}
      onValueChange={values => {
        props.onChange({
          target: {
            value: values
          }
        })
      }}
      thousandSeparator
    />
  )
}

const errorMess = (min, max, amount, avaiBalance) => {
  if(!avaiBalance)
    return 'Bạn không có tiền! Vui lòng nạp tiền';
  if(avaiBalance < min)
    return 'Số tiền trong ví nhỏ hơn số tiền tối thiểu của gói đầu tư này, hãy nạp tiền vào ví';
  else if (amount > avaiBalance )
    return `Số tiền bạn nhập lớn hơn số tiền khả dụng trong ví (${moneyNumToText(avaiBalance)}) `;
  else if (amount < min)
    return `Số tiền bạn nhập phải lớn hơn số tiền tối thiểu của gói đầu tư này (${moneyNumToText(min)})`;
  else if (amount > max)
    return `Số tiền bạn nhập vượt quá số tiền tối đa của gói đầu tư ${moneyNumToText(max)} `;
  else 
    return false;
}

const Step0 = ({ invest, amountInvest, setAmountInvest, avaiBalance, setIsError }) => {
  const data = [
    { title: 'Gói đầu tư ', content: invest.name, type: 'title' },
    { title: 'Số tiền đầu tư', content: formatterCurrency(amountInvest), type: 'subheading' },
    { title: 'Lãi suất hàng tháng', content: invest.interestRateMonth * 100 + '%', type: 'body1' },
    { title: 'Tổng tiền lãi nhận được', content: formatterCurrency((invest.interestRateMonth / 30) * amountInvest * invest.expTime), type: 'subheading' },
    { title: 'Ngày trả gốc ', content: moment().add(invest.expTime, 'd').calendar(), type: 'body1' },
  ]
  const interests = interestDates(invest.expTime, amountInvest, invest.interestRateMonth / 30)
  var errMess =errorMess(invest.minInvest, invest.totalInvest - invest.invested, amountInvest, avaiBalance)
  if(errMess) setIsError(true) 
  else setIsError(false)
  
  return (
    <div>
      <Paper className={classes.paperInputMoney}>
        <Typography type="title">Số tiền đầu tư</Typography>
        <FormControl className={classes.formControl}>
          <Input
            className={classes.input}
            value={amountInvest}
            onChange={(e) =>{e.target.value.floatValue && setAmountInvest(e.target.value.floatValue) }}
            endAdornment={
              <InputAdornment position="end">
                <Typography type="title">VNĐ</Typography>
              </InputAdornment>
            }
            error={errMess ? true : false}
            inputComponent={NumberFormatCustom}
          />
          <FormHelperText>
            {errMess ?
              errMess
              : `Bạn có ${moneyNumToText(avaiBalance)} trong ví`
            }
          </FormHelperText>
        </FormControl>
      </Paper>
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
    </div>
  )
}

export default Step0
