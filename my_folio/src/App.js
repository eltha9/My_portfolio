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

//image import
import logo from './images/logo.svg'

function App() {
  return (
    <div className="app">
      <div className="left-marge">
        <div className="mini-div-menu"></div>
      </div>
      <div className="middle-content">
      <Router>
        <nav>
        <Link to="/"><img src={logo} className="logo"/> </Link>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/project/yayzeiuyaizey">Project<sup>02</sup></Link>
          <Link to="/about">about</Link>
        </div>
        </nav>


        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route exact path="/project/:name" component={Project}  />

          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>

        </Router>
      </div>
      <div className="right-marge">
        <div className="mini-div-menu"></div>
      </div>
    </div>
  )
}

export default App;
