import React from 'react'
import { Row, Col, Card } from 'antd'
import VideoPlayer from './VideoPlayer'
import { useGlobalState } from '../globalState'
import baseUrl from '../utils/baseURL'

function VideoContainer(props) {
    const [state,] = useGlobalState()
    // const [loading, setLoading] = React.useState(false) // 后期判断后端是否把视频传过来时使用这个状态
    const {videoGroup} = props
    React.useEffect(() => { }, [state.remoteVideoSrc])
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
                                title={title}
                            >
                                <VideoPlayer
                                    videoSrc={state.remoteVideoSrc[index] !== '' ? baseUrl + '/' + state.remoteVideoSrc[index] : ''}
                                    // videoSrc={'http://202.112.147.176/11-15.avi'}
                                />
                            </Card>
                        </Col>
                    )
                }
            </Row>
        </div>
    )
}

export default VideoContainer
