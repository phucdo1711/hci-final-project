import React from "react";
import PropTypes from "prop-types";
import classes from "./newInvest.scss";
import { SketchPicker } from "react-color";

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

export const newInvest = ({
  anchorEl,
  setAnchorEl,
  color,
  setColor,
  handleCreateInvest
}) => {
  return (
    <Paper className={classes.container}>
      <div className={classes.header}>
        <Typography type="headline" component="h3">
          New Investment
        </Typography>
      </div>
      <div className={classes.body}>
        <form>
          <FormControl fullWidth className={classes.formControl}>
            <InputLabel htmlFor="name">Tên gói đầu tư</InputLabel>
            <Input id="name" type="text" />
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="totalInvest">Tổng đầu tư</InputLabel>
            <Input
              id="totalInvest"
              // value={}
              endAdornment={<InputAdornment position="end">‎₫</InputAdornment>}
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="minInvest">Đầu tư ít nhất</InputLabel>
            <Input
              id="minInvest"
              // value={}
              endAdornment={<InputAdornment position="end">‎₫</InputAdornment>}
            />
          </FormControl>
          <div>
            <FormControl className={classes.formControl}>
              <TextField
                id="date"
                label="Từ ngày"
                type="date"
                // defaultValue="2017-05-24"
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
                // defaultValue="2017-05-24"
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
                  // value={}
                />
              </FormControl>
              <FormControl fullWidth className={classes.formControl}>
                <InputLabel htmlFor="investColor">Màu nền</InputLabel>
                <Input
                  id="investColor"
                  value={JSON.stringify(color)}
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
              <SketchPicker color={color} onChange={color => setColor(color.rgb)} />
            </Menu>
          </Grid>
          <div className={classes.footer}>
            <Button raised className={classes.submitButton} onClick={handleCreateInvest}>
              Submit
            </Button>
            <Button>Huỷ</Button>
          </div>
        </form>
      </div>
    </Paper>
  );
};

newInvest.propTypes = {
  newinvest: PropTypes.object // from enhancer (firestoreConnect + connect)
};

export default newInvest;
