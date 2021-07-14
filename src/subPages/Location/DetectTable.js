import React from 'react'
import { Table, Divider } from 'antd';
import { useGlobalState } from '../../globalState'
function DetectTable() {
    const [state,] = useGlobalState()
    const columns = state.detectTableHeader
    // const data = [
    //     {
    //         key: '1',
    //         start: '0:30',
    //         end: '0:31',
    //         operation: '跳转'
    //     },
    //     {
    //         key: '2',
    //         start: '0:40',
    //         end: '0:45',
    //         operation: '跳转'
    //     },
    //     {
    //         key: '3',
    //         start: '0:58',
    //         end: '0:59',
    //         operation: '跳转'
    //     },
    //     {
    //         key: '4',
    //         start: '1:40',
    //         end: '1:45',
    //         operation: '跳转'
    //     },
    // ];
    return (
        <div style={{ marginTop: '40px' }}>
            <Divider><h1>检测后的眼震区间</h1></Divider>
            {
                state.sections.length !== 0 ?
                    <Table
                        style={{
                            textAlign: 'center'
                        }}
                        columns={columns}
                        dataSource={
                            state.sections.map((i, index) => {
                                return {
                                    key: index,
                                    start: i[0],
                                    end: i[1],
                                    operation: '跳转'
                                }
                            })
                        } />
                    :
                    <>
                    </>
            }
        </div>
    )
}

export default DetectTable