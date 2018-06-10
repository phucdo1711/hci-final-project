import React from 'react'
import PropTypes from 'prop-types'
import classes from './FilterToolbar.scss'

import {Toolbar, Typography, IconButton} from 'material-ui'
import MoreVertIcon from 'material-ui-icons/MoreVert'
import Menu, { MenuItem } from 'material-ui/Menu'

//react redux 
import { compose } from 'redux'
import { withHandlers, withState } from 'recompose'

const enhance = compose(
  withState('anchorEl', 'setAchorEl', null),
  withHandlers({
    handleClick: ({ setAchorEl }) => event => {
      setAchorEl(event.currentTarget)
    },
    handleClose: ({ setAchorEl }) => () => {
      setAchorEl(null)
    },  
  }),
)

export const FilterToolbar = ({ 
  title,
  options,
  anchorEl, 
  handleClick, 
  handleClose, 
  filterType,
  setFilterType
}) => (
  <Toolbar>
      <div className={classes.title}>
        <Typography type="title">{title || ''}</Typography>
      </div>
      <div className={classes.spacer} />
      <div className={classes.actions}>
        <IconButton
          aria-label="More"
          aria-owns={anchorEl ? 'fade-menu' : null}
          aria-haspopup="true"
          onClick={handleClick}>
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="fade-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}>
          {options.map(option => (
            <MenuItem
              key={option.type}
              selected={option.type === filterType}
              onClick={() => {
                setFilterType(option.type);
                handleClose();
              }}
              style={{color: option.color}}  
            >
              {option.name}
            </MenuItem>
          ))}
        </Menu>
      </div>
    </Toolbar>
)

FilterToolbar.propTypes = {
  title: PropTypes.string,
  options: PropTypes.array.isRequired, 
  filterType: PropTypes.string,
  setFilterType: PropTypes.func
}

export default enhance(FilterToolbar)
