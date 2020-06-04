import React from "react"
import logo from "./logo.svg"
import "./App.css"

import React from "react"

const App = () => {
  const App = () => (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/list" component={List} />
      </Switch>
    </div>
  )
  return (
    <Switch>
      <App />
    </Switch>
  )
}

export default App
