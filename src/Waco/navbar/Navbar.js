import React from 'react'
// you need fontawesome for this component to work
import { Component } from 'react';
import styles from './navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTint } from '@fortawesome/free-solid-svg-icons'
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
        const {menu}=this.props
        const {isOpen}=this.state
        return(
            <div className={`flex justify-around z-max relative items-center 
            pa3 ${styles.nav}`}  style={{fontFamily:"Mada",backgroundColor:"#0FCEF7"}}>
                <div className="logo white" style={{fontFamily:"Bilbo,Sans-Serif",fontWeight:"600",fontSize:"39px"}}>
                    Waco &nbsp;
                    <FontAwesomeIcon icon={faTint} color="#fff"/>
                </div>
                <div className={`${styles.menu} ${isOpen?styles.Open:styles.notOpen}
                 overflow-hidden flex w-50  justify-around items-center list`}>
                    {menu.length?menu.map((value,i)=>{
                        return(
                            <Link key={i} to={value.link} className="grow" style={{textDecoration:"none",color:"#fff"}}><li >{value.name}</li></Link>
                            
                        )
                    }):""}
                    </div>
                <div style={{marginLeft:"auto"}} className={styles.bars}>
                <FontAwesomeIcon icon={faBars} className="f4" onClick={this.handle} />
                
                </div>
            </div>
        )
    }

}
export default Navbar