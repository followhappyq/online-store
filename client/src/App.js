import React from "react"
import { Switch, Route } from "react-router-dom"

import { Home, NotFound } from "./pages"

const App = () => {
  return (
    <Switch>
      <Route exact path={["/"]} component={Home}></Route>
      <Route path="*" component={NotFound} />
    </Switch>
  )
}

export default App
