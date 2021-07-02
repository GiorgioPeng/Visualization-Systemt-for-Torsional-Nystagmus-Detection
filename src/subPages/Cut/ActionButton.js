import React from 'react'
import { Button, notification } from 'antd'
import { useGlobalState } from '../../globalState'

function ActionButton(props) {
    const { isClicked, setIsClicked, setLoading } = props
    const [state, updateState,] = useGlobalState()
    const cut = async () => {
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
        console.log('start cut')
        const result = await fetch('/dingbiao/' + state.remoteVideoSrc)
        try {
            const detailInfo = await result.json()
            console.log(detailInfo.video_src_path)
            updateState('remoteVideoCenterSrc', detailInfo.video_src_path)
            setLoading(false)
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
                onClick={cut}
                disabled={state.remoteVideoCenterSrc || isClicked}
            >
                进行剪裁对标
            </Button>
        </div>
    )
}

export default ActionButton
