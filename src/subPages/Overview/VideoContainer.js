import React from 'react'
import { Row, Col, Card } from 'antd'
import VideoPlayer from '../../components/VideoPlayer'
import { useGlobalState } from '../../globalState'
import baseUrl from '../../utils/baseURL'

function VideoContainer(props) {
    const [state,] = useGlobalState()
    // const [loading, setLoading] = React.useState(false) // 后期判断后端是否把视频传过来时使用这个状态
    const { videoSrc, title } = props
    React.useEffect(() => { console.log(state.remoteVideoSrc) }, [state.remoteVideoSrc])
    // 这里等着后端传视频url等参数才能继续，先放在这里占着位置
    return (
        <div>
            {
                state[videoSrc] !== '' ?
                    <Row gutter={[16, 16]}>
                        <Col span={12}>
                            <Card
                                hoverable
                                style={{ width: '100%', cursor: 'default', textAlign: 'center' }}
                                title={'原始视频'}
                            >
                                <VideoPlayer
                                    videoSrc={state.remoteVideoSrc !== '' ? baseUrl + '/' + state.remoteVideoSrc : ''}
                                />
                            </Card>
                        </Col>
                        <Col span={12}>
                            <Card
                                hoverable
                                style={{ width: '100%', cursor: 'default', textAlign: 'center' }}
                                title={title}
                            >
                                <VideoPlayer
                                    videoSrc={baseUrl + '/' + state[videoSrc]}
                                />
                            </Card>
                        </Col>
                    </Row>
                    :
                    <Card
                        hoverable
                        style={{ width: '100%', cursor: 'default', textAlign: 'center' }}
                        title={'原始视频'}
                    >
                        <VideoPlayer
                            videoSrc={state.remoteVideoSrc !== '' ? baseUrl + '/' + state.remoteVideoSrc : ''}
                        />
                    </Card>
            }
        </div >
    )
}

export default VideoContainer
