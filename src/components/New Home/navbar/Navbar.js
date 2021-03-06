import React from 'react'
// you need fontawesome for this component to work
import { Component } from 'react';
import styles from './navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons'
import SearchBox from './searchBox.js/SearchBox';
import { Link } from 'react-router-dom';

class Navbar extends Component{
    constructor(){
        super()
        this.state={
            isOpen:false
        }
    }
    handle=()=>{
        this.setState({isOpen:!this.state.isOpen})
    }
    render(){
        const {isOpen}=this.state
        return(
            <div className={`flex justify-around z-max relative items-center 
            pa3 ${styles.nav}`}  style={{fontFamily:"Mada"}}>
                <div className="logo " style={{fontFamily:"Bilbo,Sans-Serif",fontWeight:"600",fontSize:"39px"}}>
                    7 Days
                </div>
                <div className={`${styles.menu} ${isOpen?styles.Open:styles.notOpen}
                 overflow-hidden flex w-40  justify-around items-center list`}>
                   <Link to="/" className="grow" style={{textDecoration:"none",color:"#737070"}}><li >Home</li></Link>
                   <Link to="/" className="grow" style={{textDecoration:"none",color:"#737070"}}><li >About Us</li></Link>
                   <Link to="/" className="grow" style={{textDecoration:"none",color:"#737070"}}><li >Contact</li></Link>               
                </div>
                <div style={{marginLeft:"auto"}} className={styles.bars}>
                <FontAwesomeIcon icon={faBars} className="f4" onClick={this.handle} />
                
                </div>
            </div>
        )
    }

}
export default Navbar