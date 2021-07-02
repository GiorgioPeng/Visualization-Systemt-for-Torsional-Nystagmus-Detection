import React from 'react'
import { Button, Divider,notification } from 'antd'
import { useGlobalState } from '../../globalState'
import RecordAddTable from '../../components/RecordAddTable'
import './ParamtersBox.css'
// 这个组件用于设置添加的新的记录的各个值
function ParametersBox(props) {
    const {videoRef} = props
    const [state, updateState] = useGlobalState()
    const initTempRecord = {
        key: '',
        start: '',
        end: '',
        nystagmus: '',
        method: '',
        rotate: '',
        direction: '',
        speed: '',
    }

    const resetTempRecord = ()=>{
        setTempRecord(initTempRecord)
    }
    const [tempRecord, setTempRecord] = React.useState(initTempRecord);

    const addRecord = () => {
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
        let temp = [...state.records]
        console.log(tempRecord)
        Object.getOwnPropertyNames(tempRecord).every(e => tempRecord[e] !== '') ?
            temp.push(tempRecord) : alert('有空值,添加失败')
        updateState('records', temp)
        resetTempRecord()
    }

    // type参数用于说明是记录开始时间还是结束时间
    const timeRecord = (type) => {
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
        setTempRecord(() => {
            return {
                ...tempRecord,
                [type]: videoRef.current?.video.props.player.currentTime,
            }
        });
    }
    return (
        <div>
            <Divider />
            <div className="ButtonGroup">
                <Button type="primary" shape="round" onClick={() => timeRecord('start')}>眼震开始</Button>
                <Button type="primary" shape="round" danger onClick={() => timeRecord('end')}> 眼震结束</Button>
                <Button type="dashed" shape="round" onClick={addRecord}>添加一行记录</Button>
            </div>
            <Divider />
            <RecordAddTable tempRecord={tempRecord}
                newKey={state.records.length + 1}
                setTempRecord={setTempRecord} />
            <Divider>⬆️ 正在添加｜所有记录 ⬇️</Divider>
        </div>
    )
}

export default ParametersBox
