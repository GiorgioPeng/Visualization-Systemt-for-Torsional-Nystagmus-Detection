import React from 'react'
import CustomerDragger from'./CustomerDragger'
import VideoControl from './VideoControl'
import DataTable from './DataTable'
import ParamtersBox from './ParametersBox'
function index() {
    return (
        <div>
            <CustomerDragger/>
            <VideoControl/>
            <ParamtersBox/>
            <DataTable/>
        </div>
    )
}

export default index
