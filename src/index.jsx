import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home/index'
import Survey from './pages/Survey/index'
import Results from './pages/Results/index'
import Freelances from './pages/Freelances/index'
import Header from './components/Header/index'
import Error from './components/Error/index'
import { Switch } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/survey/:questionNumber">
          <Survey />
        </Route>
        <Route path="/results">
          <Results />
        </Route>
        <Route path="/freelances">
          <Freelances />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>
)
