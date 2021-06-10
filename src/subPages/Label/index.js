import React from 'react'
import CustomerDragger from'./CustomerDragger'
import VideoControl from './VideoControl'
import DataTable from './DataTable'
import ParamtersBox from './ParametersBox'
import IllnessSelect from './IllnessSelect'
function index() {
    const videoRef = React.createRef() // 视频的ref
    return (
        <div>
            <CustomerDragger/>
            <VideoControl videoRef={videoRef}/>
            <ParamtersBox videoRef={videoRef}/>
            <DataTable/>
            <IllnessSelect/>
        </div>
    )
}

export default index
