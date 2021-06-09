import React from 'react'
import { Table } from 'antd';
import { useGlobalState } from '../../globalState'
import useForceUpdate from '../../components/useForceUpdate'

function DataTable() {
    const [state,] = useGlobalState()
    const columns = state.tableHeader
    return (
        <Table columns={columns}  dataSource={state.records} />
    )
}

export default DataTable


