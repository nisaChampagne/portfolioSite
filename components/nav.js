    
import React from 'react';


function Nav (){
 return(
     <div>
         <h1 className='name-h1'>Nisa Champagne</h1>
         <nav className='navs'>
            <li><a href='index.html' className='nav-a'>Home</a></li>
            <li><a href='contact.js' className='nav-a'>Contact</a></li>
            <li><a href='aboutme.js' className='nav-a'>About</a></li>
            <li><a href='projects.js'
            className='nav-a'>Projects</a></li>
            <li><a href='resume.js'
            className='nav-a'>Resume</a></li>
         </nav>
     </div>
 );
}

export default Nav;