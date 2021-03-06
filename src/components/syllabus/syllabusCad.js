import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import './syllabusCad.css';


const syllabusCad = () => {
    return (
        <div>

            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossOrigin="anonymous" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
            <section className="cover text-center">
                <nav className="navbar navbar-toggleable-sm navbar-trans navbar-inverse" style={{ backgroundColor: "#175e79", height: "70px" }}>
                    <div className="container">
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarToggler-1" aria-controls="navbarToggler-1" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <NavLink to="/edusmithMain" className="navbar-brand" style={{ margin: "auto" }}>
                            <img alt="" src={"https://res.cloudinary.com/drcx4jfun/image/upload/v1597165109/final_try_logo_fj9vsw.png"} style={{ height: "100px", marginLeft: "15px" }} /></NavLink>
                        <ul className="navbar-nav mt-2 mt-md-0" type="none">
                            <li className="nav-item">
                                <NavLink to="/edusmith/courses" className="nav-link" style={{ color: "#fff", fontSize: "2rem", textShadow: "2px 2px 2px black" }}>Back to course</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>

            </section>
            <h2 className="title  mb-md-4 mb-sm-3 mb-3" style={{ textShadow: "3px 3px 3px #A4B0BD", fontSize: "xx-large", fontWeight: "700" }}>
                <p className="cnt" style={{ textAlign: "center", marginTop: "8%", fontSize: "30px", color: "slategrey" }}>CAD(Computer-Aided Design)</p>
            </h2>

            <h3 className="title  mb-md-4 mb-sm-3 mb-3" style={{ marginLeft: "12px", color: "#8080ff", textShadow: "3px 3px 3px #A4B0BD", fontSize: "xx-large", fontWeight: "700" }}>
                <p className="cnt" style={{ textAlign: "left", marginTop: "8%", fontSize: "25px", color: "slategrey" }}>
                                Course Outline :-
               </p>
            </h3>

            <div className="text-1" >  <p style={{ textAlign: "left", fontSize: "15px", color: "black" }}>
                            CAD allows for the easier development of products and product management integration. It
                            also allows for greater modelling and eItroductionven provides a basis for virtual networking
                            in the engineering world, CAD is extremely important and widely used to design and develop
                            products to be used by consumers.
                            <br />
                            Shaping the Future of CAD, Big evolutions are shaping the future of computer-aided design
                            software and influencing CAD users' expectations and enabling a highly personalized
                            experience, seamless and expanded collaboration, and universal access to game-changing
                            insights.
                         </p>  </div>
            <table className="table" style={{ width: "75%" }}>
                <tbody>
                            <tr className="1">
                                <th>Module</th>
                                <th>Goal</th>
                                <th>Object</th>
                                <th>Topics</th>
                            </tr>
                            <tr className="2">
                                <td>Module 1<br />Introduction and overview</td>
                                <td>
                        CAD (Computer Aided Design) is the use of computer software to design and document a product's design process. Engineering drawing entails the use of graphical symbols such as points, lines, curves, planes and shapes to represents the concept and cut-lists.
                                </td>
                                <td>
                        Computer-Aided Design (CAD) and Computer-Aided Manufacturing (CAM) Computer- aided design (CAD) involves creating computer models defined by geometrical parameters. CAD systems enable designers to view objects under a wide variety of representations and to test these objects by simulating real-world conditions.
                                </td>
                                <td>
                                    > Autodesk inventor/Solid-works introduction<br />
                                    >Autodesk Inventor/Solid-works over view<br />
                                     >Autodesk inventor/Solid-works features
                                </td>
                            </tr>
                            <tr className="3">
                                <td>
                                    Module 2<br />
                                    Autodesk inventor/Solid-works features (2D)
                                </td>
                                <td>
                        Features. Inventor allows 2D and 3D data integration in a single environment, creating a virtual representation of the final product that enables users to validate the form, fit, and function of the product before it is ever built
                                </td>
                                <td>
                        Autodesk Inventor/Solid-works is a parametric and feature-based solid modelling tool. It allows you to convert the basic 2D sketch into a solid model using very simple modelling options.
                                </td>
                                <td>
                                    >Introduction 2D &amp; 3D<br />
                                    >2-D Basics<br />
                                    >Practice sketching<br />
                                    >Practice applying constraints<br />
                                    >Apply dimensions<br />
                                    >Create fully defined sketch<br />
                                    >Create a sketch using geometry from an existing part<br />
                                    >Practice applying constraints<br />
                                    >Learn to speed up symmetric designs<br />
                                    >Enable multipart updating<br />
                                    >ASSESSMENT AND QUIZ
                               </td>
                            </tr>
                            <tr className="4">
                                <td>Module 3 <br />3-D Basics</td>
                                <td>
                        CAD software provides professional-grade 3D mechanical design, documentation, and product simulation tools. Work efficiently with a powerful blend of parametric, direct, freeform, and rules-based design capabilities
                                </td>
                                <td>
                        It's ideal for architects, mechanically design, or anything you want done aesthetically. Solid modelling CAD (Solid works, Inventor,) deals with adding dimensions and constraints to a 3d mode
                                </td>
                                <td>
                                    >Create a revolve featuring using an existing sketch
                                    >Practice extruding using a using an existing sketch
                                    >Sketching and extruding from an existing face
                                    >Practice fillets on edges
                                    >Create a hole, sweep, rib, loft, coil, Emboss, fillet, thread, shell
                                    >Draft and spilt
                                    >Projecting geometry
                                    >Learn to assess face and planes for sketching
                                    >Practice creating extrudes, fillets and chamfers
                                    >Determine which faces and edges to use to create new parts
                                    >Determine end condition for extrude feature
                                    >ASSESSSMENT AND QUIZ
                                </td>
                            </tr>
                            <tr className="5">
                                <td>Module 4 <br />Assembly and Drawing</td>
                                <td>
                        Assembly drawing. Assembly drawings can be used to represent items that consist of more than one component. Assembly drawings may include instructions, lists of the component parts, reference numbers, references to detail drawings or shop drawings, and specification information
                                </td>
                    <td>
                                Assembly and sub assembly of the components using different tools and methods
                                </td>
                                <td>
                                    > Create a subassembly<br />
                                    > Practice mates<br />
                                    >Determine what mates<br />
                                    >Determine what mates to use and how a sub assembly should be mated into
                                    >assemblies<br />
                                    >Learn how to create branched version of documents<br />
                                    >Practice making modification on unique versions<br />
                    </td>
                    <td>

                    </td>
                            </tr>
                            <tr className="6">
                                <td>Module 5<br /> Drawing and Drafting</td>
                                <td>
                        Autodesk Inventor/Solid-works drawing, the geometry is placed on one or more sketches in the drawing. Dimensions are placed on the drawing sheet.
                                </td>
                                <td>
                                    The Dimensions are mentioned on the sheet for further manufacturing so that the engineer
                                    can easily read those dimensions
                               </td>
                                <td>
                                    >Crating a drawing document<br />
                                    > Inserting different views of a part into a drawing<br />
                                    > Using various viewing / labelling tools in drawings<br />
                                    > Creating hatching, view (Front, Top, Side) dimensioning
                                </td>
                            </tr>
                            <tr className="7">
                                <td>Module 6<br /> 3-D Printer</td>
                                <td>
                        3D printing, or additive manufacturing, has the potential to democratize the production of goods, from food to medical supplies, to great coral reefs. In the future, 3D printing machines could make their way into homes, businesses, disaster sites, and even outer space
                                </td>
                                <td>
                        The creation of a 3D printed object is achieved using additive processes.3D printing enables you to produce complex shapes using less material than traditional manufacturing methods
                                </td>
                                <td>
                                    >Introduction of 3-D printer<br />
                                    > Introduction of idea maker software<br />
                                    > Practice of idea makers<br />
                                    > Hand on practice on 3-D Printer
                               </td>
                            </tr>
                            </tbody>
                        </table>

            <section id="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 footer-box">
                            <h2 className="head">EduSmith</h2>

                            <p style={{ fontSize: "1.2rem" }}>
                                Get the apropriate results for the queries in seconds.
                                And get updated with new tech and business ideas. Press the bell icon in our YouTube Channel to
                                get notifications.
        </p>

                        </div>
                        <div className="col-md-4 footer-box">
                            <p><b>CONTACT US</b></p>
                            <p><i style={{ color: "white" }} className="fa fa-map-marker"></i>7Days</p>
                            <a
                                href="https://www.youtube.com/channel/UCZRbpdDJyUbiOb_uiHPSwJw"
                                className="Youtube"
                            >
                                <FontAwesomeIcon icon={faYoutube}  style={{ color: "white" }} /><p style={{ color: "white", fontSize: "15px", display: "inline" }}>  Our Youtube Channel</p>
                            </a>
                            <p><i style={{ color: "white" }} className="fa fa-envelope-open"></i>edusmith.edu2020@gmail.com</p>
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
export default syllabusCad;