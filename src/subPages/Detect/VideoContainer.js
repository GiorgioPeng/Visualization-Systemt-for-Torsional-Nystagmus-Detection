import React from 'react'
import { Row, Col, Card, Collapse, Space } from 'antd'
import VideoPlayer from '../../components/VideoPlayer'
import DetectButtons from './DetectButtons'

const { Panel } = Collapse;
const { Meta } = Card;
function VideoContainer() {
    const [loading, setLoading] = React.useState(false) // 后期判断后端是否把视频传过来时使用这个状态
    const videoGroup = ['去无效帧后的视频', '对标后视频', '光流视频']
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
            <Card
                hoverable
                style={{ width: '100%', cursor: 'default' }}
                loading={loading}
            >
                <Meta
                    title={'原始视频'}
                    style={{ textAlign: 'center' }}
                />
                <VideoPlayer />
            </Card>
            <DetectButtons setButtonState={setButtonState} />
            {
                videoGroup.map((title, index) =>
                    <Collapse style={{ width: '100%', marginTop: '10px' }} key={index} collapsible={buttonState[index] ? '' : 'disabled'}>
                        <Panel header={title} key={index}>
                            <Card
                                hoverable
                                style={{ width: '100%', cursor: 'default' }}
                                loading={loading}
                            >
                                <VideoPlayer />
                            </Card>

                        </Panel>
                    </Collapse>
                )
            }
        </div>
    )
}

export default VideoContainer
