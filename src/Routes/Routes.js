import React, { useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { App } from 'containers'
import { Home } from 'components'
import UserStats from 'containers/UserStats/UserStats'
// import Home from 'components/Home/Home'

const Routes = () => {
  // const history = createBrowserHistory()

  return (
    <BrowserRouter>
      <Switch>
        <App>
          <Route path="/" component={UserStats} />
        </App>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
