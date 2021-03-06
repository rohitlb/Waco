
import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const SevenDays = () => {
    return (
        <div>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

            <div className="headder-top">

                <div id="logo">

                    <NavLink style={{ textDecoration: "none" }} to="/">
                        <img alt="" src={" https://res.cloudinary.com/drcx4jfun/image/upload/v1597852646/ascasc_kv5xyd.png"} style={{ width: " 180px", height: "70px", marginLeft: "20px", marginTop: "20px", marginBottom: "20px" }} />
                    </NavLink>
                    <ul type="none" className="menu mt-2" style={{ alignItems: "right", display: "inline-flex", type: "none", fontSize: "30px", marginLeft:"50px" }}>
                        <li className="active mx-lg-3 mx-md-2 my-md-0 my-1" style={{ fontSize: "30px", marginLeft: "50px" }}>
                            <NavLink  to="/" style={{  textDecoration: "none",color: "white", fontSize: "30px", marginLeft: "50px" }}>
                                7Days
                                </NavLink>
                        </li>

                        <li className="mx-lg-3 mx-md-2 my-md-0 my-1">
                            <NavLink  to="/7Days/aboutus" style={{  textDecoration: "none",color: "white", fontSize: "30px", marginLeft: "50px" }}>About Us</NavLink>
                        </li>
                        <li className="mx-lg-3 mx-md-2 my-md-0 my-1">
                            <NavLink  to="/sevendays/about" style={{ textDecoration: "none", color: "white", fontSize: "30px", marginLeft: "50x" }}>Our Events</NavLink>
                        </li>
                        <li className="mx-lg-3 mx-md-2 my-md-0 my-1">
                            <NavLink  to="/contact" style={{ color: "white", fontSize: "30px", marginLeft: "50px" }}>Celebraties We Do</NavLink>
                        </li>
                        <li className="mx-lg-3 mx-md-2 my-md-0 my-1">
                            <NavLink  to="/contact" style={{  textDecoration: "none",color: "white", fontSize: "30px", marginLeft: "50px" }}>Contact Us</NavLink>
                        </li>
                    </ul>
                </div>

            </div >
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                
        <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                    <li data-target="#myCarousel" data-slide-to="3"></li>
                    <li data-target="#myCarousel" data-slide-to="4"></li>
                    <li data-target="#myCarousel" data-slide-to="5"></li>
                    <li data-target="#myCarousel" data-slide-to="6"></li>

                </ol>

               
        <div className="carousel-inner" >
                    <div className="item active" >
                        <img alt="" src={`1.jpg`} style={{marginLeft:"600px",height:"300px", borderRadius:"20"}}/>
            </div>

                        <div className="item">
                            <img alt="" src="2.jpg" style={{ marginLeft: "600px", height: "300px", borderRadius: "20" }}/>
            </div>

                            <div className="item">
                                <img alt="" src="3.jpg" style={{ marginLeft: "600px", height: "300px", borderRadius: "20" }}/>
            </div>

                                <div className="item">
                                    <img alt="" src="4.jpg" style={{ marginLeft: "600px", height: "300px", borderRadius: "20" }}/>
            </div>

                                    <div className="item">
                                        <img alt="" src="5.jpg" style={{ marginLeft: "600px", height: "300px", borderRadius: "20" }}/>
            </div>

                                        <div className="item">
                                            <img alt="" src="6.jpg" style={{ marginLeft: "600px", height: "300px", borderRadius: "20" }}/>
            </div>

                                            <div className="item">
                                                <img alt="" src="7.jpg" style={{ marginLeft: "600px", height: "300px", borderRadius: "20" }}/>
            </div>
                                            </div>

                                           
        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                                                <span className="glyphicon glyphicon-chevron-left"></span>
                                                <span className="sr-only">Previous</span>
                                            </a>
                                            <a className="right carousel-control" href="#myCarousel" data-slide="next">
                                                <span className="glyphicon glyphicon-chevron-right"></span>
                                                <span className="sr-only">Next</span>
                                            </a>
                                        </div>


            <div style={{background:"black"}}>
            <div style={{ marginLeft:"30%", marginTop:"60px", color: "#37BEFB",textShadow:"6px 6px 12px white", fontSize:"80px", fontFamily:"Rockwell", fontWeight:"900"}}> WHAT WE DO ...</div>
            </div>


            <div className="whatWeDoText"> <br /> <br /><br /><br /><br /><br /><br /> </div>


            <div clsss="association" style={{ fontFamily: "Rockwell", fontWeight: "700", fontSize: "70px", alignContent: "center", marginLeft: "480px", color: "black", textShadow:"2px 2px 8px slategrey" }}><i style={{color:"black"}}><u> In Association With</u></i></div>
            <div className=" association"> <br /> <br /><br /><br /><br /><br /><br /> </div> 
            <footer className="py-lg-4 py-md-3 py-sm-3 py-3" style={{ background: "black" }}>
                <div className="container py-lg-5 py-md-5 py-sm-4 py-3" >
                    <div className="footer-w3layouts-head text-center">
                        <h2><NavLink style={{ textDecoration: "none" }} to="/"><img alt="" src={"https://res.cloudinary.com/drcx4jfun/image/upload/v1595345395/7dlogo_mqkkha.png"} style={{ width: "180px" }} />
                        </NavLink>
                        </h2>
                    </div>
                    <div className="social-icons mt-lg-5 mt-md-4 mt-3 text-center">
                        <ul type="none">
                            <li><a
                                href="https://www.linkedin.com/in/7days-india-6b05881b2/"
                                className="Linkedin"
                            >
                                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                            </a></li>
                        </ul>
                    </div>
                    <div className="bottem-wthree-footer text-center pt-md-4 pt-3">
                        <p>
                            @ 2007 7Days. All Rights Reserved | Design by <NavLink style={{ textDecoration: "none" }} to="/">7 Days </NavLink>
                        </p>
                    </div>
                    <div className="text-center">
                        <a style={{ textDecoration: "none" }} href="#home" className="move-top text-center mt-3">
                            <FontAwesomeIcon icon={faArrowUp}/>
                            </a>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default SevenDays;
