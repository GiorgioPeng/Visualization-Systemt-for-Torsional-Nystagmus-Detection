import React from 'react'
import {
    Player,
    ControlBar,
    PlayToggle, // PlayToggle 播放/暂停按钮 若需禁止加 disabled
    ReplayControl, // 后退按钮
    ForwardControl,  // 前进按钮
    CurrentTimeDisplay,
    TimeDivider,
    PlaybackRateMenuButton,  // 倍速播放选项
    VolumeMenuButton
} from 'video-react';
import "../../node_modules/video-react/dist/video-react.css";

function VideoPlayer(props) {
    const { videoRef, videoSrc, videoType } = props
    return (
        <Player
            playsInline
            // poster="https://video-react.js.org/assets/poster.png"
            fluid={true}
            autoPlay={true}
            ref={videoRef}
        >
            <source
                src={videoSrc}
                type={videoType}
            />

            <ControlBar autoHide={false} disableDefaultControls={false}>
                <ReplayControl seconds={0.33} order={1.1} />
                {/* <ReplayControl seconds={10} order={1.2} /> */}
                <ForwardControl seconds={0.33} order={1.3} />
                {/* <ForwardControl seconds={10} order={1.4} /> */}
                {/* 这几个是调节前后的，两个5秒，两个10秒 */}
                <PlayToggle />
                <CurrentTimeDisplay order={4.1} />
                <TimeDivider order={4.2} />
                <PlaybackRateMenuButton rates={[5, 2, 1.5, 1, 0.5]} order={7.1} />
                {/* 这个用于调整播放速度 */}
                <VolumeMenuButton />
            </ControlBar>
        </Player>
    )
}

export default VideoPlayer
