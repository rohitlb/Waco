// you need tachyons and react-fontawesome to use this

import React, { Component } from "react"
import styles from './loading3.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHourglassHalf } from '@fortawesome/free-solid-svg-icons'

class Loading3 extends Component{
    
    render(){
        return(
            <div className={`${styles.box}`}>
               
            <FontAwesomeIcon icon={faHourglassHalf} className={styles.fa}/>
        
            <h1 className="ma3 white">Please wait...</h1>
            </div>
            )
        }
    }
    
export default Loading3