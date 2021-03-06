import React from 'react'
import { Table } from 'antd';
import { useGlobalState } from '../../globalState'

function DataTable() {
    const [state,] = useGlobalState()
    const columns = state.labelTableHeader
    return (
        <Table columns={columns}  dataSource={state.records} />
    )
}

export default DataTable


