import React, { useEffect } from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import { App } from 'containers'
import Home from 'components/Home/Home'



const Routes = () => {
  // const history = createBrowserHistory()

  return (
    <BrowserRouter >
      <Switch>
        <App>
          <Home />
        </App>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
