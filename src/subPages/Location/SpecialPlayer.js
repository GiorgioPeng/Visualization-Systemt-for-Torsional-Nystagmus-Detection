import React from 'react'
import { Tooltip } from 'antd'
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

function VideoPlayer(props) {
    // const { videoRef, videoSrc, videoType } = props
    const specialPlayerRef = React.createRef(null)
    const pointerRef = React.createRef(null)
    const section = [{ start: 0.2, end: 0.3 }, { start: 1.1, end: 1.5 }]
    React.useEffect(() => {
        // 这里需要等待后端返回眼震区间，然后生成多个button实现点击跳转
        // if
        let position
        if (specialPlayerRef.current) {
            const player = specialPlayerRef.current.video.props.player
            // TODO 这里需要继续进行定位的实现，现在这个循环在暂停的时候会无限重复
            // while (player.currentTime != player.duration) {
            //     position = player.currentTime * 100 / player.duration
            //     pointerRef.current.style.left = parseInt(-1 + position) + '%'
            //     console.log(position)
            // }
        }
    }, [specialPlayerRef, pointerRef])

    return (
        <>
            <Player
                className={'specialPlayer'}
                autoPlay
                fluid={true}
                playsInline={true}
                ref={specialPlayerRef}
            >
                <source
                    src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                    // type={videoType}
                    type="video/mp4"
                />


                <ControlBar autoHide={false} disableDefaultControls={true}>
                    <PlayToggle />
                    <ReplayControl seconds={0.33} />
                    <ForwardControl seconds={0.33} />
                    <PlaybackRateMenuButton style={{ fontSize: '20px' }} rates={[5, 2, 1.5, 1, 0.5]} />
                    <VolumeMenuButton vertical />
                </ControlBar>
            </Player>
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
                    section.map((element, index) => {
                        return (
                            <Tooltip placement="top" title={`眼震开始：「${element.start}」,眼震结束：「${element.end}」`}>
                                <div
                                    style={{
                                        backgroundColor: 'red',
                                        width: (element.end - element.start) * 500 + 'px',
                                        height: '100%',
                                        position: 'absolute',
                                        left: element.start * 500 + 'px'
                                    }}
                                />
                            </Tooltip>
                        )
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
                        top: '100%'
                    }}
                    ref={pointerRef}
                />
            </div>
        </>
    )
}
export default VideoPlayer
