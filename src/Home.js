import React from "react";
import './Home.css';
import './bootstrap.min.css';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
        return (
          
            <div> 
            <div className="headder-top">
                
                    <div id="logo">
                        
                        <NavLink style={{ textDecoration: "none" }} to ="/">
                                <img alt="" src={"https://res.cloudinary.com/drcx4jfun/image/upload/v1595345395/7dlogo_mqkkha.png"} style={{width:"180px",height:"70px", marginRight:"50%",marginLeft:"20px", marginTop:"20px", marginBottom:"20px"}} />
                            </NavLink>
                        <ul type= "none" className="menu mt-2" style={{ alignItems: "right", display: "inline-flex", type:"none", fontSize: "30px" }}>
                            <li className="active mx-lg-3 mx-md-2 my-md-0 my-1" style={{ fontSize: "30px"}}>
                                <NavLink  to="/" style={{ color: "white", fontSize: "30px",textDecoration: "none" }}>
                                Home
                                </NavLink>
                        </li>

                        <li className="mx-lg-3 mx-md-2 my-md-0 my-1">
                                <NavLink to ="/aboutUs" style={{ color: "white", fontSize: "30px",textDecoration: "none"}}>About Us</NavLink>
                        </li>
                        <li className="mx-lg-3 mx-md-2 my-md-0 my-1">
                                <NavLink  to="/contact" style={{ textDecoration: "none",color: "white", fontSize: "30px"}}>Contact</NavLink>
                        </li>
                      </ul>
                    </div>

            </div >
            <div>
                <h3 className="title" id="text"> Nourishing Nature With </h3>
                <h3 className="title" id="text2"> Flourishing Brians !!</h3>
                <br /><br /><br />
                <h1 className="projects">OUR PROJECTS</h1>
                <table className="mainpage">
                    <tbody>

                    <tr>
                        <td style={{ borderColor: "transparent" }}>
                            <br /><br /><br /><br /><br /><br /><br />
                        </td>
                        <td style={{ borderColor: "transparent" }}>
                            <br /><br /><br /><br /><br /><br /><br />
                        </td>
                    </tr>
                    <tr className="edu">
                        <td className="eduimg" style={{ borderColor: "transparent" }}>
                            <img alt="" src={"https://res.cloudinary.com/drcx4jfun/image/upload/v1596142909/edu1_sfk2ju.png"}
                                style={{ width: "85%", height: "85%", alignContent: "stretch" }} />
                        </td>
                            <td className="edutext" style={{ textAlign: "left", borderColor:"transparent" }}>
                              
                                <div style={{ textDecoration: "none" }}> 
                                <NavLink style={{ textDecoration: "none", color:"black" }} to="/edusmithMain">
                                        <p className="edutitle">EDUSMITH</p>
                                         We are a marketplace for professional and academic courses designed to meet the industry standard. We make the courses based on the trade of the individuals and groups.
                                     </NavLink>
                              </div>
                                
                        </td>
                    </tr>
                    <tr>
                        <td style={{ borderColor: "transparent" }}>
                            <br /><br /><br /><br /><br /><br /><br /><br /><br />
                        </td>
                        <td style={{ borderColor: "transparent" }}>
                            <br /><br /><br /><br /><br /><br /><br /><br /><br />
                        </td>
                    </tr>
                    <tr className="prj">
                        <td className="prjtext" style={{ textAlign: "right", borderolor:"transparent" }}>
                                <a style={{ textDecoration: "none" , color: "black"}} href="https://project4jungle.com/">
                                <p className="prjtitle" style={{ marginRight: "40px" }}>
                                    PROJECT JUNGLE
                      </p>
                                    <p className="wacot" style={{ marginRight: "20px", color: "black", fontSize:"25px" }}>
                                    We are proud to introduce ourselves as one of the leading company in field of event management be it brand endorsements, press conferences, seminars, live concerts, art & celebrity management, theme parties etc.
                      </p>
                            </a>
                        </td>
                        <td className="prjimg" style={{ borderColor: "transparent" }} >
                            <img alt="" src={"https://res.cloudinary.com/drcx4jfun/image/upload/v1596142884/pj2_ozgco2.png"}
                                style={{ width: "100%", height: "75%", alignContent: "stretch" }} />
                        </td>

                    </tr>
                    <tr>
                        <td style={{ borderColor: "transparent" }}>
                            <br /><br /><br /><br /><br /><br /><br /><br /><br />
                        </td>
                        <td style={{ borderColor: "transparent" }}>
                            <br /><br /><br /><br /><br /><br /><br /><br /><br />
                        </td>
                    </tr>
                    <tr className="waco">
                        <td className="wacoimg" style={{ borderColor: "transparent" }} >
                            <img alt="" src={"https://res.cloudinary.com/drcx4jfun/image/upload/v1596142883/waco1_nge2vo.png"}
                                style={{ width: "75%", height: "75%", alignContent: "stretch" }} />
                        </td>
                        <td className="wacotext" style={{ textAlign: "left", borderColor:"transparent" }}>
                                <NavLink style={{ textDecoration: "none", color: "black"}} to="/wacoMain">
                                <p className="wacotitle">WACO</p>
                               Want to save the environment just by installing the right affordable tap in your homes even without compromising with its beauty, then we are here for you.
                   </NavLink>
                        </td>
                    </tr>
                    <tr>
                        <td style={{ borderColor: "transparent" }}>
                            <br /><br /><br /><br /><br /><br /><br /><br /><br />
                        </td>
                        <td style={{ borderColor: "transparent" }}>
                            <br /><br /><br /><br /><br /><br /><br /><br /><br />
                        </td>
                    </tr>
                    <tr className="Sd">
                        <td className="Sdtext" style={{ textAlign: "right", borderColor:"transparent" }}>
                                <NavLink style={{ textDecoration: "none", color: "black" }} to="/7days">
                                <p className="Sdtitle" style={{ marginRight: "40px" }}>7 DAYS ENTERTAINMENT</p>
                                    <p className="Sdt" style={{ marginRight: "20px", color: "black", fontSize: "25px" }}>
                                    We are proud to introduce ourselves as one of the leading company in field of event management be it brand endorsements, press conferences, seminars, live concerts, art and celebrity management, theme parties etc.
                          </p>
                            </NavLink>
                        </td>
                        <td className="Sdimg" style={{ borderColor: "transparent" }}>
                            <img alt="" src={"https://res.cloudinary.com/drcx4jfun/image/upload/v1596142883/7d1_uia5yb.png"}
                                style={{ width: "100%", height: "75%", alignContent: "stretch" }} />
                        </td>

                    </tr>
                    <tr>
                        <td style={{ borderColor: "transparent" }}>
                            <br /><br /><br /><br /><br /><br /><br /><br /><br />
                        </td>
                        <td style={{ borderColor: "transparent" }}>
                            <br /><br /><br /><br /><br /><br /><br /><br /><br />
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>

                <footer className="py-lg-4 py-md-3 py-sm-3 py-3" style={{background:"black"}}>
                  <div className="container py-lg-5 py-md-5 py-sm-4 py-3">
                    <div className="footer-w3layouts-head text-center">
                            <h2><NavLink style={{ textDecoration: "none" }} to="/">
                                <img alt="" src={"https://res.cloudinary.com/drcx4jfun/image/upload/v1595345395/7dlogo_mqkkha.png"} style={{ width: "180px" }} />
                                </NavLink>
                            </h2>
                    </div>
                     <div className="social-icons mt-lg-5 mt-md-4 mt-3 text-center">
                        <ul type ="none">
                                <li><a
                                    href = "https://www.linkedin.com/in/7days-india-6b05881b2/"
                                    className="Linkedin"
                                >
                                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                                </a></li>
                        </ul>
                     </div>
                     <div className="bottem-wthree-footer text-center pt-md-4 pt-3">
                          <p className="f3">
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



export default Home;
