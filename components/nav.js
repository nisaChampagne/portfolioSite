import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Contact from '../components/navcomponents/contact.js';
import AboutMe from '../components/navcomponents/aboutme.js';
import Projects from '../components/navcomponents/projects.js';
import Resume from '../components/navcomponents/resume.js';



function Nav() {
  return (
    <Router>
        <div>
        <nav className='navs'>
          <ul>
            <li className='nav-links'>
              <Link to="/">Home</Link>
            </li>
             <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/projects/">Projects</Link>
            </li>
             <li>
              <Link to="/resume/">Resume</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" />
        <Route path="/contact/" component={Contact} />
        <Route path="/about/" component={AboutMe} />
        <Route path="/projects/" component={Projects} />
        <Route path="/resume/" component={Resume} />
      </div>
    </Router>
  );
}

export default Nav;