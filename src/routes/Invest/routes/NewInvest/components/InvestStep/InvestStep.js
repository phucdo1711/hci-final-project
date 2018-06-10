import React from 'react'
import PropTypes from 'prop-types'
import classes from './InvestStep.scss'

// import components
import Paper from 'material-ui/Paper'
import Stepper, { Step, StepLabel } from 'material-ui/Stepper'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import Divider from 'material-ui/Divider'
import Step0 from './Step0'
import Step1 from './Step1'
import Step2 from './Step2'

function getSteps() {
  return ['Mức đầu tư', 'Điều khoản', 'Xác nhận']
}

const StepContent = ({ stepIndex, invest, setAmountInvest, amountInvest,isError, setIsError }) => {
  switch (stepIndex) {
    case 0:
      return <Step0
        invest={invest}
        amountInvest={amountInvest}
        setAmountInvest={setAmountInvest}
        setIsError={setIsError}
      />
    case 1:
      return <Step1 setIsError={setIsError} isError={isError}/>
    case 2:
      return <Step2 invest={invest} amountInvest={amountInvest} setIsError={setIsError}/>
    default:
      return <Success />
  }
}

const Success = () => (
  <Paper className={classes.paper}>
    <Typography type="display2" align="center" gutterBottom>
      Giao dịch thành công
    </Typography>
    <Typography type="display1" align="center" gutterBottom />
  </Paper>
)

export const InvestStep = ({
  activeStep,
  setActiveStep,  
  invest,
  amountInvest,
  setAmountInvest,
  isError,
  setIsError,
  continueBtn
}) => {
  const steps = getSteps()
  return (
    <div className={classes.container}>
      <Stepper
        className={classes.stepper}
        activeStep={activeStep}
        style={{ fill: '#FE6B8B' }}
        alternativeLabel>
        {steps.map(label => {
          return (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          )
        })}
      </Stepper>

      <StepContent
        stepIndex={activeStep}
        invest={invest}
        amountInvest={amountInvest}
        setAmountInvest={setAmountInvest}
        setIsError={setIsError}
        isError={isError}
      />
      {activeStep <= 2 && (
        <div className={classes.buttonGroup}>
          {activeStep === 1 && (
            <Button
              className={classes.btnBack}
              onClick={() => setActiveStep(activeStep - 1)}>
              Quay lại
            </Button>
          )}
          <Button
            className={classes.btnContinue}
            onClick={continueBtn}
            disabled={isError}
          >
            {activeStep !== 2 ? 'Tiếp tục' : 'Xác nhận'}
          </Button>
        </div>
      )}
    </div>
  )
}

InvestStep.propTypes = {
  //activeStep: PropTypes.number
}

export default InvestStep
