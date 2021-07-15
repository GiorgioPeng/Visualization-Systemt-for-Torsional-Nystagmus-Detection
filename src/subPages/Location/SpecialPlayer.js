import React from 'react'
import { Tooltip, Row, Col, Card } from 'antd'
import {
    Player,
    ControlBar,
    PlayToggle, // PlayToggle 播放/暂停按钮 若需禁止加 disabled
    ReplayControl, // 后退按钮
    ForwardControl,  // 前进按钮
    PlaybackRateMenuButton,  // 倍速播放选项
    VolumeMenuButton
} from 'video-react';
import "../../../node_modules/video-react/dist/video-react.css";
import './progressPointer.css'
import { useGlobalState } from '../../globalState'

function VideoPlayer(props) {
    const { remoteVideoSrc } = props;
    // const { videoRef, videoSrc, videoType } = props
    const specialPlayerRef = React.createRef(null)
    const specialPlayerRefAnother = React.createRef(null)
    const pointerRef = React.createRef(null)
    const [durationState, setDurationState] = React.useState(0)
    const [state,] = useGlobalState()
    // const section = [{ start: 1.9, end: 10 }, { start: 23.1, end: 30.5 }]

    const handleClick = (startTime, endTime) => {
        console.log(endTime)
        const pointer = pointerRef.current
        // 动画时间设置为0，避免跳转的时候显得非常突兀
        pointer.style.transitionDuration = '0s'
        const player = specialPlayerRef.current.video.video
        const playerAnother = specialPlayerRefAnother.current.video.video
        player.currentTime = startTime
        playerAnother.currentTime = startTime
        player.play()
        playerAnother.play()
        setTimeout(() => {
            pointer.style.transitionDuration = '500ms'
            // while (player.currentTime < endTime) {
            // }
            // player.pause()
            // playerAnother.pause()
        }, 0)
    }

    React.useEffect(() => {
        // 这里需要等待后端返回眼震区间，然后生成多个button实现点击跳转
        // console.log(specialPlayerRef.current)
        if (specialPlayerRef.current !== null && pointerRef.current !== null) {

            const player = specialPlayerRef.current.video.video
            const playerAnother = specialPlayerRefAnother.current.video.video
            const pointer = pointerRef.current

            player.addEventListener('timeupdate', () => {

                if (durationState === 0) {
                    setDurationState(player.duration)
                }

                let percentage = Math.floor((100 / player.duration) *
                    player.currentTime);

                pointer.style.left = `${percentage - 0.5}%`
            }, false)

            // 确保两个视频能够同步播放
            player.addEventListener('pause', () => {
                playerAnother.pause()
            }, false)

            player.addEventListener('play', () => {
                playerAnother.play()
            }, false)

            playerAnother.addEventListener('pause', () => {
                player.pause()
            }, false)

            playerAnother.addEventListener('play', () => {
                player.play()
            }, false)

        }
    }, [pointerRef.current, state.section])

    return (
        <>
            <Row gutter={[16, 16]}>
                <Col span={12}>
                    <Card
                        hoverable
                        style={{ width: '100%', cursor: 'default' }}
                        title={'对标视频'}
                        headStyle={{ textAlign: 'center', color: 'skyblue', fontSize: '36px', fontWeight: 'bold' }}
                    >
                        <Player
                            className={'specialPlayer'}
                            autoPlay
                            fluid={true}
                            playsInline={true}
                            ref={specialPlayerRef}
                        >
                            <source
                                src={remoteVideoSrc[0]}
                                // type={videoType}
                                type="video/mp4"
                            />
                            <ControlBar autoHide={true} disableDefaultControls={true}>
                                {/* <PlayToggle />
                                <ReplayControl seconds={0.33} />
                                <ForwardControl seconds={0.33} />
                                <PlaybackRateMenuButton style={{ fontSize: '20px' }} rates={[5, 2, 1.5, 1, 0.5]} />
                                <VolumeMenuButton vertical /> */}
                            </ControlBar>
                        </Player>
                    </Card>
                </Col>
                <Col span={12}>
                    <Card
                        hoverable
                        style={{ width: '100%', cursor: 'default' }}
                        title={'光流视频'}
                        headStyle={{ textAlign: 'center', color: 'skyblue', fontSize: '36px', fontWeight: 'bold' }}
                    >
                        <Player
                            className={'specialPlayer'}
                            autoPlay
                            fluid={true}
                            playsInline={true}
                            ref={specialPlayerRefAnother}
                        >
                            <source
                                src={remoteVideoSrc[1]}
                                // type={videoType}
                                type="video/mp4"
                            />
                            <ControlBar autoHide={true} disableDefaultControls={true}>
                                {/* <PlayToggle />
                                <ReplayControl seconds={0.33} />
                                <ForwardControl seconds={0.33} />
                                <PlaybackRateMenuButton style={{ fontSize: '20px' }} rates={[5, 2, 1.5, 1, 0.5]} />
                                <VolumeMenuButton vertical /> */}
                            </ControlBar>
                        </Player>
                    </Card>
                </Col>
            </Row>
            {/* 暂时考虑用蓝色底色，红色覆盖的方式进行实现，可能需要通过鼠标定位的方式进行视频播放时间的控制 */}
            <div
                style={{
                    width: '95%',
                    position: 'relative',
                    height: '10px',
                    backgroundColor: 'skyblue',
                    margin: '10px auto',
                    borderRadius: '5px',
                    filter: 'drop-shadow(0 0 2px #999)'
                }}
            >
                {
                    state.sections.map((element) => {
                        if (durationState !== 0) {
                            // console.log(element)
                            let width = (element[1] - element[0]) / durationState * 100
                            let left = element[0] / durationState * 100
                            // console.log(width,left)
                            return (
                                <Tooltip placement="top" title={`眼震开始：「${element[0]}」,眼震结束：「${element[1]}」`}>
                                    <div
                                        style={{
                                            backgroundColor: 'red',
                                            width: width + '%',
                                            height: '100%',
                                            position: 'absolute',
                                            left: left + '%',
                                            cursor: 'pointer'
                                        }}
                                        onClick={() => handleClick(element[0], element[1])}
                                    />
                                </Tooltip>
                            )
                        }
                        else {
                            return <></>
                        }
                    })
                }
                <div
                    className="progressPointer"
                    style={{
                        borderTop: '0',
                        borderLeft: '8px solid transparent',
                        borderRight: '8px solid transparent',
                        borderBottom: '10px solid black',
                        position: 'absolute',
                        left: '-1%',
                        // 最大的left是99%
                        top: '100%',
                        transitionProperty: 'left',
                        transitionDuration: '800ms', // 通过使用动画的方式来使得状态条更加流畅
                        transformStyle: 'linear'
                    }}
                    ref={pointerRef}
                />

            </div>
        </>
    )
}
export default VideoPlayer
