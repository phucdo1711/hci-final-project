import React from 'react'
import PropTypes from 'prop-types'
import classes from './TabVerification.scss'

// import ui
import { Grid, Avatar, Typography, Button, Paper } from 'material-ui'
import Input, { InputLabel, InputAdornment } from 'material-ui/Input'
import { Phone, Camera, Upload } from 'react-feather'
import images from 'static/images'

export class TabVerification extends React.Component {
  render() {
    const { handleImageChange, imgPreviewUrl } = this.props
    return (
      <Paper>
      <Grid container className={classes.container}>
        {/* LEFT  */}
        <Grid item md={6} sm={12} xs={12} className={classes.leftContainer}>
          <Typography type="headline" className={classes.title}>
            Phone verify
          </Typography>
          <Phone size={70} color="#a3a3a3" className={classes.bigIcon} />
          <div className={classes.phoneGroup}>
            <Input
              // value={this.state.amount}
              // onChange={this.handleChange('amount')}
              startAdornment={
                <InputAdornment position="start">
                  <Phone size={18} color="#a3a3a3" />
                </InputAdornment>
              }
              defaultValue="0979878966"
            />
            <Button className={classes.verifyPhoneBtn}>Verify</Button>
          </div>
        </Grid>

        {/* RIGHT  */}
        <Grid item md={6} sm={12} xs={12} className={classes.rightContainer}>
          <Typography type="headline" className={classes.title}>
            Identity Card
          </Typography>
          {/* Render identity card */}
          {imgPreviewUrl ? (
            <img
              src={imgPreviewUrl}
              width="90%"
              className={classes.pickedImage}
            />
          ) : (
            <div className={classes.imgBackground}>
              <img src={images.userIdentity} height="70" />
            </div>
          )}
          <div className={classes.btnGroup}>
            {/* visible input trick for upload image */}
            <input
              id="myInput"
              type="file"
              ref={ref => (this.myInput = ref)}
              style={{ display: 'none' }}
              onChange={handleImageChange}
            />
            <Button
              type="file"
              className={classes.transparentBtn}
              onClick={e => this.myInput.click()}>
              <Upload size={15} className={classes.iconBtn} />
              Upload
            </Button>
            <Button className={classes.primaryButton}>
              <Camera size={15} className={classes.iconBtn} />
              Use Webcam
            </Button>
          </div>
        </Grid>
      </Grid>
      </Paper>
    )
  }
}

TabVerification.propTypes = {
  handleImageChange: PropTypes.func.isRequired
}

export default TabVerification
