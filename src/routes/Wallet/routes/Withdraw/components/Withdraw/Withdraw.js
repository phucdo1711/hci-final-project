import React from 'react'
import PropTypes from 'prop-types'
import classes from './Withdraw.scss'
import ContainerHeader from 'components/ContainerHeader'
import { Typography, Select, Paper, Button } from 'material-ui';
import NumberFormat from 'react-number-format'
import Input, { InputLabel, InputAdornment } from 'material-ui/Input'
import { FormControl, FormHelperText } from 'material-ui/Form'
import { MenuItem } from 'material-ui/Menu';
import { formatterCurrency } from 'utils/method-helper'
import { Link } from 'react-router'

const isError = (amount, balance, bankAcc) => {
  if (amount < 10000000 || amount > balance || !bankAcc || balance === 0)
    return true;
  return false;
}

export const Withdraw = ({ amount, setAmount, banks, bank, setBank, bankAcc, setBankAcc, balance, withdraw }) => {
  const listInput = [
    {
      label: 'số tiền rút',
      content: <InputAmount amount={amount} setAmount={setAmount} />,
      helperText: `lưu ý: số tiền nhập phải lớn hơn 10 triệu và nhỏ hơn ${formatterCurrency(balance)}  `,
      isError: amount > balance || amount < 10000000
    },
    {
      label: 'chọn ngân hàng nhận tiền',
      content: <SelectBank banks={banks} bank={bank} setBank={setBank} />,
      helperText: 'Chọn ngân hàng mà bạn muốn chuyển tiền vào',
      isError: false
    },
    {
      label: 'Tài khoản ngân hàng',
      content: <Input value={bankAcc} onChange={(e) => setBankAcc(e.target.value)} />,
      helperText: '',
      isError: !bankAcc 
    },
  ]
  return (
    <div className={classes.container}>
      <ContainerHeader title={'Withdraw'} />
      <Paper className={classes.formContainer}>
        {balance === 0 ?
          <Typography type='headline' style={{ color: 'red' }}>Bạn không có tiền trong tài khoản</Typography> :
          <Typography type='headline'>
            Số dư khả dụng còn lại: <strong className={classes.balance}>{formatterCurrency(balance - amount)}</strong>
          </Typography>
        }
        {listInput.map((item, index) => (
          <FormControl
            key={index}
            fullWidth
            margin='normal'
            // required
            error={item.isError}
          >
            <InputLabel>{item.label.toLocaleUpperCase()}</InputLabel>
            {item.content}
            <FormHelperText id={index}>{item.helperText}</FormHelperText>
          </FormControl>
        ))}
        <Typography>Thời gian chuyển tiền có thể từ 15 ngày đến 1 năm tùy thuộc vào ngân hàng của bạn</Typography>
        <div className={classes.btnGroup}>
          <Button component={Link} to='/wallet'>Hủy</Button>
          <Button className={classes.primaryButton}
            disabled={isError(amount,balance,bankAcc)}
            onClick={withdraw}
          >Xác nhận</Button>
        </div>
      </Paper>
    </div>
  )
}

Withdraw.propTypes = {
  bank: PropTypes.string.isRequired,
  bankAcc: PropTypes.string.isRequired,
  setAmount: PropTypes.func.isRequired,
  setBank: PropTypes.func.isRequired,
  setBankAcc: PropTypes.func.isRequired,
  banks: PropTypes.array.isRequired
}


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

const InputAmount = ({ amount, setAmount }) => (
  <Input
    id="adornment-amount"
    className={classes.input}
    value={amount}
    onChange={(e) => e.target.value.value && setAmount(e.target.value.value || 0)}
    endAdornment={
      <InputAdornment position="end">
        <Typography type="title">VNĐ</Typography>
      </InputAdornment>
    }
    inputComponent={NumberFormatCustom}
  />
)

const SelectBank = ({ banks, bank, setBank }) => (
  <Select
    value={bank}
    onChange={(e) => setBank(e.target.value)}
    inputProps={{
      name: 'age',
      id: 'age-simple',
    }}
  >
    {banks.map(item =>
      <MenuItem key={item.id} value={item.id}
        disabled={!item.isActive}
      >{item.name}</MenuItem>
    )}
  </Select>
)



export default Withdraw
