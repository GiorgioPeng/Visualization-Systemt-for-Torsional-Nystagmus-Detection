import React from 'react'
import { Button, Divider } from 'antd'
import RecordAddTable from '../../components/RecordAddTable'
import './ParamtersBox.css'
function ParametersBox(props) {
    const {columns} = props
    return (
        <div>
            <Divider/>
            <div className="ButtonGroup">
                <Button type="primary" shape="round">眼震开始</Button>
                <Button type="primary" shape="round" danger>眼震结束</Button>
                <Button type="dashed" shape="round">添加一行记录</Button>
            </div>
            <Divider/>
            <RecordAddTable columns={columns}/>
            <Divider>⬆️ 正在添加｜所有记录 ⬇️</Divider>
        </div>
    )
}

export default ParametersBox
