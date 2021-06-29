import React from 'react'
import { Button } from 'antd'
import { useGlobalState } from '../../globalState'

function ActionButton(props) {
    const { isClicked, setIsClicked, setLoading } = props
    const [state, updateState,] = useGlobalState()
    const lightStream = async () => {
        setLoading(true)
        setIsClicked(true)
        console.log('start light stream')
        const result = await fetch('/lightStream/' + state.remoteVideoSrc)
        const detailInfo = await result.json()
        console.log(detailInfo.video_src_path)
        updateState('remoteVideoStreamSrc', detailInfo.video_src_path)
        setLoading(false)
    }
    return (
        <div>
            <Button
                type="primary"
                shape='round'
                size='large'
                onClick={lightStream}
                disabled={state.remoteVideoStreamSrc || isClicked}
            >
                显示光流视频
            </Button>
        </div>
    )
}

export default ActionButton
