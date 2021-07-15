import React from 'react'
import { Button, notification } from 'antd'
import { useGlobalState } from '../../globalState'

function ActionButton(props) {
    const { isClicked, setIsClicked, setLoading } = props
    const [state, updateState,] = useGlobalState()
    const removeuselessframe = async () => {
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
        // console.log('start cut')
        try {
            const result = await fetch('/SegVideo/' + state.remoteVideoSrc)
            const detailInfo = await result.json()
            console.log(detailInfo.video_src_path)
            updateState('remoteVideoUsefulFrameSrc', detailInfo.video_src_path)
        } catch (error) {
            notification['error']({
                message: '出错了',
                description:
                    '请按顺序进行操作。',
                onClick: () => {
                    console.log('Notification Clicked!');
                },
            });
            console.log(error.message)
        }
        setLoading(false)
    }
    return (
        <div>
            <Button
                type="primary"
                shape='round'
                size='large'
                onClick={removeuselessframe}
                disabled={state.remoteVideoUsefulFrameSrc || isClicked}
            >
                去除无效帧
            </Button>
        </div>
    )
}

export default ActionButton
