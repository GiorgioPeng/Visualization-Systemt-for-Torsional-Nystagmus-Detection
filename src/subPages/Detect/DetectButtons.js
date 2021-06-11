import React from 'react'
import { Button } from 'antd'

function DetectButtons() {
    const buttons = ['过滤', '对标', '光流']
    return (
        <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
            {buttons.map((text) =>
                <Button type="primary" size='large' >
                    {text}
                </Button>)
            }
        </div>
    )
}

export default DetectButtons
