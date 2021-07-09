import React from 'react'
import SpecialPlayer from './SpecialPlayer'

function index() {
    const remoteVideoSrc = 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
    const section = [{ start: 1.9, end: 10 }, { start: 23.1, end: 30.5 }]
    return (
        <div>
            <SpecialPlayer remoteVideoSrc={remoteVideoSrc} section={section}/>
        </div>
    )
}

export default index
