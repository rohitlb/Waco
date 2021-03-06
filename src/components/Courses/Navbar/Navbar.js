import React, { Component } from 'react'
import styles from './Navbar.module.css'
import logo from '../../../images/edusmithLogo.png'
import { Redirect, Link } from 'react-router-dom'
class Navbar extends Component{
        constructor(){
            super()
            this.state={
                logout:0
            }
        }
    logout=()=>{
        localStorage.clear('user')
        this.setState({logout:true})
    }
    render(){
       const {courseId}=this.props
        const {logout}=this.state
      if(courseId)
        return(
            <div className="flex items-center justify-between pa2"
            style={{backgroundColor:"#175E79"}}
            >
            <div className={styles.logo}>
                <img src={logo} alt=""/>
            </div>
            <div className={`w-80 flex f3 list white justify-end items-center`}>
                <Link style={{textDecoration:"none",color:"white"}} to={courseId}>
                <li className="pa3 grow pointer">Syllabus</li>
                
                </Link>
                <Link style={{textDecoration:"none",color:"white"}} to="student-profile/courses">
                <li  className="pa3 grow pointer">Dashboard</li>
                </Link>
                <li onClick={this.logout} className="pa3 grow pointer">Logout</li>
            </div>
            {logout?<Redirect to="login"/>:""}
            </div>
        )
    }
}
export default Navbar