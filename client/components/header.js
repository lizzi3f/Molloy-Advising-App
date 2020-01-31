import React from 'react';
import '../CSS/main';
import '../CSS/media';
import '../CSS/login';
import '../CSS/logout';

const Header = () => {
  return (
    <header>
      <nav>
        <p>Molloy Advising</p>
        <div className="container">
                  <div id="menu-icon"><img alt="menu" src="menuicon.png" width="40px" height="40px" /></div>
                  <div className="dropdown-content">
                      <a href= "main.html">Home</a>
                      <a href= "coursesearch.html">Course Search</a>
                      <a href= "myacademics.html">My Academics</a>
                      <a href= "logout.html" className="logout">Logout</a>
                  </div>
      </div>
    </nav>
    </header>
  );
};

export default Header;
