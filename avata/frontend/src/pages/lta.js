import React, { Component } from 'react';
import { Button, Image, Space } from 'antd';
import { LeftOutlined, UserOutlined } from '@ant-design/icons';


class LTA extends Component{
  render(){
    return(
      <div>
        <Space direction="horizontal">
          <Button icon={<LeftOutlined />} size="large" href="https://www.google.com" />
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

          <Button icon={<UserOutlined />} size="large" href="https://www.google.com" />
        </Space>
        
        <br/>
        <Image
          width={500}
          src="https://fastly.4sqi.net/img/general/600x600/4622943_VKVRca2NrYKHLF0cuWZ_G5bPjLJm1sDKAp9PDiJrcSc.jpg"
        />
        <br/><br/><br/><br/>
        LTA
        <br/>
        Academic Building, 1/F
        <br/><br/><br/>
        <Button>ENTER</Button>
      </div>
    )
  }
}
export default LTA