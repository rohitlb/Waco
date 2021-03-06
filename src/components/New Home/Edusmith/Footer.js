import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMarker, faMapMarker, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'


export const Footer=()=>{
    return(
        <div className="pl6 pr6 pa4 tc flex items-center justify-between mt4"
        style={{backgroundColor:"#3E4956"}}>
            <div className="w-50">
                
            <h1 className="white tl "
            style={{fontFamily:"Mada"}}
            >Edusmith</h1>
            <p className="f5 tl">Get the apropriate results for the queries in seconds. 
                And get updated with new tech and business
                 ideas. Press the bell icon in our YouTube channel to get notifications.</p>
            </div>
            <div>
            <h1 className="white "
            style={{fontFamily:"Mada"}}>Contact Us</h1>
            <div className="tl">
                <p className="f4"><FontAwesomeIcon icon={faMapMarker}/>&nbsp; 7 Days</p>
                <p className="f4"><FontAwesomeIcon icon={faEnvelopeOpen}/>&nbsp; edusmith.edu2020@gmail.com</p>
                <p className="f4"><FontAwesomeIcon icon={faYoutube}/>&nbsp; Youtube Channel</p>
            </div>
            </div>

        </div>
    )
}