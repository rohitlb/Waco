import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

export const Footer=()=>{
    return(
        <div className="flex justify-between items-center pa3" style={{backgroundColor:"#0FCEF7"}}>
        <FontAwesomeIcon icon={faFacebook} size="3x" className="white"/>
        <p className="white">© WACO. All rights reserved</p>
    </div>
    )
}