import { createMuiTheme } from '@material-ui/core';

export const lightTheme = createMuiTheme({
  overrides: {
    MuiCard: {
      root: {
        backgroundColor: 'bisque',
        display: 'flex',
        float: 'left',
      }
    },
    MuiCardMedia: {
      root: {
        display: 'flex',
        float: 'right',
      }
    },
    MuiCardContent: {
      root: {
        backgroundColor: 'bisque',
        flex: '1 0 auto',
        fontSize: '12px',
      }
    },
    MuiContainer: {
      root: {
        backgroundColor: 'bisque',
      }
    },
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: 'bisque'
        },
        h5: {
          fontcolor: 'white',
          color: 'black'
        }
      }
    },
    MuiButton: {
      root: {
        color: 'white'
      }
    },
    MuiLink: {
      root: {
        color: 'white'
      }
    },
    MuiTypography: {
      root: {
        color: 'white'
      }
    }
  }
});