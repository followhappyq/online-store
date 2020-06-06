import React from "react"
import { Switch, Route } from "react-router-dom"

import { Home, NotFound, SignUp, SignIn, Products } from "./pages"

const App = () => {
  return (
    <Switch>
      <Route exact path={["/"]} component={Home}></Route>
      <Route exact path={["/signup"]} component={SignUp} />
      <Route exact path={["/signin"]} component={SignIn} />
      <Route exact path={["/products"]} component={Products} />
      <Route path="*" component={NotFound} />
    </Switch>
  )
}

export default App
