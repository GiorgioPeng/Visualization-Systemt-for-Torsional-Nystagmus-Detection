import React, { useState, createContext, useContext, } from 'react';
import { Button, Space } from 'antd'
// 提供全局状态
const GloalStateContext = createContext(null)

const initState = {
    records: [],
    labelTableHeader: [
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
    ],
    detectTableHeader: [
        {
            title: '起始时间',
            dataIndex: 'start',
            key: 'start',
        },
        {
            title: '终止时间',
            dataIndex: 'end',
            key: 'end',
        },
        {
            title: '操作',
            dataIndex: 'operation',
            key: 'operation',
            render: (text, record) => (
                <Space size="middle">
                    <Button> {record.operation}</Button>
                </Space>
            ),
        }
    ],
    videoFile: null,
    remoteVideoSrc: '', // 这个是原始视频的访问地址
    remoteVideoUsefulFrameSrc:'',  // 这个是有效帧视频的访问地址
    remoteVideoCenterSrc:'',  // 这个是进行对标后视频的访问地址
    remoteVideoStreamSrc:'',  // 这个是光流视频的访问地址
    // 这里放置初始状态
};
export function GlobalStateProvider({ children }) {
    const [state, setState] = useState(initState);

    const updateState = (key, value) => {
        console.log(key, value)
        setState((lastState) => {
            return {
                ...lastState,
                [key]: value
            }
        })
    }
    const resetState = () => {
        setState(initState)
    }
    return (
        <GloalStateContext.Provider value={[state, updateState, resetState]}>
            {children}
        </GloalStateContext.Provider>
    )
}
export function useGlobalState() {
    return useContext(GloalStateContext)
}