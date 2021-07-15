import React from 'react'
import baseUrl from '../../utils/baseURL'
import SpecialPlayer from './SpecialPlayer'
import DetectTable from './DetectTable'
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
            {/* <DetectTable /> */}
            <SpecialPlayer remoteVideoSrc={[baseUrl + '/' + state.remoteVideoCenterSrc, baseUrl + '/' + state.remoteVideoStreamSrc]} />
            {/* <SpecialPlayer remoteVideoSrc={baseUrl + '/' + state.remoteVideoCenterSrc} /> */}
            <DetectButton />
        </div>
    )
}

export default Location
