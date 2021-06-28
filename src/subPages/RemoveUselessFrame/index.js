import React from 'react'
import { Progress } from 'antd'
import ActionButton from './ActionButton'
import VideoContainer from '../../components/VideoContainer'
function RemoveUselessFrame() {
    const videoTitle = '去无效帧后的视频'
    const [isClicked, setIsClicked] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    return (
        <div>
            <VideoContainer videoSrc={'remoteVideoUsefulFrameSrc'} title={videoTitle} />
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px', marginBottom: '30px' }}>
                <ActionButton setIsClicked={setIsClicked} isClicked={isClicked} setLoading={setLoading} />
            </div>
            <div style={{ display: loading ? 'block' : 'none', textAlign: 'center', color: 'red' }}>
                <p>程序运行中，请耐心等待。</p>
                <Progress
                    type="line"
                    percent={100}
                    showInfo={false}
                    status="active"
                />
            </div>
        </div>
    )
}

export default RemoveUselessFrame
