import React from 'react'
import { Button, notification } from 'antd'
import { useGlobalState } from '../../globalState'

function ActionButton(props) {
    const { isClicked, setIsClicked, setLoading } = props
    const [state, updateState,] = useGlobalState()
    const lightStream = async () => {
        if (state.remoteVideoSrc === '') {
            notification['error']({
                message: '未上传原始视屏文件',
                description:
                    '请前往标注界面（左侧第一个）进行原始视屏上传',
                onClick: () => {
                    console.log('Notification Clicked!');
                },
            });
            return;
        }
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