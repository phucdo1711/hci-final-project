import React from 'react'
import PropTypes from 'prop-types'
import classes from './Step1.scss'

// import components
import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider'
import { FormGroup, FormControlLabel } from 'material-ui/Form'
import Checkbox from 'material-ui/Checkbox'

class Step1 extends React.Component {
  componentWillMount(){
    this.props.setIsError(true);
  }
  handleChange = event => {
    this.props.setIsError(!event.target.checked)
  }
  render() {
    return (
      <Paper className={classes.paper}>
        <div className={classes.termContainer} />
        <Divider />
        <FormControlLabel
          control={
            <Checkbox
              checked={!this.props.isError}
              onChange={this.handleChange.bind(this)}
            />
          }
          label="Tôi đồng ý với điều khoản hợp đồng"
        />
      </Paper>
    )
  }
}

export default Step1
