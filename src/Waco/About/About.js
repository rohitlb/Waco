import React from 'react'
import styles from './about.module.css'
import { Footer } from '../Footer'
import right from './right.jpg'
export const About=()=>{
    return(
        <div className="bg-near-white">
            <div className={`vh-75   ${styles.back}`}>
            </div>
            <div className="container  pa3">
            <h1  className="tc mt5 mb5" 
                style={{color:"rgb(75, 76, 77)",fontWeight:"600",fontSize:"59px",fontFamily:"Overlock"}}>
                    About Us
            </h1>
            <div className="flex container bg-white pa3 justify-between vh-100">
            <div className="ml3 mr3 flex flex-column">
            <h1  className=" " 
                style={{fontWeight:"600",fontSize:"29px",fontFamily:"Overlock"}}>
                    Waco
            </h1>
            <p style={{fontFamily:"Mada",fontSize:"17px",color:"rgb(138, 133, 133)",lineHeight:"30px"}}>
                Waco is an organization which works for conservation and management of Water Resources through the Production of Most efficient Taps. We are one of the Emerging Sustainable Service Providing Industry in India. We also provide Research & Consultancy Services. <br/>
Our Taps Aim at conserving water and electricity in the most effective way possible, along with making your wash basins and sinks look beautiful with our modern and wide-range of designs.
We have a very easy installation process and we support online orders of small or large amount. Along with artistic designs we ensure durability of our product.
</p>
<h1  className=" " 
                style={{fontWeight:"600",fontSize:"29px",fontFamily:"Overlock"}}>
                    Our Vision
            </h1>
            <p style={{fontFamily:"Mada",fontSize:"17px",color:"rgb(138, 133, 133)",lineHeight:"30px"}}>
            “Our vision is to become a leading brand in providing best solutions when it comes to water conservative and energy effective taps. Given this, we have designed and created an inclusive road-map to establish sustainable solutions for our growth. We aim to establish a variety of business parents inside the organization and scaleup each individual by a collaborative work culture. <br/>
To fulfil these goals, we are actively engaging with diversified stakeholders, both in the public and private domain, to drive faster development movements. The revolution is begun and join us for “Collaborative Development”.
            </p>
            </div>
            <div className="ml3 mr3" style={{width:"1500px"}}>
            <img src={right} alt="" className="w-100"/>
            </div>
            </div>
            <h1  className="tc mt5 mb5" 
                style={{color:"rgb(75, 76, 77)",fontWeight:"600",fontSize:"59px",fontFamily:"Overlock"}}>
                   Meet The Founders
            </h1>
            <div className="flex justify-around mb4">
                <div className="bg-blue tc pa4" style={{width:"250px"}}>
                <h1  className="tc mb4 white" 
                style={{fontWeight:"600",fontSize:"29px",fontFamily:"Overlock"}}>
                    Rohit Singh
            </h1>
            <h1  className="tc white" 
                style={{fontWeight:"500",fontSize:"19px",fontFamily:"Overlock"}}>
                   <br/> <br/> CEO
            </h1>

                </div>
                <div className="bg-blue pa4" style={{width:"250px"}}>
                <h1  className="tc mb4 white" 
                style={{fontWeight:"600",fontSize:"29px",fontFamily:"Overlock"}}>
                    Sandeep Tiwari
            </h1>
            <h1  className="tc white" 
                style={{fontWeight:"500",fontSize:"19px",fontFamily:"Overlock"}}>
                  <br/> <br/>  COO
            </h1>
                </div>
                <div className="bg-blue pa4" style={{width:"250px"}}>
                <h1  className="tc mb4 white" 
                style={{fontWeight:"600",fontSize:"29px",fontFamily:"Overlock"}}>
                    Arpit Bhusan Sharma

            </h1>
            <h1  className="tc white" 
                style={{fontWeight:"500",fontSize:"19px",fontFamily:"Overlock"}}>
                   President
            </h1>
                </div>
                <div className="bg-blue pa4" style={{width:"250px"}}>
                <h1  className="tc mb4 white" 
                style={{fontWeight:"600",fontSize:"29px",fontFamily:"Overlock"}}>
                    Kinjal Tiwari
            </h1>
            <h1  className="tc white" 
                style={{fontWeight:"500",fontSize:"19px",fontFamily:"Overlock"}}>
                  <br/> <br/> President
            </h1>
                </div>
            </div>



            {/* <h1>About</h1>
        <p>Waco is an organization which works for conservation and management of Water Resources through the Production of Most efficient Taps. We are one of the Emerging Sustainable Service Providing Industry in India. We also provide Research & Consultancy Services.
Our Taps Aim at conserving water and electricity in the most effective way possible, along with making your wash basins and sinks look beautiful with our modern and wide-range of designs.
We have a very easy installation process and we support online orders of small or large amount. Along with artistic designs we ensure durability of our product.</p>
       */}
            </div>
            <Footer/>
          </div>
    )
}