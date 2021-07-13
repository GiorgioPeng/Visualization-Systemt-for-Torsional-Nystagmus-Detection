import React from 'react'
import baseUrl from '../../utils/baseURL'
import VideoPlayer from '../../components/VideoPlayer'
import { Row, Col, Card, Progress } from 'antd'
import ActionButton from './ActionButton'
import { useGlobalState } from '../../globalState'

function RemoveUselessFrame() {
    const [state,] = useGlobalState()
    const videoTitle = '去除无效帧后的视频'
    const [isClicked, setIsClicked] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    return (
        <div>
            <Row gutter={[16, 16]}>
                <Col span={12}>
                    <Card
                        hoverable
                        style={{ width: '100%', cursor: 'default', textAlign: 'center' }}
                        title={'原始视频'}
                        headStyle={{ textAlign: 'center', color: 'skyblue', fontSize: '36px', fontWeight: 'bold' }}
                    >
                        <VideoPlayer
                            videoSrc={state.remoteVideoSrc !== '' ? baseUrl + '/' + state.remoteVideoSrc : ''}
                        />
                    </Card>
                </Col>
                <Col span={12}>
                    {
                        state.remoteVideoUsefulFrameSrc === '' ?
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'column',
                                    height: '100%',
                                    width: '100%',
                                }}>
                                <ActionButton setIsClicked={setIsClicked} isClicked={isClicked} setLoading={setLoading} />
                                <div style={{ display: loading ? 'block' : 'none', textAlign: 'center', color: 'red' }}>
                                    <p>程序运行中，请耐心等待。</p>
                                    <Progress
                                        type="line"
                                        strokeColor={{
                                            '0%': '#108ee9',
                                            '100%': '#87d068',
                                        }}
                                        percent={100}
                                        showInfo={false}
                                        status="active"
                                    />
                                </div>

                            </div>
                            :
                            <Card
                                hoverable
                                style={{ width: '100%', cursor: 'default', textAlign: 'center' }}
                                title={videoTitle}
                                headStyle={{ textAlign: 'center', color: 'skyblue', fontSize: '36px', fontWeight: 'bold' }}
                            >
                                <VideoPlayer
                                    videoSrc={baseUrl + '/' + state.remoteVideoUsefulFrameSrc}
                                />
                            </Card>
                    }
                </Col>
            </Row>
        </div>
    )
}

export default RemoveUselessFrame
