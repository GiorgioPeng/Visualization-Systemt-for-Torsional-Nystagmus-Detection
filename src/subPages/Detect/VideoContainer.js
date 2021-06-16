import React from 'react'
import { Row, Col, Card, Button } from 'antd'
import VideoPlayer from '../../components/VideoPlayer'
// import DetectButtons from './DetectButtons'

function VideoContainer() {
    const [loading, setLoading] = React.useState(false) // 后期判断后端是否把视频传过来时使用这个状态
    const videoGroup = ['原始视频', '去无效帧后的视频', '进行对标后视频', '显示光流后视频']
    const buttons = ['', '去除无效帧', '进行对标', '显示光流']
    const [buttonState, setButtonState] = React.useState(
        {
            1: false,
            2: false,
            3: false
        }
    )
    // 这里等着后端传视频url等参数才能继续，先放在这里占着位置
    return (
        <div>
            <Row gutter={[16, 16]}>
                {
                    videoGroup.map((title, index) =>
                        <Col span={12} key={index}>
                            {/* <b>{title}</b> */}
                            <Card
                                hoverable
                                style={{ width: '100%', cursor: 'default', textAlign: 'center' }}
                                loading={loading}
                                title={title}
                                extra={<Button size="small" type="primary">{buttons[index]}</Button>}
                            >
                                <VideoPlayer />
                            </Card>
                        </Col>
                    )
                }
            </Row>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
                <Button size='large' type='primary' danger>进行检测</Button>
            </div>
        </div>
    )
}

export default VideoContainer
