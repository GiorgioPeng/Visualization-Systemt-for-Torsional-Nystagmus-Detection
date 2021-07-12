import React from 'react'
import VideoContainer from './VideoContainer'
import DetectTable from './DetectTable'
import DetectButton from './DetectButton'
function Overview() {
    const videoGroup = ['原始视频', '去无效帧后的视频', '进行对标后视频', '显示光流后视频']
    const videoSrc = ['remoteVideoSrc', 'remoteVideoUsefulFrameSrc', 'remoteVideoCenterSrc', 'remoteVideoStreamSrc']
    const [sections, setSections] = React.useState([])
    return (
        <div>
            <VideoContainer videoGroup={videoGroup} videoSrc={videoSrc} />
            <DetectButton setSections={setSections} />
            <DetectTable sections={sections} />
        </div>
    )
}

export default Overview
