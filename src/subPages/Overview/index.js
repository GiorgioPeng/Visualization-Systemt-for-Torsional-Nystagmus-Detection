import React from 'react'
import { Button } from 'antd'
import VideoContainer from './VideoContainer'
import DetectTable from './DetectTable'
function index() {
    const videoGroup = ['原始视频', '去无效帧后的视频', '进行对标后视频', '显示光流后视频']
    return (
        <div>
            <VideoContainer videoGroup={videoGroup} />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
                <Button size='large' type='primary' danger>进行检测</Button>
            </div>
            <DetectTable />
        </div>
    )
}

export default index
