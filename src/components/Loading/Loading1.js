// you need tachyons to use this

import React, { Component } from "react"
import styles from './loading1.module.css'


class Loading1 extends Component{
    
    render(){
        return(
            <div className={` ${styles.box}`}>
               
            <div className={styles.Loading}>
            </div>
            <h1 className="ma3 white">Please wait...</h1>
            </div>
            )
        }
    }
    
export default Loading1