import React from "react";
import PropTypes from "prop-types";
import Navbar from "containers/Navbar";
import classes from "./CoreLayout.scss";
import { Notifications } from "modules/notification";
import "styles/core.scss";
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";

import purple from "material-ui/colors/purple";
import green from "material-ui/colors/green";
import indigo from "material-ui/colors/indigo";

const font = '"Open Sans", sans-serif';
const theme = createMuiTheme({
  palette: {
    // primary: indigo // Purple and green play nicely together.
    primary: {
      ...indigo,
      A400: "#1370DD",
      A500: "#1370DD",
      50: "#1370DD",
      100: "#1370DD",
      200: "#1370DD",
      300: "#1370DD",
      400: "#1370DD",
      500: "#1370DD",
      600: "#1370DD",
      700: "#1370DD",
      800: "#1370DD",
      900: "#1370DD",
      A100: "#1370DD",
      A200: "#1370DD",
      A400: "#1370DD",
      A700: "#1370DD"
    }
    //   error: red
  },
  typography: {
    fontFamily: font,
    button: {
      // height: 48,
    }
  },
  shadows: [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
  ],
  overrides: {
    MuiButton: {
      root: {
        // borderColor:'#BCCCEB',
        fontWeight: "600",
        // color: 'rgba(0,0,0,.9)',
        // fontSize: '16px !important',
        // letterSpacing: '0 !important',
        // fontStyle: 'normal!important',
        // textTransform: 'unset',
        borderRadius: "100px",
        minHeight: "30px",
        minWidth: 120,
        lineHeight: 0.8
        // border: '1px solid rgba(0,0,0,.15)',
        // margin: '4px',
        // padding:"0 16px"
        // fontStyle: 'italic',
        // borderRadius: 100,
      }
    },
    MuiAppBar: {
      root: {
        boxShadow: "0 0px 1px rgba(0,0,0,.09)"
      }
    },
    MuiPaper: {
      root: {
        boxShadow: "0 3px 5px 2px rgba(231, 231, 231, 0.3)"
      }
    },
    MuiListItem: {
      button: {
        "&:hover": {
          backgroundColor: "rgba(0,0,0,0.02)"
        }
      }
    },
    MuiMenuItem: {
      root: {
        "&:hover": {
          backgroundColor: "rgba(0,0,0,0.02)"
        }
      }
    },
    MuiDrawer: {
      paperAnchorDockedLeft: {
        borderRight: "1px solid rgba(0, 0, 0, 0.05)"
      }
    },
    MuiDivider: {
      default: {
        backgroundColor: "rgba(0, 0, 0, 0.06)"
      }
    },
    MuiTabs: {
      root: {
        minHeight: "28px"
      }
    },
    MuiTab: {
      root: {
        height: "28px",
        borderRadius: "15px",
        zIndex: "5",
        minWidth: "100px !important"
      },
      rootPrimarySelected: {
        color: "rgba(255,255,255,0.9)"
      },
      labelContainer: {
        paddingTop: "0",
        paddingBottom: "0"
      }
    },
    MuiTabIndicator: {
      root: {
        height: "28px",
        borderRadius: "15px",
        zIndex: "4"
      },
      colorPrimary: {
        background: "linear-gradient(45deg, #1370DD, #30A5E7) !important;"
      }
    },
    MuiTableRow: {
      hover: {
        "&:hover": {
          backgroundColor: "rgba(0,0,0,0.02)"
        }
      }
    },
    MuiBottomNavigationAction: {
      root: {
        minWidth: 40
      }
    },
    MuiInput: {
      underline: {
        "&:hover:not([class*='MuiInput-disabled']):before": {
          backgroundColor: "rgba(19, 112, 221, 0.6)"
        }
      }
    }
  }
});

export const CoreLayout = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    <div>
      <div className={classes.children}>{children}</div>
      <Notifications />
    </div>
  </MuiThemeProvider>
);

CoreLayout.propTypes = {
  children: PropTypes.element.isRequired
};

export default CoreLayout;
