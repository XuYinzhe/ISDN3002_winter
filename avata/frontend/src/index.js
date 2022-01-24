import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LTA from './pages/LTA';
import LTA_I from './pages/LTA-I';
import Login from './pages/login';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { UserOutlined, SearchOutlined } from '@ant-design/icons';
import { render } from "react-dom";


render(
  <BrowserRouter>
    <LTA_I />
  </BrowserRouter>,
  //<Login />,
  //<App />,
  //<LTA />,
  //<LTA_I />,
  
  document.getElementById('root'),

);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();