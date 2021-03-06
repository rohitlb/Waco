import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import './syllabus.css';


const syllabus = () => {
    return (
        <div>

            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
            <section class="cover text-center">
                <nav class="navbar navbar-toggleable-sm navbar-trans navbar-inverse" style={{backgroundColor: "#175e79",height:"70px"}}>
                  <div class="container">
                     <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarToggler-1" aria-controls="navbarToggler-1" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                     </button>
                     <NavLink to="/edusmithMain" class="navbar-brand" style={{ margin: "auto" }}><img
                     alt="" src={"https://res.cloudinary.com/drcx4jfun/image/upload/v1597165109/final_try_logo_fj9vsw.png"} style={{height: "100px", marginLeft: "15px"}} /></NavLink>
                        <ul class="navbar-nav mt-2 mt-md-0" type="none">
                             <li class="nav-item">
                                <NavLink to="/edusmith/courses" class="nav-link" style={{ color: "#fff", fontSize: "2rem", textShadow: "2px 2px 2px black" }}>Back to course</NavLink>
                              </li>
                        </ul>
                 </div>
                </nav>

            </section>
            <h2 class="title  mb-md-4 mb-sm-3 mb-3" style={{ textShadow: "3px 3px 3px #A4B0BD", fontSize: "xx-large", fontWeight: "700" }}>
                <p class="cnt" style={{ textAlign: "center", marginTop: "8%", fontSize:"30px", color:"slategrey" }}>The Joy of Learning Python</p>
            </h2>

            <table class="table" style={{width:"75%"}}>
            <tbody>
               <tr class="1">
                <th>Week</th>
                <th>Work</th>
                <th>Output</th>
               </tr>
               <tr class="2">
                 <td>Week 0</td>
                  <td>
                    > Introduction and Welcome<br />
                    >  Pre-Quiz Self-Assessment<br />
                    >  Important Pre-Course Survey<br />
                    >  Assignment 0
                 </td>
                  <td>
                    Basic Coding skills and how python compiler works to
                    understand the system correctly
                 </td>
               </tr>
               <tr class="3">
                  <td>Week1</td>
                  <td>
                    > Overview of Course<br />
                    > Objects and Methods<br />
                    > Sequence Objects<br />
                    > Manipulating Objects<br />
                    >Assignment 1<br />
                    >Coding 1
                  </td>
                   <td>
                     How to write basic codes and basic functionality of python
                                    coding
                  </td>
               </tr>
               <tr class="4">
                  <td>Week 2</td>
                  <td>
                    > Overview<br />
                     > Scope Rules and Classes<br />
                     > NumPy<br />
                    > Matplotlib and Pyplot<br />
                     > Randomness and Time<br />
                     > Assignment 2<br />
                    > Coding 2
                 </td>
                 <td>
                   The class, object and the self-function which is used to write a
                   code for OOPs
                   The basic libraries for computational intelligence and
                   mathematical analyzing.
                 </td>
               </tr>
               <tr class="5">
                 <td>Week 3</td>
                 <td>
                   > Overview<br />
                   > Lists<br />
                   > inductive function<br />
                   > definitions<br />
                   > sorting<br />
                   > Assignment 3<br />
                   > Coding 3
                 </td>
                  <td>
                    The Basic Data structure – List and slicing of a dataset to run
                                    promptly
                  </td>
                  </tr>
                   <tr class="6">
                                <td>Week 4</td>
                                <td>
                                    > Overview<br />
      > Sorting<br />
      > Tuples<br />
      > Dictionaries<br />
      > Passing Functions<br />
      > List Comprehension<br />
      > Assignment 4<br />
      > Coding 4
    </td>
                                <td>
                                    The Data structures part and comprehension the List function
                                    with dictionary and tuples.
    </td>
                            </tr>
                            <tr class="7">
                                <td>Week 5</td>
                                <td>
                                    > Overview<br />
      > Exception handling<br />
      > input/output handling<br />
      > file handling<br />
      > string processing<br />
      > Assignment 5<br />
      > Coding 5
    </td>
                                <td>Exception handling and overview of string dataset</td>
                            </tr>
                            <tr class="8">
                                <td>Week 6</td>
                                <td>
                                    Overview<br />
      > Backtracking<br />
      > Scope<br />
      > data structures<br />
      > stacks<br />
      > queues<br />
      > heaps<br />
      > Assignment 6<br />
      > Coding 6
    </td>
                                <td>
                                    The major datasets to calculate hash value and backtracking of
                                    functionality.
    </td>
                            </tr>
                            <tr class="9">
                                <td>Week 7</td>
                                <td>
                                    Overview

      > Dynamic programming<br />
      > wrap-up<br />
      > Assignment 7<br />
      > Coding 7
    </td>
                                <td>
                                    How to perform dynamic programming and understand math
                                    behind the coding strategy to make it conceptualize.
    </td>
                            </tr>
                            </tbody>
                        </table>


                        <section id="footer">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-4 footer-box">
                                        <h2 class="head">EduSmith</h2>

                            <p style={{fontSize: "1.2rem"}}>
                                            Get the apropriate results for the queries in seconds.
                                            And get updated with new tech and business ideas. Press the bell icon in our YouTube Channel to
                                            get notifications.
        </p>

                                    </div>
                                    <div class="col-md-4 footer-box">
                                        <p><b>CONTACT US</b></p>
                            <p><i style={{color:"white"}} class="fa fa-map-marker"></i>7Days</p>
                            <a
                                href="https://www.youtube.com/channel/UCZRbpdDJyUbiOb_uiHPSwJw"
                                className="Youtube"
                            >
                                <FontAwesomeIcon icon={faYoutube}  style={{ color: "white" }} /><p style={{ color: "white", fontSize: "15px", display: "inline" }}>  Our Youtube Channel</p>
                            </a>
                            <p><i style={{ color: "white" }} class="fa fa-envelope-open"></i>edusmith.edu2020@gmail.com</p>
                                    </div>


                                </div>
                            </div>


                        </section>
                        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossOrigin="anonymous"></script>
                        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
                        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
                        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
                        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
                       



        </div>
    )
}

export default syllabus;
