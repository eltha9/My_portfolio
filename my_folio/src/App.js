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

import git from './images/github.svg'
import linkedin from './images/linkedin.svg'
import pen from './images/pen.svg'

function App() {
  return (
    <div className="app">
      {/* <div className="left-marge">

        <div className="mini-div-menu"></div>
        <div className="mini-div-bottom"></div>
        <div className="home-footer-marge"></div>

      </div>
      <div className="middle-content">
      <Router>
        <nav>
        <Link to="/"><img src={logo} className="logo"/> </Link>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/project/yayzeiuyaizey">Project<sup>02</sup></Link>
          <Link to="/about">about</Link>
          <a href="#contact"></a> 
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
        <div className="mini-div-bottom">
          <div className="side-bar">
            <a className="link linkedin" href="https://www.linkedin.com/in/philippe-dos-santos-788395173/" title="My linkedin"><img src={linkedin} alt="linkedin logo"/></a>
            <a className="link git" href="https://github.com/eltha9" title="My github repo"><img src={git} alt="github logo"/></a>
            
            <div className="vertical-line"></div>
            <span>contact me</span>
            <div className="contact-pen">
              <img src={pen} alt=""/>
            </div>
          </div>
        </div>

        <div className="home-footer-marge"></div>


      </div> */}

      <Router>
        <div className="row navigation ">
          <div className="left-marge"></div>

          <div className="content">
            <nav>
            <Link to="/"><img src={logo} className="logo"/> </Link>
            <div className="links">
              <Link to="/">Home</Link>
              <Link to="/project/yayzeiuyaizey">Project<sup>02</sup></Link>
              <Link to="/about">about</Link>
              <a href="#contact"></a> 
            </div>
            </nav>
          </div>

          <div className="right-marge"></div>
        </div>


        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          {/* <Route exact path="/project/:name" component={Project}  /> */}

          <Route path="*">
            {/* <NoMatch /> */}
          </Route>
        </Switch>

      </Router>

    </div>
  )
}

export default App;
