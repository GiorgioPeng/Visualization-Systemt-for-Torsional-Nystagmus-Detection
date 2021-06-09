import React from 'react'
import { Select } from 'antd'
import './RecordAddTable.css'
import { useGlobalState } from '../globalState'
import paramtersValue from '../assets/data.json' // 导入给定的参数们

const { Option } = Select;

function RecordAddTable(props) {
    const [state,] = useGlobalState()
    const columns = state.tableHeader
    const { tempRecord, setTempRecord, newKey } = props;
    React.useEffect(() => {
        setTempRecord(() => {
            return {
                ...tempRecord,
                'key': newKey
            }
        });
    }, [newKey, state])

    const keyTranslate = (key) => {
        let resultKey = ''
        switch (key) {
            case '检查方式':
                resultKey = 'method'
                break
            case '眼震':
                resultKey = 'nystagmus'
                break
            case '旋转':
                resultKey = 'rotate'
                break
            case '方向':
                resultKey = 'direction'
                break
            case '速度':
                resultKey = 'speed'
                break
            default:
                resultKey = ''
                break
        }
        return resultKey
    }

    const handleChange = (newValue, key) => {
        let label = keyTranslate(key)
        if (label === '')
            return
        setTempRecord(() => {
            return {
                ...tempRecord,
                [label]: newValue
            }
        });
    }
    return (
        <div className="container">
            {
                columns.map((element) => {
                    return <div key={element.title}>{element.title}</div>
                })
            }
            {
                columns.map((element, index) => {
                    let tempColumnValues = paramtersValue.filter(i => i.label === element.title) // 拿出对应的列的可选参数
                    return tempColumnValues.length === 0 ?
                        <div key={element.title} style={{ width: 120, justifySelf: 'center' }}>{index === 0 ? tempRecord['start'] : tempRecord['end']}</div>
                        :
                        <Select key={element.title} style={{ width: 120, justifySelf: 'center' }} onSelect={(value) => handleChange(value, element.title)}>
                            {tempColumnValues[0].values.map((i, index) => <Option key={index} value={i.value} >{tempRecord[keyTranslate(element.title)] === '' ? '' : i.value}</Option>)}
                        </Select>
                })
            }
        </div>
    )
}

export default RecordAddTable
