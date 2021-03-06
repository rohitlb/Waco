import React from 'react'
import styles from './homeButton.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleDown, faShoppingCart, faSearchPlus, faSearch } from '@fortawesome/free-solid-svg-icons'

export const HomeButton=()=>{
    return(
        <button className={`grow ${styles.btn}`}
            
        >Buy Now &nbsp;
        <FontAwesomeIcon icon={faShoppingCart}/>
        </button>
    )
}