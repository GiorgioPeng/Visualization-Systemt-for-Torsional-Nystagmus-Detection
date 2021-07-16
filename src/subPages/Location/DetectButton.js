import React from 'react'
import { Button, notification } from 'antd'
import { useGlobalState } from '../../globalState'
function DetectButton() {
    const [state, updateState, ] = useGlobalState()
    // const { setSections } = props
    const handleDetect = async () => {
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

        const result = await fetch('/detect/' + state.remoteVideoSrc)

        // const result = await fetch('/detect/11-15封岩过伸向上坐起向下.mp4')
        try {
            const detailInfo = await result.json()
            console.log(detailInfo.sections)
            updateState('sections', [...detailInfo.sections])
        } catch (error) {
            notification['error']({
                message: '出错了',
                description:
                    '请联系系统管理员！',
                onClick: () => {
                    console.log('Notification Clicked!');
                },
            });
            console.log(error.message)
        }
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
            <Button size='large' type='primary' danger onClick={handleDetect}>进行检测</Button>
        </div>
    )
}

export default DetectButton
