import React, { Component } from 'react';
import { Button, Image, Radio, Input, Space} from 'antd';
import { LeftOutlined, UserOutlined } from '@ant-design/icons';
import Photo from './IMG_6782.JPG'

class LTA_I extends Component{
    state = {
        value: 1,
    };
    
    onChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
          value: e.target.value,
        });
    };
    
    render(){
        const { value } = this.state;

        return(
            <div>
                <Button icon={<LeftOutlined />} size="large" href="https://www.google.com" />
                <Button icon={<UserOutlined />} size="large" href="https://www.google.com" />
                <Image
                    width={1600}
                    src={Photo}
                />

                <div>
                    Do you bring personal device?
                </div>
                <br />
                <Radio.Group onChange={this.onChange} value={value}>
                    <Space direction="horizontal">
                        <Radio value={1}>Windows</Radio>
                        <Radio value={2}>Apple device</Radio>
                        <Radio value={3}>None</Radio>
                    </Space>
                </Radio.Group>
                <br />
                <br />
                <Button>FINISH</Button>
            </div>
    )
  }
}
export default LTA_I