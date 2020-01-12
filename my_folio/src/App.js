import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom"


//page import 
import Home from './pages/Home'
import About from './pages/About'
import Project from './pages/Project'
import NoMatch from './pages/NoMatch'



function App() {
  return (
    <div className="app">
      <Router>
        <Link to="/">Home</Link>
        <Link to="/project/yayzeiuyaizey">Project</Link>
        <Link to="/about">about</Link>

        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route exact path="/project/:id" component={Project}  />

          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>

      </Router>
    </div>
  )
}

export default App;
