import React from 'react'
import { Button, Progress } from 'antd'
import VideoContainer from '../../components/VideoContainer'

function index() {
    const videoGroup = ['原始视频', '剪裁对标后的视频']
    return (
        <div>
            <VideoContainer videoGroup={videoGroup} />
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px', marginBottom: '30px' }}>
                <Button type="primary" shape={'round'} size={'large'}>进行剪裁对标</Button>
            </div>
            <Progress type="line" percent={75} status="exception" />
        </div>
    )
}

export default index
