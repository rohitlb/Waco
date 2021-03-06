import React from 'react'
// you need fontawesome for this component to work
import { Component } from 'react';
import styles from './navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons'
import SearchBox from './searchBox.js/SearchBox';
import { Link } from 'react-router-dom';
import logo from './logo.png'
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
            <div className="absolute top-0 w-100 pa2">
            <div className={`flex justify-around  z-max relative items-center 
            pa3 ${styles.nav}`}  style={{fontFamily:"Mada"}}>
                <div className="logo" style={{width:"20%"}}>
                    <img src={logo}/>
            
                </div>
                <div className={`${styles.menu} ${isOpen?styles.Open:styles.notOpen}
                 overflow-hidden flex w-50 white  justify-around items-center list`}>
                    <li className="menu-item">Home</li>
                    <li className="menu-item">About Us</li>
                    <Link to="/edusmith/login" className="pointer grow" style={{textDecoration:"none",color:"white"}}>Register/Login</Link>                   
                    <Link to="/" className="grow" style={{textDecoration:"none",color:"white"}}><li >Back to 7days</li></Link>
                </div>
                <div style={{marginLeft:"auto"}} className={styles.bars}>
                <FontAwesomeIcon icon={faBars} className="f4" onClick={this.handle} />
                
                </div>
            </div>
                 </div>
        )
    }

}
export default Navbar