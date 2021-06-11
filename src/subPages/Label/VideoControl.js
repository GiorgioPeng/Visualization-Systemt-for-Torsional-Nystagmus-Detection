import React from 'react'
import VideoPlayer from '../../components/VideoPlayer'
import { useGlobalState } from '../../globalState'

function VideoControl(props) {
    const { videoRef } = props
    const [state,] = useGlobalState()
    const getObjectURL = (file) => {
        let url = null;
        if (window.createObjectURL !== undefined) {
            url = window.createObjectURL(file)
        } else if (window.URL !== undefined) {
            url = window.URL.createObjectURL(file)
        } else if (window.webkitURL !== undefined) {
            url = window.webkitURL.createObjectURL(file)
        }
        return url;
    }// 生成一个url供预览视频文件
    return (
        <div style={{ margin: '10px auto', width: '100%', minHeight: '500px', border: '1px solid', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {
                state.videoFile ?
                    <VideoPlayer
                        videoRef={videoRef}
                        videoSrc={getObjectURL(state.videoFile.originFileObj)}
                        videoType={state.videoFile.type}
                    />
                    // <Player
                    //     playsInline
                    //     // poster="https://video-react.js.org/assets/poster.png"
                    //     fluid={true}
                    //     autoPlay={true}
                    //     ref={videoRef}
                    // >
                    //     <source
                    //         src={getObjectURL(state.videoFile.originFileObj)}
                    //         type={state.videoFile.type}
                    //     />

                    //     <ControlBar autoHide={false} disableDefaultControls={false}>
                    //         <ReplayControl seconds={5} order={1.1} />
                    //         <ReplayControl seconds={10} order={1.2} />
                    //         <ForwardControl seconds={5} order={1.3} />
                    //         <ForwardControl seconds={10} order={1.4} />
                    //         {/* 这几个是调节前后的，两个5秒，两个10秒 */}
                    //         <PlayToggle />
                    //         <CurrentTimeDisplay order={4.1} />
                    //         <TimeDivider order={4.2} />
                    //         <PlaybackRateMenuButton rates={[5, 2, 1.5, 1, 0.5]} order={7.1} />
                    //         {/* 这个用于调整播放速度 */}
                    //         <VolumeMenuButton />
                    //     </ControlBar>
                    // </Player>
                    :
                    <b style={{ fontSize: '40px' }}>未上传视频</b>
            }
        </div>
    )
}

export default VideoControl
