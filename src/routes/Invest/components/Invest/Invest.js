import React, { cloneElement } from 'react'
import PropTypes from 'prop-types'
import classes from './Invest.scss'
import { Link } from 'react-router'
import _ from 'lodash'
import DocumentTitle from 'react-document-title'
import ContentLoader from 'react-content-loader'

import { INVEST_PATH } from 'constants'

import { isEmpty, isLoaded } from 'react-redux-firebase'

// style
import { withStyles } from 'material-ui/styles'
import Card, { CardActions, CardContent, CardHeader } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'

// component
import InvestPackage from '../InvestPackage'
import ContainerHeader from 'components/ContainerHeader'
import PersonalInvest from '../PersonalInvest'
import InvestTable from '../InvestTable'

const LoadingComponent = () => (
  <Grid container spacing={16}>
    {_.range(3).map((item, index) => (
      <Card key={index} style={{ width: 220, height: 400, margin: '8px 8px' }}>
        <CardContent>
          <ContentLoader width={220} height={400}>
            <rect x="20" y="240" rx="4" ry="4" width="180" height="10" />
            <rect x="20" y="270" rx="4" ry="4" width="180" height="10" />
            <rect x="50" y="300" rx="4" ry="4" width="120" height="10" />
            <rect x="50" y="90" rx="70" ry="70" width="120" height="120" />
          </ContentLoader>
        </CardContent>
      </Card>
    ))}
  </Grid>
)

export const Invest = ({
  firestore,
  Invest,
  auth,
  children,
  screenWidth,
  goToNewInvest
}) => {
  const arr = [];
  return (
    <div className={classes.container}>
      {children ? (
        cloneElement(children, { auth })
      ) : (
          <div>
            <DocumentTitle title="Investments" />
            <ContainerHeader title={'Investment'} />
            {!isLoaded(Invest) && <LoadingComponent />}
            <Grid container spacing={16}>
              {!isEmpty(Invest) &&
                Invest.map((item, key) => {
                  if ((key + 1) * (240 + 16) <= screenWidth - 270 && key <= 3) {
                    return (
                      <InvestPackage
                        color={JSON.parse(item.styles.color)}
                        key={key}
                        expTime={item.expTime}
                        title={item.name}
                        time={item.time}
                        min={item.minInvest}
                        max={item.totalInvest}
                        rate={item.interestRateMonth}
                        goToNewInvest={goToNewInvest}
                        id={item.id}
                        ribbon={item.styles.ribbon}
                        invested={item.invested}
                      />
                    )
                  }else {
                    arr.push(item)
                  }
                  return <div key={key} />
                })}
            </Grid>
            <InvestTable invests={arr}/>
            <PersonalInvest />
          </div>
        )}
    </div>
  )
}

Invest.propTypes = {
  Invest: PropTypes.array
}

export default Invest
