import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';

function Navigation() {
  return (
    <>
      <header>
        <h1>Math Magician</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/calculator">calculator</Link>
          <Link to="/quotes">quotes</Link>
        </nav>
      </header>
    </>
  );
}
export default Navigation;
