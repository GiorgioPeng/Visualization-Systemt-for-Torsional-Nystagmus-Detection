import React from 'react'
import { Radio, Button, Row, Col, Popconfirm, message, } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import illnesses from '../../assets/illness.json'
function IllnessSelect() {
    const text = '是否已经保存选项?';

    function confirm() {
        message.info('提交成功');
    }
    return (
        <div>
            <div style={{ textAlign: 'center' }}>
                <h1>疾病选择</h1>
            </div>
            <Radio.Group defaultValue="无" buttonStyle="solid">
                <Row gutter={[16, 24]}>
                    {
                        illnesses.map(illness =>
                            <Col span={4}><Radio.Button style={{ height: '50px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} value={illness.name}>{illness.name}</Radio.Button></Col>
                        )
                    }
                </Row>
            </Radio.Group>
            <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Popconfirm placement="top" title={text} onConfirm={confirm} okText="是" cancelText="忘记了">
                    <Button type="primary" icon={<UploadOutlined />} size='large' danger>
                        提交
                    </Button>
                </Popconfirm>
            </div>
        </div>
    )
}

export default IllnessSelect
