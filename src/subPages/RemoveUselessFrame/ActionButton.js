import React from 'react'
import { Button } from 'antd'
import { useGlobalState } from '../../globalState'

function ActionButton() {
    const [state, updateState,] = useGlobalState()
    const cut = async () => {
        console.log('start cut')
        const result = await fetch('/SegVideo/' + state.remoteVideoSrc[0])
        const detailInfo = await result.json()
        console.log(detailInfo.video_src_path)
        updateState('remoteVideoSrc', [state.remoteVideoSrc[0], detailInfo.video_src_path, state.remoteVideoSrc[2], state.remoteVideoSrc[3]])
    }
    return (
        <div>
            <Button type="primary" shape={'round'} size={'large'} onClick={cut}>去除无效帧</Button>
        </div>
    )
}

export default ActionButton
