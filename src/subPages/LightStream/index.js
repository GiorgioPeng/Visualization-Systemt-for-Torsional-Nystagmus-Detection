import React from 'react'
import { Button, Progress } from 'antd'
import VideoContainer from '../../components/VideoContainer'

function index() {
    const videoTitle = '光流视频'
    return (
        <div>
            <VideoContainer videoSrc={'remoteVideoStreamSrc'} title={videoTitle} />
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px', marginBottom: '30px' }}>
                <Button type="primary" shape={'round'} size={'large'}>显示光流视频</Button>
            </div>
            <Progress type="circle" percent={100} status="success" />
        </div>
    )
}

export default index
