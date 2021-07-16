import React from 'react'
import { Button, notification } from 'antd'
import { useGlobalState } from '../../globalState'

function ActionButton(props) {
    const { isClicked, setLoading } = props
    const [state, updateState,] = useGlobalState()
    const cut = async () => {
        if (state.remoteVideoUsefulFrameSrc === '') {
            notification['error']({
                message: '未按步骤进行本系统！',
                description:
                    '请先进行「去除无效帧步骤」！',
                onClick: () => {
                    console.log('Notification Clicked!');
                },
            });
            return;
        }

        setLoading(true)
        // setIsClicked(true)
        console.log('start cut')
        const result = await fetch('/dingbiao/' + state.remoteVideoSrc)
        try {
            const detailInfo = await result.json()
            console.log(detailInfo.video_src_path)
            updateState('remoteVideoCenterSrc', detailInfo.video_src_path)
        } catch (error) {
            notification['error']({
                message: '出错了',
                description:
                    '请联系系统管理员。',
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
                onClick={cut}
                disabled={state.remoteVideoCenterSrc || isClicked}
            >
                进行剪裁对标
            </Button>
        </div>
    )
}

export default ActionButton
