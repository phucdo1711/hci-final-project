import React from 'react'
import PropTypes from 'prop-types'
import classes from './Deposit.scss'

// import components
import ContainerHeader from 'components/ContainerHeader'
import Stepper, { Step, StepLabel } from 'material-ui/Stepper'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import Grid from 'material-ui/Grid'
import StepMethod from '../StepMethod'
import StepDeposit from '../StepDeposit'
import StepInstruction from '../StepInstruction'

const steps = ['Phương thức', 'Mức đầu tư', 'Chuyển tiền']

const StepContent = ({ 
  stepIndex, 
  handleChangeMethod, 
  selectedMethod, 
  bankAcc,
  setBankAcc,
  amount,
  setAmount, 
  transactionId
}) => {
  switch (stepIndex) {
    case 0:
      return (
        <StepMethod
          handleChangeMethod={handleChangeMethod}
          selectedMethod={selectedMethod}
        />
      )
    case 1:
      return <StepDeposit 
                methodId={selectedMethod} 
                bankAcc={bankAcc}
                setBankAcc={setBankAcc}
                amount={amount}
                setAmount={setAmount}
              />
    case 2:
      return <div className={classes.instructionContainer}><StepInstruction  transactionId={transactionId}/></div>
    default:
      return <div />
  }
}

export const Deposit = ({
  auth,
  activeStep,
  setActiveStep,
  handleChangeMethod,
  selectedMethod,
  bankAcc,
  setBankAcc,
  amount,
  setAmount,
  continueBtn,
  transactionId
}) => {
  return (
    <Grid item xl={9} md={12} sm={12} className={classes.container}>
      <ContainerHeader title={'Deposit'} />
      <Stepper
        className={classes.stepper}
        activeStep={activeStep}
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
        handleChangeMethod={handleChangeMethod}
        selectedMethod={selectedMethod}
        bankAcc={bankAcc}
        setBankAcc={setBankAcc}
        amount={amount}
        setAmount={setAmount}
        transactionId={transactionId}
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
            className={classes.primaryButton}
            onClick={continueBtn}>
            {activeStep !== 2 ? 'Tiếp tục' : 'Xác nhận'}
          </Button>
        </div>
      )}
    </Grid>
  )
}

Deposit.propTypes = {
  deposit: PropTypes.object // from enhancer (firestoreConnect + connect)
}

export default Deposit
