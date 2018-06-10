import moment from 'moment'

export const moneyNumToText = num => {
  if (num < 1000000) return `${+(num / 1000).toFixed(2)} Nghìn`
  else if (num >= 1000000 && num < 1000000000) return `${+(num / 1000000).toFixed(2)} TR`
  else if (num >= 1000000000) return `${+(num / 1000000000).toFixed(2)} Tỷ`
  else return null
}

export const formatDate = date => {
  var d = new Date(date)
  return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`
}

export const formatDate2 = date => {
  return moment(date).format('YYYY-MM-DD')
}

//format tien
export  const formatterCurrency = num =>new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'VND',
}).format(num);

// return: array list lãi suất 
//         nhận đc vào các ngày mùng 1 hàng tháng
export const interestDates = (expTime, amountInvest, rate) => {
  var a = [], date = 1, temp = moment(), interest = 0;
  for (var i = 0; i < expTime; i++) {
    interest = interest + amountInvest * rate;
    if (temp.date() === date) {
      a.push({ date: temp.calendar(), interest });
      interest = 0;
    }
    temp = temp.add(1, 'd');
  }
  a.push({ date: temp.calendar(), interest });
  return a
}