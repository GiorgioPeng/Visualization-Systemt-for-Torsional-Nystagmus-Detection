import React from 'react'
import { Progress } from 'antd'
import VideoContainer from '../../components/VideoContainer'
import ActionButton from './ActionButton'

function index() {
    const videoGroup = ['原始视频', '剪裁对标后的视频']
    return (
        <div>
            <VideoContainer videoGroup={videoGroup} />
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px', marginBottom: '30px' }}>
                <ActionButton />
            </div>
            <Progress type="line" percent={75} status="exception" />
        </div>
    )
}

export default index
