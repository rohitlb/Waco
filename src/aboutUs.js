import React from "react";
import './aboutUs.css';
import './bootstrap.min.css';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const aboutUs = () => {
    return (
        <div>
            <div className="header-outs inner_page-banner " id="home">
                <div id="logo">

                    <NavLink style={{ textDecoration: "none" }} to="/">
                        <img alt="" src={"https://res.cloudinary.com/drcx4jfun/image/upload/v1595345395/7dlogo_mqkkha.png"} style={{ width: " 180px", height: "70px", marginRight: "50%", marginLeft: "20px", marginTop: "20px", marginBottom: "20px" }} />
                    </NavLink>
                    <ul type="none" className="menu mt-2" style={{ alignItems: "right", display: "inline-flex", type: "none", fontSize: "30px" }}>
                        <li className="active mx-lg-3 mx-md-2 my-md-0 my-1" style={{ fontSize: "30px" }}>
                            <NavLink  to="/" style={{ textDecoration: "none", color: "white", fontSize: "30px" }}>
                                Home
                                </NavLink>
                        </li>

                        <li className="mx-lg-3 mx-md-2 my-md-0 my-1">
                            <NavLink  to="/aboutUs" style={{ textDecoration: "none", color: "white", fontSize: "30px" }}>About Us</NavLink>
                        </li>
                        <li className="mx-lg-3 mx-md-2 my-md-0 my-1">
                            <NavLink  to="/contact" style={{  textDecoration: "none",color: "white", fontSize: "30px" }}>Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <section className="about" id="about" >
                <div className="container ">
                    <div className="row">
                        <div className="about-two-grids">
                            <h3 className="title " style={{ color: "#37befb", fontFamily: "Stencil", fontSize: "75px", textShadow: "2px 2px 8px black", textAlign: "right", marginBottom: "40px",marginTop:"120px"}}> About 7 Days</h3>
                            <div className="about-para-txt">
                               <i> <p style={{ textAlign: "justify", color: "black", fontSize:"22px", fontFamily:"rockwell", marginBottom:"10px"}}>7 Days is an organization who work for Excellence, Innovation, Management and Expertise.
                                We are one of the Emerging Sustainable Service Providing Industry in India. We also
                                provide Research &amp; Consultancy Services along with Financial Supports to New Ideas and
                                
                                Start-ups Ventures.
                                 </p>
                                <p style={{ textAlign: "justify", color: "black", fontSize: "22px", fontFamily: "rockwell", marginBottom: "10px" }}>
                                    <br />
                                        Our mission is to nurture the New Ideas and Start-ups Ventures and convert it into a
                                        Sustainable Business Model. We have a wide variety of expertise to support the innovations

                                        and business models for scaling-up under the brand of 7 Days.

                                </p>
                                <p style={{ textAlign: "justify", color: "black", fontSize: "22px", fontFamily: "rockwell", marginBottom: "20px" }}>
                                    <br />
                                            We also offer a common Office and Online Platforms for the inventors to present their wide
                                            range of products and work in the public domain under the brand of 7 Days.
                                            Around 1,000+ clients including government and corporate bodies are already associated

                                            with us.
                                </p>
                               </i>
                                <br />
                                <h3 style={{ textAlign: "left", fontWeight: "bold", fontFamily:"rockwell", fontSize: "65px", color: "slategrey", textShadow: "2px 2px 6px", marginTop:"50px" }}>Our Vision</h3>
                                <p style={{ textAlign: "justify", color: "black", fontSize: "22px", fontFamily: "rockwell", marginBottom: "20px" }}>
                                    <br />
                                    "Our vision is to become a leading brand in providing a common global platform for inventors
                                     and young businessman to grow up their business models and products. Given this, we
                                     have designed and created an inclusive road-map to establish sustainable solutions for
                                      young entrepreneurs.
                                    <br />
                                     We aim to establish a variety of business parents inside the organization and scaleup each
                                     individual by a collaborative work culture.
                                    <br />
                                    To fulfil these goals, we are actively engaging with diversified stakeholders, both in the public
                                    and private domain, to drive faster development movements.
                                    The revolution is begun and join us for "Collaborative Development"."
                                   <br />
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br />
            <section className="founders">
                <div ><h1 style={{ width: "fitContent", margin: "auto", color: "slategrey", fontSize: "70px" }}>Meet the Founders</h1>
                </div>
                <br />
                <div className="row" style={{ width: "80%", margin: "auto" }}>
                  <div className="col-sm-3 flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-back">
                         <h1>Mr. Abhijeet Singh</h1>
                                <br /><p style={{fontSize:"25px"}}>Founder & CEO</p>
                      </div>
                   </div>
                 </div>
                  <div className="col-sm-3 flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-back">
                        <h1>Mrs. Deepti Singh,</h1>
                                <br /><p style={{ fontSize: "25px" }}>Co-Founder</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3 flip-card">
                   <div className="flip-card-inner">
                     <div className="flip-card-back">
                       <h1>Mr. Utkarsh Srivastava</h1>
                                <br /><p style={{ fontSize: "25px" }}>Marketing Executive</p>
                    </div>
                   </div>
                  </div>
                  <div className="col-sm-3 flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-back">
                        <h1>Mr. Vijay Sharma,</h1>
                                <br /><p style={{ fontSize: "25px" }}>Project Planning & Development Executive</p>
              
                      </div>
                    </div>
                  </div>
                </div>
      
           </section>
           <br/>
          <section>

                <footer className="py-lg-4 py-md-3 py-sm-3 py-3" style={{ background: "black" }}>
                    <div className="container py-lg-5 py-md-5 py-sm-4 py-3">
                        <div className="footer-w3layouts-head text-center">
                            <h2><NavLink style={{ textDecoration: "none" }} to="/">
                                <img alt="" src={"https://res.cloudinary.com/drcx4jfun/image/upload/v1595345395/7dlogo_mqkkha.png"} style={{ width: "180px" }} />
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

                
          </section>

        </div>
            )
            }

export default aboutUs;
