import React from 'react'
import CustomerDragger from'./CustomerDragger'
import VideoControl from './VideoControl'
import DataTable from './DataTable'
import ParamtersBox from './ParametersBox'
import IllnessSelect from './IllnessSelect'
function index() {
    return (
        <div>
            <CustomerDragger/>
            <VideoControl/>
            <ParamtersBox/>
            <DataTable/>
            <IllnessSelect/>
        </div>
    )
}

export default index
