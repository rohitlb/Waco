import React, { Component } from 'react'
import styles from './edusmith.module.css'
import Navbar from './navbar/Navbar'
import { HomeButton } from './HomeButton'
import cad from './cad.png'
import python from './python.jpg'
import SearchBox from './navbar/searchBox.js/SearchBox'
import { Footer } from './Footer'
import { get } from '../../../script'
export class Edusmith extends Component{
    constructor(){
        super()
        this.state={
            courses:[]
        }
    }
    async componentDidMount(){
        const courses= await get('allcourses')
        console.log(courses)
        this.setState({courses})
    }
    
    
    render(){
        const {courses}=this.state
        if(courses.length)
        return(
            <div>
            <Navbar/>
        <div className={`${styles.back} flex white justify-center items-center flex-column pa3 vh-100`}>
            <h1 style={{fontWeight:"600",fontSize:"60px",fontFamily:"Bad Script"}}>
Eduसाकार</h1>
            <SearchBox/><br/><br/>
            <h2
            style={{fontWeight:"600",fontSize:"50px",fontFamily:"Overlock"}}
            >Learn ^ Grow ^ Achieve</h2>
    </div>

            <h1 className="tc mt5 mb6" 
                style={{fontWeight:"600",fontSize:"59px"}}>
                    All Courses</h1>
                {courses.map((value,i)=>{
                    return(

                        <div key={i}>

            <div  className="flex justify-evenly container">
                <div className="w-70">
                    <h2 
                    style={{fontWeight:"600",fontSize:"40px",fontFamily:"Overlock"}}>
                        {value.name}</h2>
                        <p style={{fontWeight:"400",fontSize:"18px",color:"#7a7a7a",fontFamily:"Roboto,Sans-serif"}}>
                        {value.description}  </p>
                        
                <HomeButton/>
            <br/><br/>
                </div>
                <div className="pa2 grow pointer" style={{width:"400px"}}>
                    <img alt="edusmith" src={value.image} className="w-100"/>
                </div>
            </div>
            <div className="container mt5 mb5">
            <hr className="bg-black w-100 "/>
            </div>
            </div>
                )
                })}
                
            <div  className="flex justify-center items-center mt5 mb5 container">
              <h3>More Courses Coming Soon</h3>

          </div>
          <Footer/>
           
         
        </div>
)
else return "loading"
}
}
