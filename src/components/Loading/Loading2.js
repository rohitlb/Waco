// you need tachyons to use this

import React, { Component } from "react"
import styles from './loading2.module.css'


class Loading2 extends Component{
    
    render(){
        return(
            <div className={` ${styles.box}`}>
            
            <div class="wrap">
            <div class={`${styles.dot} ${styles.dot1}`}></div>
            <div class={`${styles.dot} ${styles.dot2}`}></div>
            <div class={`${styles.dot} ${styles.dot3}`}></div>
            <div class={`${styles.dot} ${styles.dot4}`}></div>
            <div class={`${styles.dot} ${styles.dot5}`}></div>
            </div>
            <h6 className="ma3 black">Please wait...</h6>
            </div>
            )
        }
    }
    
    export default Loading2