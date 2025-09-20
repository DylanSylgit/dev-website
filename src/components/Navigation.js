import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '20px', margin: 0, padding: 0 }}>
        <li>
          <Link to="/" style={{ textDecoration: 'none', color: '#333' }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/aboutme" style={{ textDecoration: 'none', color: '#333' }}>
            About Me
          </Link>
        </li>
        <li>
          <Link to="/projects" style={{ textDecoration: 'none', color: '#333' }}>
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
