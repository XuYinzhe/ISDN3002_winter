import React, { Component } from 'react';
import { Button, Image, Radio, Input, Space} from 'antd';
import { LeftOutlined, IdcardOutlined } from '@ant-design/icons';

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
                <Button icon={<IdcardOutlined />} size="large" href="https://www.google.com" />
                <Image
                    width={500}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />

                <div>
                    Do you bring personal device?
                </div>
                <Radio.Group onChange={this.onChange} value={value}>
                    <Space direction="vertical">
                        <Radio value={1}>Windows</Radio>
                        <Radio value={2}>Apple device</Radio>
                        <Radio value={3}>None</Radio>
                    </Space>
                </Radio.Group>

                <Button>FINISH</Button>
            </div>
    )
  }
}
export default LTA_I