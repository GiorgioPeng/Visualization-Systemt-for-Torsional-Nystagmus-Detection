import React from 'react'
import CustomerDragger from'./CustomerDragger'
import VideoControl from './VideoControl'
import DataTable from './DataTable'
import ParamtersBox from './ParametersBox'
function index() {
    const tableHeader = [
        {
            title: '开始时间',
            dataIndex: 'start',
            key: 'start',
        },
        {
            title: '结束时间',
            dataIndex: 'end',
            key: 'end',
        },
        {
            title: '检查方式',
            dataIndex: 'method',
            key: 'method',
        },
        {
            title: '眼震',
            dataIndex: 'nystagmus',
            key: 'nystagmus',
        },
        {
            title: '旋转',
            dataIndex: 'rotate',
            key: 'rotate',
        },
        {
            title: '方向',
            dataIndex: 'direction',
            key: 'direction',
        },
        {
            title: '速度',
            dataIndex: 'speed',
            key: 'speed',
        }
    ];
    return (
        <div>
            <CustomerDragger/>
            <VideoControl/>
            <ParamtersBox columns={tableHeader}/>
            <DataTable columns={tableHeader}/>
        </div>
    )
}

export default index
