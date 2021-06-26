import React from 'react'
import { Progress } from 'antd'
import ActionButton from './ActionButton'
import VideoContainer from '../../components/VideoContainer'
function index() {
    const videoGroup = ['原始视频', '去无效帧后的视频']
    return (
        <div>
            <VideoContainer videoGroup={videoGroup}/>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px', marginBottom: '30px' }}>
                <ActionButton/>
            </div>
            <Progress type="line" percent={75} status="active" />
        </div>
    )
}

export default index
