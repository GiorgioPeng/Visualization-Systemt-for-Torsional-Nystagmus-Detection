import React from 'react'
import VideoContainer from './VideoContainer'
function Overview() {
    const videoGroup = ['原始视频', '去无效帧后的视频', '进行对标后视频', '显示光流后视频']
    const videoSrc = ['remoteVideoSrc', 'remoteVideoUsefulFrameSrc', 'remoteVideoCenterSrc', 'remoteVideoStreamSrc']
    
    return (
        <div>
            <VideoContainer videoGroup={videoGroup} videoSrc={videoSrc} />
        </div>
    )
}

export default Overview
