import React from "react";
import './aboutUs.css';
import './bootstrap.min.css';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const AboutUs = () => {
    return (
        <div>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

            <div className="headder-top">

                <div id="logo">

                    <NavLink style={{ textDecoration: "none" }} to="/">
                        <img alt="" src={" https://res.cloudinary.com/drcx4jfun/image/upload/v1597852646/ascasc_kv5xyd.png"} style={{ width: " 180px", height: "70px", marginLeft: "20px", marginTop: "20px", marginBottom: "20px" }} />
                    </NavLink>
                    <ul type="none" className="menu mt-2" style={{ alignItems: "right", display: "inline-flex", type: "none", fontSize: "30px", marginLeft: "50px" }}>
                        <li className="active mx-lg-3 mx-md-2 my-md-0 my-1" style={{ fontSize: "30px", marginLeft: "50px" }}>
                            <NavLink style={{ textDecoration: "none" }} to="/sevendays" style={{ color: "white", fontSize: "30px", marginLeft: "50px" }}>
                                Home
                                </NavLink>
                        </li>

                        <li className="mx-lg-3 mx-md-2 my-md-0 my-1">
                            <NavLink style={{ textDecoration: "none" }} to="/aboutUs" style={{ color: "white", fontSize: "30px", marginLeft: "50px" }}>About Us</NavLink>
                        </li>
                        <li className="mx-lg-3 mx-md-2 my-md-0 my-1">
                            <NavLink style={{ textDecoration: "none" }} to="/sevendays/about" style={{ color: "white", fontSize: "30px", marginLeft: "50x" }}>Our Events</NavLink>
                        </li>
                        <li className="mx-lg-3 mx-md-2 my-md-0 my-1">
                            <NavLink style={{ textDecoration: "none" }} to="/contact" style={{ color: "white", fontSize: "30px", marginLeft: "50px" }}>Celebraties We Do</NavLink>
                        </li>
                        <li className="mx-lg-3 mx-md-2 my-md-0 my-1">
                            <NavLink style={{ textDecoration: "none" }} to="/contact" style={{ color: "white", fontSize: "30px", marginLeft: "50px" }}>Contact Us</NavLink>
                        </li>
                    </ul>
                </div>

            </div >
            <section className="about" id="about" >
                <div className="container ">
                    <div className="row">
                        <div className="about-two-grids">
                            <h3 className="title " style={{ color: "#37befb", fontFamily: "Stencil", fontSize: "75px", textShadow: "2px 2px 8px black", textAlign: "center", marginBottom: "40px",marginTop:"120px"}}> About 7 Days Entertainment</h3>
                            <div className="about-para-txt">
                               <i> <p style={{ textAlign: "justify", color: "black", fontSize:"22px", fontFamily:"rockwell", marginBottom:"10px"}}>7 Days is an organization who work for Excellence, Innovation, Management and Expertise.
                                In today's world which adores nothing but glamour and glitz. We at 7
Days Entertainment are the ones that set the trend to be followed.<br /><br />
 We are proud to introduce ourselves as one of the leading
company in field of event management be it brand endorsements, press
conferences, seminars, live concerts, art & celebrity management, theme
parties etc.<br /><br />

 We have carved out an extremely unique identity for ourselves.
With the privilege of highly motivated & skillful team, we deliver with
actions than merely words.<br /><br />
 We imbibe our expertise and innovative ideas with the desire of
the client and make the celebrations memorable to make its memories
last forever.<br /> <br />
                                </p>
                               </i>
                                <br />
                                <h3 style={{ textAlign: "left", fontWeight: "bold", fontFamily:"rockwell", fontSize: "65px", color: "slategrey", textShadow: "2px 2px 6px", marginTop:"50px" }}>Our Guiding Principles</h3>
                                <p style={{ textAlign: "justify", color: "black", fontSize: "22px", fontFamily: "rockwell", marginBottom: "20px" }}>
                                    <br />
                                   Our philosophy of Quality, Service and Value is the
guiding force behind our service to client<br /><br />
7 Days has pioneered the concept of technology.<br /><br />
We do not need magic to transform our world. We
carry all the power we need inside ourselves already.
We have the power to imagine better.<br /><br />
With no fake and pocket full of dreams , our
company's motto<b>                ONLY THE BEST IS GOOD ENOUGH. </b>
                                   <br />
                                </p>
                                <h3 style={{ textAlign: "center", fontWeight: "bold", fontFamily: "rockwell", fontSize: "65px", color: "slategrey", textShadow: "2px 2px 6px", marginTop: "50px" }}>Our Expertise</h3>
                                <ul type="none">
                                    <li style={{ textAlign: "justify", color: "black", fontSize: "22px", fontFamily: "rockwell", marginBottom: "20px", marginLeft: "160px" }}><b>Creative Conceptualization</b> </li>
                                        <li style={{ textAlign: "justify", color: "black", fontSize: "22px", fontFamily: "rockwell", marginBottom: "20px", marginLeft: "160px" }}><b>Innovative Event Designs </b> </li>
                                            <li style={{ textAlign: "justify", color: "black", fontSize: "22px", fontFamily: "rockwell", marginBottom: "20px", marginLeft: "160px" }}><b>Efficient Production & Direction </b> </li>
                                                <li style={{ textAlign: "justify", color: "black", fontSize: "22px", fontFamily: "rockwell", marginBottom: "20px", marginLeft: "160px" }}><b>Technical Feasibility  </b></li>
                                                    <li style={{ textAlign: "justify", color: "black", fontSize: "22px", fontFamily: "rockwell", marginBottom: "20px", marginLeft: "160px" }}><b>Systematic Planning & Management </b></li>
                                                        <li style={{ textAlign: "justify", color: "black", fontSize: "22px", fontFamily: "rockwell", marginBottom: "20px", marginLeft: "160px" }}><b>Brand Building & Activation</b> </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>

                
           
                <footer className="py-lg-4 py-md-3 py-sm-3 py-3" style={{ background: "black" }}>
                    <div className="container py-lg-5 py-md-5 py-sm-4 py-3">
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
                            <a style={{ textDecoration: "none" }} href="#home" className="move-top text-center mt-3"><i className="fa fa-arrow-up" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </footer>

                
          </section>

        </div>
            )
            }

export default AboutUs;
