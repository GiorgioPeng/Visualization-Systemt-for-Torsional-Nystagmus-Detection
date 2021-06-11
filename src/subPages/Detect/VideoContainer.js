import React from 'react'
import { Row, Col, Card } from 'antd'
import VideoPlayer from '../../components/VideoPlayer'

const { Meta } = Card;
function VideoContainer() {
    const [loading, setLoading] = React.useState(false) // 后期判断后端是否把视频传过来时使用这个状态
    const videoGroup = ['原始视频', '去无效帧后的视频', '对标后视频', '光流视频']
    // 这里等着后端传视频url等参数才能继续，先放在这里占着位置
    return (
        <Row gutter={[16, 24]}>
            {
                videoGroup.map((title, index) =>
                    <Col span={12} key={index}>
                        <Card
                            hoverable
                            style={{ width: '100%', cursor: 'default' }}
                            loading={loading}
                        >
                            <Meta
                                title={title}
                                style={{ textAlign: 'center' }}
                            />
                            <VideoPlayer />
                        </Card>
                    </Col>
                )
            }
        </Row>
    )
}

export default VideoContainer
