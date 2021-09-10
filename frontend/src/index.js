import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Users from "./components/Users";

ReactDOM.render(
  <React.StrictMode> 
    <div>
      <App /> 
      <Users />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
