import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Flat from './components/flat';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Johannesburg from './components/johannesburg';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <React.StrictMode>
      <Navbar />
      {/* <Link to="/johannesburg">
        <button>Johannesburg</button>
      </Link> */}
      <Flat />
    </React.StrictMode>
  </Router>
);

reportWebVitals();
