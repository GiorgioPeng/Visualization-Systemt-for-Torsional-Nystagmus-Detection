import React from 'react'
import { Table } from 'antd';

function DataTable(props) {
    const {columns} = props;
    const data = [
        {
            key: '1',
            start: '0:30',
            end: '0.35',
            nystagmus: '有',
            method:'人工',
            rotate: 1123,
            direction:1232,
            speed:123123,
        },
        {
            key: '2',
            start: '0:50',
            end: '0:56',
            nystagmus: '有',
            method:'人工',
            rotate: 1123,
            direction:1232,
            speed:123123,
        },
        {
            key: '3',
            start: '0:19',
            end: '0:30',
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


