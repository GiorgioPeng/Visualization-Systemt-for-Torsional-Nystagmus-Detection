import React from 'react'
import { Button } from 'antd'
import { useGlobalState } from '../../globalState'

function ActionButton(props) {
    const { isClicked, setIsClicked, setLoading } = props
    const [state, updateState,] = useGlobalState()
    const cut = async () => {
        setLoading(true)
        setIsClicked(true)
        console.log('start cut')
        const result = await fetch('/dingbiao/' + state.remoteVideoSrc)
        const detailInfo = await result.json()
        console.log(detailInfo.video_src_path)
        updateState('remoteVideoCenterSrc', detailInfo.video_src_path)
        setLoading(false)
    }
    return (
        <div>
            <Button
                type="primary"
                shape='round'
                size='large'
                onClick={cut}
                disabled={state.remoteVideoCenterSrc || isClicked}
            >
                进行剪裁对标
            </Button>
        </div>
    )
}

export default ActionButton
