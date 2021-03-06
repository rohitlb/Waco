import React from 'react'
import Navbar from './navbar/Navbar'
import styles from './home.module.css'
import edusmith from './edusmith.jpg'
import days from './7days Entertainment.jpg'
import Waco from './waco.jpg'
import jungle from './jungle.jpg'
import { HomeButton } from './HomeButton'
import { Footer } from './Footer'
import { Link } from 'react-router-dom'
const Home=()=>{
return(
    <div>
        <Navbar/>
        <div className={`vh-100 white pa3 flex flex-column justify-center ${styles.back}`}>
            <h1
            style={{fontFamily:"Roboto,Sans-Serif",fontSize:"59px",fontWeight:"600"}}>
                Nourishing the Nature With 
            </h1>
            <h1 className="tc"
            style={{fontFamily:"Roboto,Sans-Serif",fontSize:"59px",fontWeight:"600"}}>
               Flourishing Brains !! 
            </h1>
            <section className="tc">

            <a href="#edusmith">
                
                <HomeButton />
                </a> 

            </section>
            
        </div>
                <h1 id="edusmith" className="tc mt5 mb6" 
                style={{fontWeight:"600",fontSize:"59px"}}>
                    Our Projects</h1>
            <div  className="flex justify-evenly container">
                <div className="w-70">
                    <h2 
                    style={{fontWeight:"600",fontSize:"40px",fontFamily:"Overlock"}}>
                        Eduसाकार</h2>
                        <p style={{fontWeight:"400",fontSize:"18px",color:"#7a7a7a",fontFamily:"Roboto,Sans-serif"}}>
                        We are a marketplace for professional and academic courses designed to meet the industry standard. 
                        We make the courses based on the trade of the individuals and groups
                        </p>
                       <Link to="/EdusmithHome">
                        <HomeButton/>
                       </Link>
                           
            <br/><br/>
                </div>
                <div  className="pa2 grow pointer" style={{width:"400px"}}>
                    <img alt="edusmith" src={edusmith} className="w-100"/>
                </div>
            </div>
            <div className="container mt5 mb5">
            <hr className="bg-black w-100 "/>
            </div>
            <div  className="flex justify-evenly container">
                <div  className="pa2 grow pointer" style={{width:"400px"}}>
                    <img alt="project 4 jungle" src={jungle} className="w-100"/>
                </div>
                <div className="tr w-70">
                    <h2 
                    style={{fontWeight:"600",fontSize:"40px",fontFamily:"Overlock"}}>
                        Project 4 Jungle</h2>
                        <p style={{fontWeight:"400",fontSize:"18px",color:"#7a7a7a",fontFamily:"Roboto,Sans-serif"}}>
                        We are proud to introduce ourselves as one of the leading company in field of event management be it brand endorsements, press conferences, seminars,
                         live concerts, art &amp; celebrity management, theme parties etc. </p>
                         <HomeButton/>

                         <br/><br/>
                </div>
            </div>
            <div  className="container mt5 mb5">
            <hr className="bg-black w-100 "/>
            </div>
            <div className="flex justify-evenly container">
                <div className="w-70">
                    <h2 
                    style={{fontWeight:"600",fontSize:"40px",fontFamily:"Overlock"}}>
                        Waco</h2>
                        <p style={{fontWeight:"400",fontSize:"18px",color:"#7a7a7a",fontFamily:"Roboto,Sans-serif"}}>
                        We are a marketplace for professional and academic courses designed to meet the industry standard. 
                        We make the courses based on the trade of the individuals and groups
                        </p>
                        <HomeButton/> <br/><br/>

                </div>
                <div  className="pa2 grow pointer" style={{width:"400px"}}>
                    <img alt="Waco" src={Waco} className="w-100"/>
                </div>
            </div>
            <div className="container mt5 mb5">
            <hr className="bg-black w-100 "/>
            </div>
            <div className="flex justify-evenly container">
                <div   className="pa2 grow pointer" style={{width:"400px"}}>
                    <img alt="7 days Entertainment" src={days} className="w-100"/>
                </div>
                <div className="tr w-70">
                    <h2 
                    style={{fontWeight:"600",fontSize:"40px",fontFamily:"Overlock"}}>
                        7 Days Entertainment</h2>
                        <p style={{fontWeight:"400",fontSize:"18px",color:"#7a7a7a",fontFamily:"Roboto,Sans-serif"}}>
                        We are a marketplace for professional and academic courses designed to meet the industry standard. 
                        We make the courses based on the trade of the individuals and groups
                        </p>
                        <HomeButton/> <br/><br/>

                </div>
            </div>
            <Footer/>
    </div>
)
}
export default Home