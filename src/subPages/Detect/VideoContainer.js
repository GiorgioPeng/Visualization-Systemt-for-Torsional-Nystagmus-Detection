import React from 'react'
import { Row, Col, Card, Button } from 'antd'
import VideoPlayer from '../../components/VideoPlayer'
import { useGlobalState } from '../../globalState'
import baseUrl from '../../utils/baseURL'
// import DetectButtons from './DetectButtons'

function VideoContainer() {
    const [state,] = useGlobalState()
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
    // 通过index来判断是处理哪一个点按操作
    const handleClick = (index) => {
        // 如果这个按钮已经被点击后端进行处理过了，则直接跳过
        if (buttonState[index] === true) {
            return
        }
        else {
            switch (index) {
                // 第一个按钮对应  去除无效帧
                case 1:
                    fetch('/SegVideo' + state.remoteVideoSrc[0])
                    break
                // 第二个按钮对应  进行对标
                case 2:
                    break
                case 3:
                    break
                default:
                    break
            }
        }
        setButtonState((lastState) => {
            return {
                ...lastState,
                [index]: true
            }
        })
    }

    React.useEffect(() => { }, [state.remoteVideoSrc])
    // 这里等着后端传视频url等参数才能继续，先放在这里占着位置
    return (
        <div>
            {/* <VideoPlayer
                // videoRef={videoRef}
                videoSrc={'http://202.112.147.176/11-15%E5%B0%81%E5%B2%A9.mp4'}
                // videoType={'video/mp4'}
            /> */}
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
                                extra={
                                    <Button
                                        size="small"
                                        type="primary"
                                        disabled={buttonState[index]}
                                        onClick={() => handleClick(index)}
                                    >
                                        {buttons[index]}
                                    </Button>}
                            >
                                <VideoPlayer
                                    videoSrc={state.remoteVideoSrc[index] !== '' ? baseUrl + '/' + state.remoteVideoSrc[index] : ''}
                                />
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
