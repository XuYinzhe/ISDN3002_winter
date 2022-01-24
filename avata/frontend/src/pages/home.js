import React from 'react';
import { Button, Tooltip } from 'antd';
import { IdcardOutlined } from '@ant-design/icons';
import logo1 from './logo-icon.png';

import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import ReactDOM from 'react-dom';

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

const onSearch = value => console.log(value);

const home = () =>{
  return (
    <div>
      <header>
        <img src={logo1} className="App-logo" alt="logo1"/>
      </header>
      <Tooltip title="search">
        <Button shape="circle" icon={<IdcardOutlined />} size="large" />
      </Tooltip>

      <Space direction="vertical">
        <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
        <Search placeholder="input search text" allowClear onSearch={onSearch} style={{ width: 200 }} />
        <Search placeholder="input search text" onSearch={onSearch} enterButton />
      </Space>
    </div>

    
  );
}
export default home;