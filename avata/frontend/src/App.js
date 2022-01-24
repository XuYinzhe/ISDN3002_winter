import React, { Component } from 'react';
import { Button, Tooltip, Input, Divider, Space } from 'antd';
import { UserOutlined, SearchOutlined } from '@ant-design/icons';
import './App.css';
import logo from './pages/logo-icon.png'
import { BrowserRouter as Router, Route } from "react-router-dom";
import LTA from './pages/LTA';
import ReactDOM, { render } from 'react-dom';
import { Link, useNavigate } from 'react-router-dom';


class App extends Component {

  render(){
    return (  
      <div>
        <br />
        <img src={logo} className="App-logo" alt="logo" />
        
        <br />
        <br />
        <Space direction="horizontal">
          <Input size="large" placeholder="Search room" prefix={<SearchOutlined />} style={{ width: 1380 }} />
          <Button icon={<UserOutlined />} size="large" href="https://www.google.com" />
        </Space>

        <>
        <Divider orientation="left" orientationMargin="0">
        Room List
        </Divider>
          <Button type="text">
            LTA
          </Button>
        <Divider />
          <Button type="text">
            LTB
          </Button>
        <Divider />
          <Button type="text">
            LTC
          </Button>
        <Divider />
          <Button type="text">
            LTD
          </Button>
        <Divider />
          <Button type="text">
            LTE
          </Button>
        <Divider />
          <Button type="text">
            LTF
          </Button>
        <Divider />
          <Button type="text">
            LTG
          </Button>
        <Divider />
          <Button type="text">
            LTH
          </Button>
        <Divider />
          <Button type="text">
            LTI
          </Button>
        <Divider />
          <Button type="text">
            LTJ
          </Button>
        <Divider />
          <Button type="text">
            LTK
          </Button>
        <Divider />
          <Button type="text">
            Room 1006
          </Button>
        <Divider />
          <Button type="text">
            Room 2300
          </Button>
        <Divider />
          <Button type="text">
            Room 3200
          </Button>
        <Divider />
          <Button type="text">
            Room 4002
          </Button>
        <Divider />
          <Button type="text">
            Room 4223
          </Button>
        <Divider />
        </>
      </div>
    );
  }
}

export default App

