import React, { Component } from 'react';
import { LeftOutlined,
         UserOutlined,
         MailOutlined,
         CalendarOutlined,
         AppstoreOutlined,
         SettingOutlined,
         UserAddOutlined,
         LinkOutlined } from '@ant-design/icons';
import { Button, Menu, Switch, Divider, Input, Select, Space, Cascader } from 'antd';
import ReactDOM from 'react-dom';

const { SubMenu } = Menu;

const { Option } = Select;

const selectBefore = (
    <Select defaultValue="http://" className="select-before">
      <Option value="http://">http://</Option>
      <Option value="https://">https://</Option>
    </Select>
  );
  const selectAfter = (
    <Select defaultValue="@ust.hk" className="select-after" style={{ width: 140 }}>
      <Option value="@ust.hk">@ust.hk</Option>
      <Option value="@cse.ust.hk">@cse.ust.hk</Option>
      <Option value="@connect.ust.hk">@connect.ust.hk</Option>
      <Option value="@ece.ust.hk">@ece.ust.hk</Option>
    </Select>
  );

const Login = () => {
    const [mode, setMode] = React.useState('inline');
    const [theme, setTheme] = React.useState('light');

        return (
            <div>
                <Button icon={<LeftOutlined />} size="large" href="https://www.google.com" />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <Menu
                    style={{ width: 350 }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode={mode}
                    theme={theme}
                >
                    <Menu.Item key="1" icon={<UserOutlined />}>
                        User
                    </Menu.Item>
                    <Menu.Item key="2" icon={<UserAddOutlined />}>
                        Guest
                    </Menu.Item>
                </Menu>

                <Space direction="vertical">
                    <UserOutlined />
                    <Input addonAfter={selectAfter} placeholder="alice" style={{ width: 300 }}/>
                    <Space direction="horizontal">
                        <Input placeholder="verification code" style={{ width: 222 }}/>
                        <Button>SEND</Button>
                    </Space>
                    <Button>LOGIN</Button>
                </Space>

                <Space direction="vertical">
                    <UserOutlined />
                    <Input placeholder="alice@gmail.com" style={{ width: 300 }}/>
                    <Space direction="horizontal">
                        <Input placeholder="verification code" style={{ width: 222 }}/>
                        <Button>SEND</Button>
                    </Space>
                    <Button>LOGIN</Button>
                </Space>
                
            </div>
        )

}

export default Login