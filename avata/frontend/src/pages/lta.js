import React, { Component } from 'react';
import { Button, Image } from 'antd';
import { LeftOutlined, UserOutlined } from '@ant-design/icons';

class LTA extends Component{
  render(){
    return(
      <div>
        <Button icon={<LeftOutlined />} size="large" href="https://www.google.com" />
        <Button icon={<UserOutlined />} size="large" href="https://www.google.com" />
        <Image
          width={500}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
        LTA
        Academic Building, 1/F
        <Button>ENTER</Button>
      </div>
    )
  }
}
export default LTA