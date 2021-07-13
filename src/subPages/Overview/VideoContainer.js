import React from 'react'
import { Row, Col, Card } from 'antd'
import VideoPlayer from '../../components/VideoPlayer'
import { useGlobalState } from '../../globalState'
import baseUrl from '../../utils/baseURL'

function VideoContainer(props) {
    const [state,] = useGlobalState()
    // const [loading, setLoading] = React.useState(false) // 后期判断后端是否把视频传过来时使用这个状态
    const { videoGroup, videoSrc } = props
    React.useEffect(() => { console.log(state.remoteVideoSrc) }, [state.remoteVideoSrc])
    // 这里等着后端传视频url等参数才能继续，先放在这里占着位置
    return (
        <div>
            <Row gutter={[16, 16]}>
                {videoGroup.map((title, index) => {
                    return (
                        <Col span={12}>
                            <Card
                                hoverable
                                style={{ width: '100%', cursor: 'default' }}
                                title={title}
                                headStyle={{ textAlign: 'center', color: 'skyblue', fontSize: '36px', fontWeight: 'bold' }}
                            >
                                <VideoPlayer
                                    videoSrc={state[videoSrc[index]] !== '' ? baseUrl + '/' + state[videoSrc[index]] : ''}
                                />
                            </Card>
                        </Col>
                    )
                })
                }
            </Row>
        </div >
    )
}

export default VideoContainer
