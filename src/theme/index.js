import { createTheme } from '@mui/material';
import { spacing } from '@mui/system';

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1000,
      lg: 1200,
      xl: 1920
    }
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true
      },
      styleOverrides: {
        root: {
          textTransform: 'none'
        },
        sizeSmall: {
          padding: '6px 16px'
        },
        sizeMedium: {
          padding: '8px 20px'
        },
        sizeLarge: {
          padding: '11px 24px'
        },
        textSizeSmall: {
          padding: '7px 12px'
        },
        textSizeMedium: {
          padding: '9px 16px'
        },
        textSizeLarge: {
          padding: '12px 16px'
        },
        contained: {
          boxShadow: 'none',
          '&:active': {
            boxShadow: 'none',
          },
        }
      }
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true
      }
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '32px 24px',
          '&:last-child': {
            paddingBottom: '32px'
          }
        }
      }
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: {
          variant: 'h6'
        },
        subheaderTypographyProps: {
          variant: 'body2'
        }
      },
      styleOverrides: {
        root: {
          padding: '32px 24px'
        }
      }
    },
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          boxSizing: 'border-box',
          margin: 0,
          padding: 0
        },
        html: {
          MozOsxFontSmoothing: 'grayscale',
          WebkitFontSmoothing: 'antialiased',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100%',
          width: '100%'
        },
        body: {
          display: 'flex',
          flex: '1 1 auto',
          flexDirection: 'column',
          minHeight: '100%',
          width: '100%'
        },
        '#__next': {
          display: 'flex',
          flex: '1 1 auto',
          flexDirection: 'column',
          height: '100%',
          width: '100%'
        }
      }
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#081627',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: '#E6E8F0'
        }
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          margin: '0 16px',
          minWidth: 0,
          padding: 0,
          // [this.breakpoints.up('md')]: {
          //   padding: 0,
          //   minWidth: 0,
          // },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          marginLeft: spacing(1),
        },
        indicator: {
          height: 3,
          borderTopLeftRadius: 3,
          borderTopRightRadius: 3,
          backgroundColor: '#fff',
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: '#F3F4F6',
          '.MuiTableCell-root': {
            color: '#374151'
          },
          borderBottom: 'none',
          '& .MuiTableCell-root': {
            borderBottom: 'none',
            fontSize: '12px',
            fontWeight: 600,
            lineHeight: 1,
            letterSpacing: 0.5,
            textTransform: 'uppercase'
          },
          '& .MuiTableCell-paddingCheckbox': {
            paddingTop: 4,
            paddingBottom: 4
          }
        }
      }
    },
  },
  palette: {
    neutral: {
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#D1D5DB',
      400: '#9CA3AF',
      500: '#6B7280',
      600: '#4B5563',
      700: '#374151',
      800: '#1F2937',
      900: '#111827'
    },
    action: {
      active: '#6B7280',
      focus: 'hsla(217, 19%, 27%, 0.12)',
      hover: 'hsla(217, 19%, 27%, 0.04)',
      focusOpacity: 0.2,
      selectedOpacity: 0.2,
      selected: 'hsla(217, 19%, 27%, 0.08)',
      disabledBackground: 'hsla(217, 19%, 27%, 0.12)',
      disabled: 'hsla(217, 19%, 27%, 0.26)'
    },
    background: {
      default: '#F9FAFC',
      paper: '#FFFFFF'
    },
    divider: 'hsla(228, 25%, 92%, 10%)',
    primary: {
      main: '#1F2891',
    },
    secondary: {
      main: '#FB5A2E',
      dark: '#D73B21'
    },
    error: {
      main: '#F24C3D'
    },
    warning: {
      main: '#F2BE22'
    },
    success: {
      main: '#26A699'
    },
    info: {
      main: '#64748B'
    },
    text: {
      primary: '#121828',
      secondary: '#65748B',
      disabled: 'hsla(217, 19%, 27%, 0.48)'
    }
  },
  shape: {
    borderRadius: 8
  },
  shadows: [
    'none',
    '0px 1px 1px hsla(215, 16%, 47%, 0.06), 0px 1px 2px hsla(215, 16%, 47%, 0.1)',
    '0px 1px 2px hsla(215, 16%, 47%, 0.12)',
    '0px 1px 4px hsla(215, 16%, 47%, 0.12)',
    '0px 1px 5px hsla(215, 16%, 47%, 0.12)',
    '0px 1px 6px hsla(215, 16%, 47%, 0.12)',
    '0px 2px 6px hsla(215, 16%, 47%, 0.12)',
    '0px 3px 6px hsla(215, 16%, 47%, 0.12)',
    '0px 2px 4px hsla(215, 28%, 17%, 0.06), 0px 4px 6px hsla(215, 16%, 47%, 0.12)',
    '0px 5px 12px hsla(215, 16%, 47%, 0.12)',
    '0px 5px 14px hsla(215, 16%, 47%, 0.12)',
    '0px 5px 15px hsla(215, 16%, 47%, 0.12)',
    '0px 6px 15px hsla(215, 16%, 47%, 0.12)',
    '0px 7px 15px hsla(215, 16%, 47%, 0.12)',
    '0px 8px 15px hsla(215, 16%, 47%, 0.12)',
    '0px 9px 15px hsla(215, 16%, 47%, 0.12)',
    '0px 10px 15px hsla(215, 16%, 47%, 0.12)',
    '0px 12px 22px -8px hsla(215, 16%, 47%, 0.25)',
    '0px 13px 22px -8px hsla(215, 16%, 47%, 0.25)',
    '0px 14px 24px -8px hsla(215, 16%, 47%, 0.25)',
    '0px 10px 10px hsla(215, 28%, 17%, 0.04), 0px 20px 25px hsla(215, 28%, 17%, 0.1)',
    '0px 25px 50px hsla(215, 16%, 47%, 0.25)',
    '0px 25px 50px hsla(215, 16%, 47%, 0.25)',
    '0px 25px 50px hsla(215, 16%, 47%, 0.25)',
    '0px 25px 50px hsla(215, 16%, 47%, 0.25)'
  ],
  typography: {
    button: {
      fontWeight: 600
    },
    fontFamily: '"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.5
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.57
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.75
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: 1.57
    },
    overline: {
      fontSize: '0.75rem',
      fontWeight: 600,
      letterSpacing: '0.5px',
      lineHeight: 2.5,
      textTransform: 'uppercase'
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: 1.66
    },
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.375
    },
    h2: {
      fontWeight: 700,
      fontSize: '3rem',
      lineHeight: 1.375
    },
    h3: {
      fontWeight: 600,
      fontSize: '2.25rem',
      lineHeight: 1.375
    },
    h4: {
      fontWeight: 600,
      fontSize: '2rem',
      lineHeight: 1.375
    },
    h5: {
      fontWeight: 500,
      fontSize: '1.5rem',
      lineHeight: 1.375
    },
    h6: {
      fontWeight: 500,
      fontSize: '1.125rem',
      lineHeight: 1.375
    }
  },
  mixins: {
    toolbar: {
      minHeight: 48,
    },
  },
});
