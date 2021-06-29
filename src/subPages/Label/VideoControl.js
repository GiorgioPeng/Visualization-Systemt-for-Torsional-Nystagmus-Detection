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
        <div style={{
            margin: '10px auto',
            maxWidth: '50vw',
            // overflow: 'hidden',
            minHeight: '500px',
            maxHeight: '700px',
            border: '1px solid',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}
        >
            {
                state.videoFile ?
                    <VideoPlayer
                        videoRef={videoRef}
                        videoSrc={getObjectURL(state.videoFile.originFileObj)}
                        videoType={state.videoFile.type}
                    />
                    :
                    <b style={{ fontSize: '40px' }}>未上传视频</b>
            }
        </div>
    )
}

export default VideoControl
