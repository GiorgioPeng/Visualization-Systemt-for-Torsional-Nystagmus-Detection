import React from 'react'
import { Button, notification } from 'antd'
import { useGlobalState } from '../../globalState'

function ActionButton(props) {
    const { isClicked, setLoading } = props
    const [state, updateState,] = useGlobalState()
    const lightStream = async () => {
        if (state.remoteVideoCenterSrc === '') {
            notification['error']({
                message: '未按步骤进行本系统！',
                description:
                    '请先完成视频「对标剪裁」步骤！',
                onClick: () => {
                    console.log('Notification Clicked!');
                },
            });
            return;
        }
        setLoading(true)
        // setIsClicked(true)
        console.log('start light stream')
        // const result = await fetch('/lightStream/' + '11-15封岩过伸向上坐起向下.mp4')

        try {
            const result = await fetch('/lightStream/' + state.remoteVideoSrc)
            const detailInfo = await result.json()
            console.log(detailInfo.video_src_path)
            updateState('remoteVideoStreamSrc', detailInfo.video_src_path)
        } catch (error) {
            notification['error']({
                message: '出错了',
                description:
                    '请按联系系统管理员！',
                onClick: () => {
                    console.log('Notification Clicked!');
                },
            });
            console.log(error.message)
        }
        setLoading(false)
        try {
            const result = await fetch('/lightStreamRGB/' + state.remoteVideoSrc)
            const detailInfo = await result.json()
            console.log(detailInfo.video_src_path)
            updateState('remoteVideoStreamRGBSrc', detailInfo.video_src_path)
        } catch (error) {
            console.log(error.message)
        }
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
