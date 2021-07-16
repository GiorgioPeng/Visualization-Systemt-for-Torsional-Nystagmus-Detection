import React from 'react'
import { Progress } from 'antd'
import baseUrl from '../../utils/baseURL'
import SpecialPlayer from './SpecialPlayer'
// import DetectTable from './DetectTable'
import DetectButton from './DetectButton'
import { useGlobalState } from '../../globalState'

function Location() {
    const [state,] = useGlobalState()
    // const remoteVideoSrc = 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
    // const section = [{ start: 1.9, end: 10 }, { start: 23.1, end: 30.5 }]
    // const [sections, setSections] = React.useState([])
    //     {
    //         key: '1',
    //         start: '0:30',
    //         end: '0:31',
    //         operation: '跳转'
    //     },

    return (
        <div>

            {
                state.remoteVideoStreamRGBSrc === '' ?
                    <div style={{ textAlign: 'center', color: 'red', fontSize: '40px', fontWeight: 'bold' }}>
                        <p>{state.remoteVideoStreamSrc === '' ? '请按顺序使用本系统!' : '视频加载中，请耐心等待。'}</p>
                        <Progress
                            type="line"
                            strokeColor={{
                                '0%': '#108ee9',
                                '100%': '#87d068',
                            }}
                            percent={100}
                            showInfo={false}
                            status="active"
                        />
                    </div>
                    :
                    <>
                        <SpecialPlayer remoteVideoSrc={[baseUrl + '/' + state.remoteVideoCenterSrc, baseUrl + '/' + state.remoteVideoStreamRGBSrc]} />
                        <DetectButton />
                    </>
            }
        </div>
    )
}

export default Location
