import logo from './logo.svg';
import logo1 from './pages/logo-icon.png';
import 'antd/dist/antd.css';
import { Button, Tooltip } from 'antd';
import { IdcardOutlined } from '@ant-design/icons';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import navbar from "./components/navbar"
import login from './pages/login';
import home from './pages/home'

function App() {
  return (
    
    <div>
      <header>
        <img src={logo1} className="App-logo" alt="logo1"/>
      </header>
      <Tooltip title="search">
        <Button shape="circle" icon={<IdcardOutlined />} size="large" />
      </Tooltip>
    

    <Router>
      <navbar />
      <Routes>
        <Route path='/home' exact component={home} />
        <Route path='/login' component={login} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
