import React from 'react'
import { Button, Divider, notification, message } from 'antd'
import { useGlobalState } from '../../globalState'
import RecordAddTable from '../../components/RecordAddTable'

// 这个组件用于设置添加的新的记录的各个值
function ParametersBox(props) {
    const { videoRef } = props
    const [state, updateState] = useGlobalState()
    const initTempRecord = {
        key: '',
        开始时间: '',
        结束时间: '',
        眼震: '',
        检查方式: '',
        旋转: '',
        方向: '',
        速度: '',
    }

    const resetTempRecord = () => {
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
        if (Object.getOwnPropertyNames(tempRecord).some(e => tempRecord[e] === ''))
            message.error(`所添加记录有空值，请补全。`);
        else {
            temp.push(tempRecord)
            updateState('records', temp)
            resetTempRecord()
        }

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
            <div style={{
                height: '50px',
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center'
            }}>
                <Button type="primary" shape="round" onClick={() => timeRecord('开始时间')}>眼震开始</Button>
                <Button type="primary" shape="round" danger onClick={() => timeRecord('结束时间')}> 眼震结束</Button>
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
