import React from "react";
import PropTypes from "prop-types";
import classes from "./Invest.scss";
import { formatDate } from "utils/method-helper";
import { Link } from 'react-router'

import Card, {
  CardHeader,
  CardMedia,
  CardContent,
  CardActions
} from "material-ui/Card";

import Typography from "material-ui/Typography";
import IconButton from "material-ui/IconButton";
import MoreVertIcon from "material-ui-icons/MoreVert";
import List, { ListItem, ListItemText } from "material-ui/List";
import Menu, { MenuItem } from "material-ui/Menu";

export const Invest = ({
  investment,
  anchorEl,
  setAnchorEl,
  handleDeleteInvest
}) => (
  <div className={classes.container}>
    <Card className={classes.card}>
      <CardHeader
        action={
          <IconButton
            aria-owns={anchorEl ? "simple-menu" : null}
            aria-haspopup="true"
            onClick={event => {
              setAnchorEl(event.currentTarget);
            }}
          >
            <MoreVertIcon />
          </IconButton>
        }
        title={investment.name}
        subheader={`${formatDate(investment.time.start)} - ${formatDate(
          investment.time.end
        )}`}
      />
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        {investment.status === "active" ? (
          <MenuItem onClick={() => setAnchorEl(null)}>Dừng gói đầu tư</MenuItem>
        ) : (
          <MenuItem onClick={() => setAnchorEl(null)}>Mở gói đầu tư</MenuItem>
        )}
         <MenuItem
          component={Link} to={`/admin/investments/edit/${investment.id}`} color="primary"
        >
          Sửa
        </MenuItem>
        <MenuItem
          onClick={() => {
            setAnchorEl(null);
            handleDeleteInvest(investment.id);
          }}
        >
          Xoá
        </MenuItem>
      </Menu>
      {/* <CardContent> */}
      <List>
        <ListItem button>
          <ListItemText
            primary="Mức đầu tư"
            secondary="Hạn mức có thể đầu tư"
          />
          <Typography className={classes.boldText}>10 -100 tỷ</Typography>
        </ListItem>
        <ListItem button>
          <ListItemText
            primary="Thời gian đáo hạn"
            secondary="Thời gian đầu tư"
          />
          <Typography className={classes.boldText}>
            {investment.expTime} ngày
          </Typography>
        </ListItem>
        <ListItem button>
          <ListItemText
            primary="Lãi suất"
            secondary="Lãi suất gói đầu tư theo ngày"
          />
          <Typography className={classes.boldText}>
            {investment.interestRateMonth / 30}%/ngày
          </Typography>
        </ListItem>
        <ListItem button>
          <ListItemText
            primary="Đã đầu tư"
            secondary="Số tiền đã huy động được"
          />
          <Typography className={classes.boldText}>
            {investment.invested}
          </Typography>
        </ListItem>
        <ListItem button>
          <ListItemText
            primary="Tổng gói đầu tư"
            secondary="Số tiền cần huy động"
          />
          <Typography className={classes.boldText}>
            {investment.totalInvest}
          </Typography>
        </ListItem>
        <ListItem button>
          <ListItemText
            primary="Trạng thái"
            secondary="Trạng thái gói đầu tư"
          />
          <Typography className={classes.boldText}>
            {investment.status}
          </Typography>
        </ListItem>
      </List>
      {/* </CardContent> */}
    </Card>
  </div>
);

Invest.propTypes = {
  investment: PropTypes.object.isRequired // from enhancer (firestoreConnect + connect)
};

export default Invest;
