import React from 'react'
import { Table, Tag, Space } from 'antd';

function DataTable() {
    const columns = [
        {
            title: '开始时间（帧）',
            dataIndex: 'start',
            key: 'start',
        },
        {
            title: '结束时间（帧）',
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

    const data = [
        {
            key: '1',
            start: '一个帧',
            end: '一个帧',
            nystagmus: '有',
            method:'人工',
            rotate: 1123,
            direction:1232,
            speed:123123,
        },
        {
            key: '2',
            start: '一个帧',
            end: '一个帧',
            nystagmus: '有',
            method:'人工',
            rotate: 1123,
            direction:1232,
            speed:123123,
        },
        {
            key: '3',
            start: '一个帧',
            end: '一个帧',
            nystagmus: '有',
            method:'人工',
            rotate: 1123,
            direction:1232,
            speed:123123,
        },
    ];
    return (
        <Table columns={columns} dataSource={data} />
    )
}

export default DataTable


