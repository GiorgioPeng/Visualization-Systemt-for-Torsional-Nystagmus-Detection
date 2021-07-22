import React from 'react'
import introductionImage from '../../assets/intro.png'
function index() {
    return (
        <div>
            <img src={introductionImage} style={{maxWidth:'100%'}}  alt='系统功能介绍图'/>
        </div>
    )
}

export default index
