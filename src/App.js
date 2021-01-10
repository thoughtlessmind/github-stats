import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import { MuiThemeProvider } from '@material-ui/core'
import { themes } from 'themes'
import configureStore from 'app-redux/store/store'
import Routes from 'Routes/Routes'

const store = configureStore()

function App() {
  return (
    <MuiThemeProvider themes={themes}>
      <Provider store={store}>
        <Routes />
      </Provider>
    </MuiThemeProvider>
  )
}

export default App;
