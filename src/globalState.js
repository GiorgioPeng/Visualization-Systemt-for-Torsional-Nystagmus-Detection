import React, { useState, createContext, useContext, } from 'react';
// 提供全局状态
const GloalStateContext = createContext(null)

const initState = {
    records: [],
    tableHeader: [
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
    videoFile:null,
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