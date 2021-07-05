import React from 'react'
import { Radio, Button, Row, Col, Popconfirm, message, } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { CSVLink } from "react-csv";
import { useGlobalState } from '../../globalState'
import illnesses from '../../assets/illness.json'
function IllnessSelect() {
    const [state, updateState,] = useGlobalState()
    // const [illness, setIllness] = React.useState('无')
    const modifyIllness = (e) => {
        updateState('illness', e.target.value)
    }
    // const text = '是否已经保存选项?';
    // function confirm() {
    //     message.info('提交成功');
    // }
    return (
        <div>
            <div style={{ textAlign: 'center' }}>
                <h1>疾病选择</h1>
            </div>
            <Radio.Group onChange={modifyIllness} defaultValue={state.illness} buttonStyle="solid">
                <Row gutter={[16, 24]}>
                    {
                        illnesses.map(illness =>
                            <Col span={4}>
                                <Radio.Button
                                    style={{
                                        height: '50px',
                                        width: '100%',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}
                                    value={illness.name}
                                >
                                    {illness.name}
                                </Radio.Button>
                            </Col>
                        )
                    }
                </Row>
            </Radio.Group>
            <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {/* <Popconfirm placement="top" title={text} onConfirm={confirm} okText="是" cancelText="忘记了"> */}
                <CSVLink
                    data={state.records.map(e => { e.疾病 = state.illness; return e })}
                    filename={state.remoteVideoSrc.split('.')[0] + '.csv'}
                // style={{ color: 'white' }}
                >
                    <Button type="primary" icon={<DownloadOutlined />} size='large' danger>
                        下载
                    </Button>
                </CSVLink>
                {/* </Popconfirm> */}
            </div>
        </div>
    )
}

export default IllnessSelect
