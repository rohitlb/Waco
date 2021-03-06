import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube  } from "@fortawesome/free-brands-svg-icons";
import './about.css';

const about = () => {
    return (
        <div>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous"/>

                    <section className="cover text-center">
                <nav className="navbar navbar-toggleable-sm navbar-trans navbar-inverse" style={{ backgroundColor: "#175e79", height: "70px" }}>
                            <div className="container">
                                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarToggler-1" aria-controls="navbarToggler-1" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                        <NavLink to="/edusmithMain" className="navbar-brand" style={{ margin: "auto" }}><img alt="" src={"https://res.cloudinary.com/drcx4jfun/image/upload/v1597165109/final_try_logo_fj9vsw.png"} style={{ height: "70px", marginLeft: "15px" }}/></NavLink>
                                    <div className="collapse navbar-collapse pull-xs-right justify-content-end" id="navbarToggler-1">
                                        <ul className="navbar-nav mt-2 mt-md-0">
                                            <li className="nav-item">
                                    <NavLink to="/edusmithMain" className="nav-link" style={{ color: "#fff", fontSize: "2rem", textShadow: "2px 2px 2px black" }}>Home  </NavLink>
                  </li>
                   
               
                 
              </ul>
          </div>
                            </div>
                        </nav>

                    </section>



                    <section className="about py-lg-4 py-md-3 py-sm-3 py-3" id="about">
                        <div className="container py-lg-5 py-md-4 py-sm-4 py-3">
                            <div className="row">
                                <div className="col-lg-8 col-md-6 text-right about-two-grids">
                            <h3 className="title  mb-md-4 mb-sm-3 mb-3" style={{
                                 color: "linearGradient(to right,  #485563 , #29323c)",
                                textShadow: "3px 3px 3px #A4B0BD", fontSize: "xx-large", fontWeight: "700"}}> About Us</h3>
                                    <div className="about-para-txt" >
                                <p style={{ color: "black", fontSize: "initial", textShadow: "1px 1px 1px #A4B0BD" }}>We are a marketplace for professional and academic courses designed to meet the industry standard. We make the courses based on the trade of the individuals and groups. We provide courses from industry experts combined with academics so that students and freshers can understand where to apply their concepts and how.
                                        Any other curious mind maybe wants to change the trade, get the promotion, increase skills, etc. , we have courses for everyone. If you are confused as to how to move forward in a trade then you are at the right place.
                </p>

                                    </div>

                                </div>
                                <div className="col-lg-4 col-md-6 about-imgs-txt">
                            <img alt="" src={"https://res.cloudinary.com/drcx4jfun/image/upload/v1597165109/final_try_logo_fj9vsw.png"}  className="img-fluid" style={{width: "55%"}}/>
          </div>
                                </div>
                            </div>
    </section>

                        <section className="founders">
                            <br/>

                <h3 className="title" style={{ textAlign: "center", color: "#175e79", fontSize: "5rem", fontWeight: "700", paddingBottom: "10px" }}>Meet the founders</h3>

                                <br/><br/>
                <div className="row" style={{ width: "80%", margin: "auto" }}>
                                        <div className="col-sm-3 flip-card">
                                            <div className="flip-card-inner">

                                                <div className="flip-card-back" title="CEO">
                                                    <h1>Rohit Singh</h1>
                                                    <br/><p>CEO</p>
             
              
            </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-3 flip-card">
                                                <div className="flip-card-inner">

                                                    <div className="flip-card-back" title="COO">
                                                        <h1>Sandeep Tiwari</h1>
                                                        <br/><p>COO</p>
              
            </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-3 flip-card">
                                                    <div className="flip-card-inner">

                                                        <div className="flip-card-back" title="President">
                                                            <h1>Arpit Bhusan Sharma</h1>
                                                            <br/><p>President</p>
              
            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-3 flip-card">
                                                        <div className="flip-card-inner">

                                                            <div className="flip-card-back" title="President">
                                                                <h1>Kinjal Tiwari</h1>
                                                                <br/><p>President</p>
              
            </div>
                                                            </div>
                                                        </div>
                                                    </div>
      
    </section>


                                                <div className="section-bg style-1">
                                                    <div className="container">
                                                        <div className="row">
                                                            <div className="col-lg-4 col-md-6 mb-5 mb-lg-0">
                                                                <i className="fa fa-graduation-cap"></i>
                                                                <h3>Our Philosphy</h3>
                                                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis recusandae, iure repellat quis delectus ea? Dolore, amet reprehenderit.</p>
                                                            </div>
                                                            <div className="col-lg-4 col-md-6 mb-5 mb-lg-0">
                                                                <i className="fa fa-pencil"></i>
                                                                <h3>Academics Principle</h3>
                                                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis recusandae, iure repellat quis delectus ea?
              Dolore, amet reprehenderit.</p>
                                                            </div>
                                                            <div className="col-lg-4 col-md-6 mb-5 mb-lg-0">
                                                                <i className='fas fa-school'></i>
                                                                <h3>Key of Success</h3>
                                                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis recusandae, iure repellat quis delectus ea?
              Dolore, amet reprehenderit.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>








                                                <section id="footer">
                                                    <div className="container">
                                                        <div className="row">
                                                            <div className="col-md-4 footer-box">
                                                                <h2 className="head">EduSmith</h2>

                            <p style={{fontSize:"1.2rem"}}>
                                                                    Get the apropriate results for the queries in seconds.
                                                                    And get updated with new tech and business ideas. Press the bell icon in our youtube channel to
                                                                    get notifications.
        </p>
                            <h2 className="head" style={{ marginTop: "50px" }}>ABOUT US</h2>
                                                            </div>
                                                            <div className="col-md-4 footer-box" >
                                                                <p><b>CONTACT US</b></p>
                                                                <p><i className="fa fa-map-marker"></i>7Days</p>
                            
                            <p><i className="fa-envelope-open"></i>edusmith.edu2020@gmail.com</p>

                            <a
                                href="https://www.youtube.com/channel/UCZRbpdDJyUbiOb_uiHPSwJw"
                                className="Youtube"
                            >
                                <FontAwesomeIcon icon={faYoutube} size="0.2x" style={{ color: "white" }} /><p style={{ color: "white", fontSize: "10px", display: "inline" }}>  Our Youtube Channel</p>
                            </a> 
                        </div>
                        
                                                            

                                                            </div>
                                                        </div>  
</section>

            </div>
        )
}

export default about;
