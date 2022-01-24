import React, { Component } from 'react';
import logo from './logo.svg';
import { Button, Tooltip, Input, Divider } from 'antd';
import { IdcardOutlined, SearchOutlined } from '@ant-design/icons';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import login from './pages/login';
import home from './pages/home'
import ReactDOM, { render } from 'react-dom';
import { Components } from 'antd/lib/date-picker/generatePicker';

class App extends Component {
  render(){
    return (  
      <div>
        <Input size="large" placeholder="Search room" prefix={<SearchOutlined />} />
        <Button icon={<IdcardOutlined />} size="large" href="https://www.google.com" />
        <>
        <Divider orientation="left" orientationMargin="0">
        Room List
        </Divider>
          <p>LTA</p>
        <Divider />
          <p>LTB</p>
        <Divider />
          <p>LTC</p>
        <Divider />
          <p>LTD</p>
        <Divider />
          <p>LTE</p>
        <Divider />
          <p>LTF</p>
          <Divider />
          <p>LTG</p>
        <Divider />
          <p>LTH</p>
        <Divider />
          <p>LTI</p>
        <Divider />
          <p>LTJ</p>
        <Divider />
          <p>LTK</p>
          <Divider />
          <p>Room 1006</p>
        <Divider />
          <p>Room 2300</p>
        <Divider />
          <p>Room 3200</p>
        <Divider />
          <p>Room 4002</p>
        <Divider />
          <p>Room 4223</p>
        </>
      </div>
    );
  }
  
}


export default App
