import React from "react";
import PropTypes from "prop-types";
import classes from "./EditInvest.scss";
import { SketchPicker } from "react-color";
import { formatDate2 } from "utils/method-helper";
//Material ui
import Paper from "material-ui/Paper";
import Grid from "material-ui/Grid";
import TextField from "material-ui/TextField";
import Typography from "material-ui/Typography";
import IconButton from "material-ui/IconButton";
import Input, { InputLabel, InputAdornment } from "material-ui/Input";
import { FormControl, FormHelperText } from "material-ui/Form";
import { Menu, Button } from "material-ui";
import Fade from "material-ui/transitions/Fade";

export const EditInvest = ({
  invest,
  anchorEl,
  setAnchorEl,
  color,
  setColor
}) => {
  // console.log(invest);
console.log(`${formatDate2(invest.time.start)}`);
  // setColor(JSON.parse(invest.styles.color))

  return (
    <Paper className={classes.container}>
      <div className={classes.header}>
        <Typography type="headline" component="h3">
          Edit Investment
        </Typography>
      </div>
      <div className={classes.body}>
        <form>
          <FormControl fullWidth className={classes.formControl}>
            <InputLabel htmlFor="name">Tên gói đầu tư</InputLabel>
            <Input id="name" type="text" value={invest.name} />
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="totalInvest">Tổng đầu tư</InputLabel>
            <Input
              id="totalInvest"
              value={invest.totalInvest}
              endAdornment={<InputAdornment position="end">‎₫</InputAdornment>}
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="minInvest">Đầu tư ít nhất</InputLabel>
            <Input
              id="minInvest"
              value={invest.minInvest}
              endAdornment={<InputAdornment position="end">‎₫</InputAdornment>}
            />
          </FormControl>
          <div>
            <FormControl className={classes.formControl}>
              <TextField
                id="date"
                label="Từ ngày"
                type="date"
                defaultValue={`${formatDate2(invest.time.start)}`}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true
                }}
              />
            </FormControl>
            <FormControl className={classes.formControl}>
              <TextField
                id="date"
                label="Đến ngày"
                type="date"
                defaultValue={`${formatDate2(invest.time.end)}`}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true
                }}
              />
            </FormControl>
          </div>
          <Typography type="title" className={classes.title}>
            Styles
          </Typography>
          <Grid container>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth className={classes.formControl}>
                <InputLabel htmlFor="ribbon">Ribbon</InputLabel>
                <Input
                  id="ribbon"
                  value={invest.styles.ribbon}
                />
              </FormControl>
              <FormControl fullWidth className={classes.formControl}>
                <InputLabel htmlFor="investColor">Màu nền</InputLabel>
                <Input
                  id="investColor"
                  value={JSON.stringify(invest.styles.color)}
                  // onFocus={(event) => {setAnchorEl(event.currentTarget)}}
                  endAdornment={
                    <InputAdornment position="end">
                      <div
                        aria-owns={anchorEl ? "fade-menu" : null}
                        aria-haspopup="true"
                        onClick={event => setAnchorEl(event.currentTarget)}
                        className={classes.colorCircle}
                        style={{
                          background: `linear-gradient(135deg, ${`rgba(${
                            color.r
                          }, ${color.g}, ${color.b}, ${color.a})`}, 
                      ${`rgba(${color.r}, ${color.g}, ${
                        color.b + 30 > 255 ? 255 : color.b + 30
                      }, 0.9)`}`,
                          borderRadius: 6
                        }}
                      >
                        {" "}
                      </div>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Grid>

            <Menu
              id="fade-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(null)}
              transition={Fade}
            >
              <SketchPicker
                color={color}
                onChange={color => setColor(color.rgb)}
              />
            </Menu>
          </Grid>
          <div className={classes.footer}>
            <Button
              raised
              className={classes.submitButton}
              // onClick={handleCreateInvest}
            >
              Submit
            </Button>
            <Button>Huỷ</Button>
          </div>
        </form>
      </div>
    </Paper>
  );
};

EditInvest.propTypes = {
  // editinvest: PropTypes.object // from enhancer (firestoreConnect + connect)
};

export default EditInvest;
