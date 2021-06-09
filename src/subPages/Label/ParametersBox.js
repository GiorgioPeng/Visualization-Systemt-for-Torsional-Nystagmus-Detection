import React from 'react'
import { Button, Divider } from 'antd'
import { useGlobalState } from '../../globalState'
import RecordAddTable from '../../components/RecordAddTable'
import './ParamtersBox.css'
// 这个组件用于设置添加的新的记录的各个值
function ParametersBox(props) {
    const [state, updateState] = useGlobalState()
    const [tempRecord, setTempRecord] = React.useState(
        {
            key: '',
            start: '',
            end: '',
            nystagmus: '',
            method: '',
            rotate: '',
            direction: '',
            speed: '',
        },
    );
    const addRecord = () => {
        let temp = [...state.records]
        Object.getOwnPropertyNames(tempRecord).every(e => tempRecord[e] !== '') ?
            temp.push(tempRecord) : alert('有空值,添加失败')
        updateState('records', temp)
    }

    // type参数用于说明是记录开始时间还是结束时间
    const timeRecord = (type, time) => {
        time = type==='start'?'0:22':'0:30' //这里先随便弄个时间

        setTempRecord(() => {
            return {
                ...tempRecord,
                [type]: time,
            }
        });
    }
    return (
        <div>
            <Divider />
            <div className="ButtonGroup">
                <Button type="primary" shape="round" onClick={() => timeRecord('start', 1)}>眼震开始</Button>
                <Button type="primary" shape="round" danger onClick={() => timeRecord('end', 1)}> 眼震结束</Button>
                <Button type="dashed" shape="round" onClick={addRecord}>添加一行记录</Button>
            </div>
            <Divider />
            <RecordAddTable tempRecord={tempRecord}
                newKey={state.records.length + 1}
                setTempRecord={setTempRecord}/>
            <Divider>⬆️ 正在添加｜所有记录 ⬇️</Divider>
        </div>
    )
}

export default ParametersBox
