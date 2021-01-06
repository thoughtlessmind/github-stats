const { createMuiTheme } = require('@material-ui/core')

let theme = createMuiTheme({
  palette: {
    darkBlue: {
      main: '#12344d'
    }
  },
  typography: {
    h1: {
      color: 'red'
    },
    h4: {
      fontWeight: '700',
      fontSize: 18,
      fontFamily: 'Open Sans',
      color: '#12344D'
    },
    h5: {
      fontWeight: '700',
      fontSize: 13,
      fontFamily: 'Open Sans',
      color: '#3F3F3F',
      marginTop: 16
    },
    h6: {
      fontWeight: '700',
      fontSize: 13,
      fontFamily: 'Open Sans',
      color: '#12344D',
      marginTop: 16
    },
    body1: {
      fontSize: '12.3px',
      fontWeight: '600',
      fontFamily: 'Open Sans',
      color: 'rgba(0, 0, 0, 0.67)',
      margin: '16px 0',
      letterSpacing: '-0.3px',
      lineHeight: '1.7'
    }
  },
  props: {
    MuiButton: {
      variant: 'contained',
      color: 'primary'
    },
  },
  overrides: {

    MuiButton: {
      root: {
        fontSize: '0.8rem',
        textTransform: 'capitalize'
      }
    }
  },
  custom: {
    header: {
      height: 60
    },
    sidebar: {
      width: 60
    },
    sideDrawer: {
      width: 150
    }
  }
})

export default theme
