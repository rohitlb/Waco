import React from 'react'
import styles from './Waco.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdjust } from '@fortawesome/free-solid-svg-icons'
import { Footer } from '../Footer'
export const Home=()=>{
    return(
        <div>
           
            <div id="carouselExampleIndicators" style={{height:"100vh"}} className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner vh-100" style={{height:"100vh"}}>
    <div className={`carousel-item relative ${styles.img1}`} style={{height:"100vh"}}>
      <div className={`${styles.box1}`}>
          <h1>Best Energy Efficient</h1>
          <h1>Taps Right Here At</h1>
          <h1>Your Home</h1>
          <p>Saves Electricity More Than You Ever Think Of</p>
      </div>
      <img className="d-block w-100" src={`https://res.cloudinary.com/drcx4jfun/image/upload/v1595348026/b2_afiwjb.jpg`} alt="Second slide"/>
    </div>
    <div className={`carousel-item active ${styles.img2}`} style={{height:"100vh"}}>
    <div className={`${styles.box2}`}>
        <h1>The Best Water <br/> Saving Taps Right <br/> Here At Your Home</h1>
        <p>Can Reduce Wastage Of Water Upto 98%.</p>
     </div>
      <img className="d-block w-100" src={`https://res.cloudinary.com/drcx4jfun/image/upload/v1595348021/b1_i466u3.jpg`} alt="First slide"/>
    </div>
    <div className={`carousel-item ${styles.img3}`} style={{height:"100vh"}}>
    <div className={`${styles.box3}`}>
      <h1>Just Order And Help <br/> Us In Saving <br/> Environment</h1>
      <p>And Yes Intallation Is Every Easy, So Select The <br/> Contact Us Button To Order Now .</p>
      </div>
      <img className="d-block w-100" src={`https://res.cloudinary.com/drcx4jfun/image/upload/v1595348027/b3_k8x7v8.jpg`} alt="Third slide"/>
    </div>
  </div>
  {/* <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a> */}
</div>
<h1  className="tc mt5 mb4" 
                style={{fontWeight:"600",fontSize:"59px",fontFamily:"Roboto"}}>
                    Our Products
</h1>
<div className="tc flex justify-center pa3">
<div style={{width:"400px"}} className="grow pointer shadow-hover">
    <img className="br4" src={`https://res.cloudinary.com/drcx4jfun/image/upload/v1595609818/WhatsApp_Image_2020-07-24_at_10.17.21_PM_gfascp.jpg`} alt="Products"/>
</div>
</div> <br/> <br/>
<div  className="flex justify-around container mt4">
                <div  className="pa2 grow pointer" style={{width:"400px"}}>
                    <img alt="project 4 jungle" src={`https://res.cloudinary.com/drcx4jfun/image/upload/v1595347350/a2_p8mk8x.jpg`} className="w-100"/>
                </div>
                <div className="tl ml6 w-70">
                    <h4 
                    style={{fontWeight:"600",fontSize:"2rem",color: "#031f9a"}}>
                        What We Do</h4>
                        <p style={{fontWeight:"600",fontSize:"1.2rem",letterSpacing:"2px",lineHeight:2,fontFamily:"Mada,Sans-serif"}}>
                        WELL OUR WORK START WITH SOLVING YOUR PROBLEMS.THERE ARE  DAY TO DAY PROBLEMS RELATED TO TAP,FEW ARE:-
                         </p>
                         <p 
                         style={{fontWeight:"400",fontSize:"1rem",color:"#777",letterSpacing:"1px",lineHeight:2,fontFamily:"Mada,Sans-serif"}}
                         >
                         Wastage of water while using faucet or wash basin
                            <br/>
                        Closing and Opening problem while using the faucet. and yes our overall new water conserving and energy efficient taps solves all your problems.
                         </p>
                         {/* <HomeButton/> */}

                         <br/><br/>
                </div>
            </div>
            <div  className="flex justify-around container mt6">
                <div className="tl mr6 w-70">
                    <h4 
                    style={{fontWeight:"600",fontSize:"2rem",color: "#031f9a"}}>
                        WHY US</h4>
                        <p style={{fontWeight:"600",fontSize:"1rem",letterSpacing:"2px",lineHeight:2,fontFamily:"Mada,Sans-serif"}}>
                        WELL SIMPLE ANSWER TO THIS IS THAT YOU CAN CONTRIBUTE IN CONSERVING WATER BY SITTING AT HOME , YOU JUST NEED TO INSTALL OUR ALL NEW WATER CONSERVING TAPS WHICH ARE NOT ONLY GOOD IN LOOKS BUT CAN SOLVE YOUR LOT OF PROBLEMS. SINCE IT IS:-                         </p>
                         <p 
                         style={{fontWeight:"400",fontSize:"1rem",color:"#777",letterSpacing:"1px",lineHeight:2,fontFamily:"Mada,Sans-serif"}}
                         >
                         More durable. <br/>Conserve Water. <br/>Energy Efficient. <br/>Can order online in small or large amount from a lot of artistic varieties. <br/>Installation is very easy. </p>
                         {/* <HomeButton/> */}

                         <br/><br/>
                </div>
                <div  className="pa2 grow pointer" style={{width:"400px"}}>
                    <img alt="why us" src={`https://res.cloudinary.com/drcx4jfun/image/upload/v1595347462/a1_st4dvb.jpg`} className="w-100"/>
                </div>
            </div>
            <h4 className="mt5 tc mt4"
            style={{fontWeight:"600",fontSize:"2rem",color: "#031f9a"}}>
            How Much Technically Efficient We Are</h4>
            <div className="flex justify-center pa4">
                <div className="flex flex-column items-center tc" style={{width:"350px",height:"350px"}}>
                    <div className="br-100 pa3 flex items-center justify-center" style={{backgroundColor:"#E3E8E8",width:"200px",height:"200px"}}>
                    <div className="br-100 f1 flex items-center justify-center" style={{backgroundColor:"#031F9A",width:"150px",height:"150px"}}>
                    <FontAwesomeIcon icon={faAdjust} color="white"/>

                    </div>
                    </div>
                    <h4 className="pa4">No Microcontroller Is Involved</h4>
                    </div>
                    <div className="flex flex-column items-center tc" style={{width:"350px",height:"350px"}}>
                    <div className="br-100 pa3 flex items-center justify-center" style={{backgroundColor:"#E3E8E8",width:"200px",height:"200px"}}>
                    <div className="br-100 f1 flex items-center justify-center" style={{backgroundColor:"#031F9A",width:"150px",height:"150px"}}>
                    <FontAwesomeIcon icon={faAdjust} color="white"/>

                    </div>
                    </div>
                    <h4 className="pa4">ON/OFF Mechanism Is Very Simple And Intuitive.</h4>
                    </div>
                    <div className="flex flex-column items-center tc" style={{width:"350px",height:"350px"}}>
                    <div className="br-100 pa3 flex items-center justify-center" style={{backgroundColor:"#E3E8E8",width:"200px",height:"200px"}}>
                    <div className="br-100 f1 flex items-center justify-center" style={{backgroundColor:"#031F9A",width:"150px",height:"150px"}}>
                    <FontAwesomeIcon icon={faAdjust} color="white"/>

                    </div>
                    </div>
                    <h4 className="pa4">Modular In Development.</h4>
                    </div>
                    <div className="flex flex-column items-center tc" style={{width:"350px",height:"350px"}}>
                    <div className="br-100 pa3 flex items-center justify-center" style={{backgroundColor:"#E3E8E8",width:"200px",height:"200px"}}>
                    <div className="br-100 f1 flex items-center justify-center" style={{backgroundColor:"#031F9A",width:"150px",height:"150px"}}>
                    <FontAwesomeIcon icon={faAdjust} color="white"/>

                    </div>
                    </div>
                    <h4 className="pa4">Complete Electronic Control.</h4>
                    </div>
            </div>
                   <Footer/>
        </div>
    )
}