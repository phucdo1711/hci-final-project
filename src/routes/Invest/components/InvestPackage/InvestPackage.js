import React from 'react'
import classes from './InvestPackage.scss'
import PropTypes from 'prop-types'

// import components
import Card, {
  CardActions,
  CardContent,
  CardHeader,
  CardMedia
} from 'material-ui/Card'
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'
import reactCSS from 'reactcss'
import Button from 'material-ui/Button'
import Divider from 'material-ui/Divider'
import CircularProgressbar from 'react-circular-progressbar'

// import helper method
import { moneyNumToText, formatDate } from 'utils/method-helper'

const styles = reactCSS({
  default: {
    colorText: {
      color: '#3e396b'
    },
    dividerColor: {
      backgroundColor: 'rgba(0, 0, 0, 0.02)'
    },
    card: {
      background: 'linear-gradient(180deg, #1370DD, #30A5E7) !important'
    },
    textHeader: {
      color: '#3e396b',
      fontWeight: 550
    },
    button: {
      color: 'white',
      //   border: "solid 1px white",
      //   borderColor: "white",
      borderRadius: 20,
      width: 120
    }
  }
})

const DetailText = ({ smallText, hightLightTxt, color, goToNewInvest }) => {
  return (
    <div className={classes.detailText}>
      <Typography gutterBottom style={styles.colorText}>
        {smallText}
      </Typography>
      <Typography type="body2" gutterBottom style={styles.textHeader}>
        {hightLightTxt}
      </Typography>
    </div>
  )
}

export const InvestPackage = ({
  color,
  title,
  time,
  min,
  max,
  rate,
  invested,
  goToNewInvest,
  id,
  ribbon,
  expTime
}) => {
  return (
    <Grid item>
      <Card
        className={classes.card}
        style={{
          background: `linear-gradient(135deg, ${`rgba(${color.r}, ${
            color.g
          }, ${color.b}, ${color.a})`}, 
                  ${`rgba(${color.r}, ${color.g}, ${
                    color.b + 30 > 255 ? 255 : color.b + 30
                  }, 0.9)`}`,
          borderRadius: 4
        }}>
        {ribbon ? <div className={classes.ribbon}>{ribbon}</div> : null}
        {ribbon ? <div className={classes.cardTopGradiant} /> : null}

        <div className={classes.textHeaderA}>
          <Typography type="headline" className={classes.title}>
            {title}
          </Typography>
          <Typography type="caption" gutterBottom style={{ color: 'white' }}>
            {formatDate(time.start) + ' - ' + formatDate(time.end)}
          </Typography>
        </div>
        <div className={classes.process2}>
          <div className={classes.processCenter}>
            <div>
              <Typography type="body2" gutterBottom className={classes.text}>
                {moneyNumToText(invested)}
              </Typography>
              <Divider className={classes.divider} />
              <Typography type="body2" gutterBottom className={classes.text2}>
                {moneyNumToText(max)}
              </Typography>
            </div>
          </div>
          <CircularProgressbar
            backgroundPadding={5}
            strokeWidth={6}
            percentage={invested / max * 100}
            textForPercentage={null}
            initialAnimation
          />
        </div>
        <div className={classes.cardBottomBG}>
          <div className={classes.cardBG} />
          <div className={classes.detail}>
            <DetailText
              color={color}
              smallText="Mức đầu tư"
              hightLightTxt={`${moneyNumToText(min)} - ${moneyNumToText(max)}`}
            />
            <Divider style={styles.dividerColor} />
            <DetailText
              color={color}
              smallText="Thời gian đáo hạn"
              hightLightTxt={`${expTime} Ngày`}
            />
            <Divider style={styles.dividerColor} />
            <DetailText
              color={color}
              smallText="Lãi suất"
              hightLightTxt={`${rate * 100}%/ Tháng`}
            />
            <CardActions className={classes.cardAction}>
              <Button
                style={{
                  background: `linear-gradient(135deg, ${`rgba(${color.r}, ${
                    color.g
                  }, ${color.b}, ${color.a})`}, 
                            ${`rgba(${color.r}, ${color.g}, ${
                              color.b + 30 > 255 ? 255 : color.b + 30
                            }, 0.9)`}`
                }}
                className={classes.button}
                onClick={() => goToNewInvest(id)}>
                {'Đầu tư ngay'.toUpperCase()}
              </Button>
            </CardActions>
          </div>
        </div>
      </Card>
    </Grid>
  )
}

export default InvestPackage
