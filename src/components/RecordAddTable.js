import React from 'react'
import { Select } from 'antd'
import './RecordAddTable.css'
import paramtersValue from '../assets/data.json'

const { Option } = Select;

function RecordAddTable(props) {
    const { columns } = props;
    return (
        <div className="container">
            {
                columns.map((element) => {
                    return <div key={element.title}>{element.title}</div>
                })
            }
            {
                columns.map((element) => {
                    let tempColumnValues = paramtersValue.filter(i => i.label === element.title) // 拿出对应的列的可选参数
                    return tempColumnValues.length === 0 ?
                        <div key={element.title} style={{ width: 120, justifySelf: 'center' }}></div>
                        :
                        <Select key={element.title} style={{ width: 120, justifySelf: 'center' }}>
                            {tempColumnValues[0].values.map(element => <Option key={element.value} value={element.value}>{element.value}</Option>)}
                        </Select>
                })

            }
        </div>
    )
}

export default RecordAddTable
