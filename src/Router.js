import React, { Component } from 'react'
import { Route, Switch, withRouter, BrowserRouter } from 'react-router-dom'
import Index from './pages/Index'


class Router extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={withRouter(Index)} />
        </Switch>
      </BrowserRouter>
    )
  }
}
export default Router