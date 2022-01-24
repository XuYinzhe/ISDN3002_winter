import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LTA from './pages/LTA';
import LTA_I from './pages/LTA-I';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { UserOutlined, SearchOutlined } from '@ant-design/icons';

ReactDOM.render(
  <Router>
    <App path="/">
      <LTA path="LTA">
        <LTA_I path="LTA_I" />
      </LTA>
    </App>
  </Router>,
  
  document.getElementById('root'),

);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();