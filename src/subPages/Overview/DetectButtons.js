import React from 'react'
import { Button } from 'antd'

function DetectButtons(props) {
    const { setButtonState } = props
    const buttons = ['','去除无效帧', '对标', '显示光流']
    const handleClick = (index) => {
        // 这里后期还要加上后端是否成功返回的判断逻辑，这里先进行简化了
        setButtonState((lastState) => {
            return {
                ...lastState,
                [index]: true // 确保是一个幂等操作
            }
        })
    }
    return (
        <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
            {buttons.map((text, index) =>
                <Button type="primary" size='large' key={index} onClick={() => handleClick(index)}>
                    {text}
                </Button>)
            }
        </div>
    )
}

export default DetectButtons
