import React from 'react'
import { Button } from 'antd'
import { useGlobalState } from '../../globalState'

function ActionButton() {
    const [state,] = useGlobalState()
    const cut = async () => {
        console.log('start cut')
        // const result = await fetch('/SegVideo/' + state.remoteVideoSrc[0])
        // console.log(result)
    }
    return (
        <div>
            <Button type="primary" shape={'round'} size={'large'} onClick={cut}>进行剪裁对标</Button>
        </div>
    )
}

export default ActionButton
