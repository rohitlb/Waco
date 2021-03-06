// you need fontawesome and tachyons for this component to work
import React from 'react'
import { Component } from 'react';
import styles from './search.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons'


class SearchBox extends Component{
render(){
    return(
        <div className="flex items-center bg-white br4  shadow-1 ">
        <FontAwesomeIcon icon={faSearch} style={{width:"36px"}} className={styles.search}/>
        <input type="search" className={`pa2 bn w-90 outline-0 br4 `} placeholder="Search Modules"/>
        </div>
    )
}
}
export default SearchBox