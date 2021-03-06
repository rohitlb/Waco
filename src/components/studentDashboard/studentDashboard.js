import React, { Component } from "react";
import './studentDashboard.css';
import './bootstrap.min.css';
import { NavLink, Redirect, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { post, get } from "../../script";
import { faMapMarker, faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import Loading1 from "../Loading/Loading1";


class studentDashboard extends Component {
    constructor(){
        super()
        this.state={
            user:'',
            other:{organization:'',phone:''},
            redirect:false,
            courses:[],
            
        }
        
    }
    async componentDidMount(){
        const data=JSON.parse(localStorage.getItem('user'))
        if(!data) this.setState({user:null})
        else{
            this.setState({user:data})
            console.log(data)
            const {email,token}=data
            const result=await post('find-student',token,{email})
            if(result.status && result.data)
            this.setState({other:result.data})
            console.log(this.state)
            const courses=await get('allcourse');
            this.setState({courses})
        }
    }

    submit=async(event)=>{
        event.preventDefault()
        const submitObject={}
    const fields=document.querySelectorAll('form>.form-group>.form-control')
   const courseFields= document.querySelectorAll('form>.form-check>.form-check-input')
    Array.from(fields).forEach(value=>{
        if(value.name)
          Object.assign(submitObject,{[value.name]:value.value})
        }
        )    
        var arr=[]
    Array.from(courseFields).forEach(value=>{
        if(value.checked){
            arr.push({name:value.value,id:value.id})
        }
    })
    
    const {imageUrl}=this.state.user
    Object.assign(submitObject,{courses:arr,imageUrl})
    console.log(submitObject)
    
    if(this.passwordValidate()){
        const result= await post('student',this.state.user.token,submitObject);
        if(result.status)
      this.setState({redirect:true})
    }
}
    passwordValidate=()=>{
        const pass=document.getElementById('pass')
        const cnf=document.getElementById('cnf')
        if(!pass.value.length){
            cnf.classList.remove('is-invalid')
            return true
        }
      else  if(pass.value===cnf.value && cnf.value.length)
        {
            cnf.nextElementSibling.classList.remove('db')
            cnf.classList.remove('is-invalid')
            cnf.classList.add('is-valid')
        return true
        }
        else{
            cnf.nextElementSibling.classList.add('db')            
            cnf.classList.add('is-invalid')
            return false
        }
    }
    
    render(){
        const {user,other,courses}=this.state
        if(user && other){
            const {email,name,imageUrl}=user
            const {phone,organization}=other
            const {redirect}=this.state
        // console.log(courses)
        return (

            <div>
       
          <section className="cover text-center">
                <nav className="navbar navbar-toggleable-sm navbar-trans navbar-inverse" style={{ backgroundColor: "#175e79", padding: "5px 10px", margin: "0px 0px 20px", height: "80px" }}>
                <div className="container">
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarToggler-1" aria-controls="navbarToggler-1" aria-expanded="false" aria-label="Toggle navigation">
                       <span className="navbar-toggler-icon"></span>
                   </button>
                        <NavLink to ="/edusmithMain" className="navbar-brand"  style={{ margin: "auto" }}>
                            <img alt=" " src={"https://res.cloudinary.com/drcx4jfun/image/upload/v1597165109/final_try_logo_fj9vsw.png"} style={{ height: "70px", marginLeft: "15px" }} /></NavLink>
                                                <div className="collapse navbar-collapse pull-xs-right justify-content-end" id="navbarToggler-1">
                                                    <ul className="navbar-nav mt-2 mt-md-0">
                                                        <li className="nav-item" >
                                    <NavLink to="/edusmithMain" className="nav-link" style={{ color: "#fff", fontSize: "2rem", textShadow: "2px 2px 2px black", }}>Home</NavLink>
                        </li>
                                                    <li className="nav-item">
                                    <NavLink to="/edusmith/about" className="nav-link" style={{ color: "#fff", fontSize: "2rem", textShadow: "2px 2px 2px black" }} >About Us</NavLink>
                        </li>
                                                <li className="nav-item">

                                    <NavLink to="/edusmith/studentDashboard" className="nav-link" style={{ color: "#fff", fontSize: "2rem", textShadow: "2px 2px 2px black" }}>Your Dashboard</NavLink>
                                                </li>
                                                <li className="nav-item">
                                    <NavLink to="/edusmith/login" className="nav-link" style={{ color: "#fff", fontSize: "2rem", textShadow: "2px 2px 2px black" }} >LogOut</NavLink>
                    </li>
                      
                    </ul>
                     </div>
                     </div>
                </nav>
               
          </section>
                        <div className="profile-cont container">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="profile-card">
                                        <div className="img-holder">
                                <img alt="" src={imageUrl} style={{ borderRadius: "100px/100px" }}/> 
                    </div>
                                        </div>
                                    </div>
                    <div className="col-lg-8">
                        <div>
                            <form onSubmit={this.submit} onChange={this.handle}>
                            <div className="form-group">
                            <h6>Name</h6>
                                <input disabled type="text" name="name" required defaultValue={name} className="form-control" placeholder="Enter Name"/>
                            </div>
                            <div className="form-group">
                            <h6 htmlFor="exampleInputEmail1">Email address</h6>
                                <input disabled name="email" type="email" required defaultValue={email} className="form-control" placeholder="Enter email"/>
                                <small  className="form-text text-muted">
                                    We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                            <h6>Organization</h6>
                                <input name="organization" defaultValue={organization} required type="text" className="form-control" placeholder="Enter Name of Organization"/>
                            </div>

                            <div className="form-group">
                                <h6>Password</h6>
                                <input name="password" type="password" id="pass" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                                    className="form-control" placeholder="Password"/>
                                <small  className="form-text text-muted">
                                    Please Enter password only if you want to change the previous password.
                                    This password will now be your default password.<br/>
                                    <b>Important :</b>If you have logged in for the first time, then it is adviced to update the Password
                                    otherwise you will not be able to login with email and password</small>
                                </div>
                                <div className="form-group">
                                <h6>Confirm Password</h6>
                                <input type="password" className="form-control" id="cnf" placeholder="Confirm Password"/>
                                <small className="text-danger dn">Password not match</small>
                                </div>
                                <div className="form-group">
                                <h6>Phone</h6>
                                <input type="tel" name="phone" defaultValue={phone} required className="form-control" placeholder="Enter phone number"/>
                                </div>
                                <h6>Select the Courses you are interested in</h6>
                                {
                                    courses.map((value,i)=>{
                                       return(
                                           <div key={i} className="form-check ma3">
                                       <input id={value._id}  name="courses" className="form-check-input" type="checkbox" value={value.name}/>
                                       <h6 className="form-check-label" htmlFor={value._id}>
                                           {value.name}
                                       </h6>
                                       </div>
                                           )
                                    })
                                }

                              
                                <button type="submit" style={{height:"40px", width:"80px", alignItems:"right", marginTop:"20px", margin:"50px", marginLeft:"150px"}} >Submit</button>
                               <Link to="profile">

                                <button className="btn btn-info">Move to profile page</button>
                               </Link>
                            </form>
                        </div>
                         
                         </div>
                   </div>
            </div>

            <section id="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 footer-box">
                            <h2 className="head">EduSmith</h2>

                            <p style={{ fontSize: "1.2rem" }}>
                                Get the apropriate results for the queries in seconds.
                                And get updated with new tech and business ideas. Press the bell icon in our YouTube channel to
                                get notifications.
                      </p>
                        </div>
                        <div className="col-md-4 footer-box">
                            <p><b>CONTACT US</b></p>
                            <p><FontAwesomeIcon icon={faMapMarker} className="f4"/>  7Days</p>
                            <p><FontAwesomeIcon icon={faEnvelopeOpen} className="f4"/>  edusmith.edu2020@gmail.com</p>

                            <a
                                href="https://www.youtube.com/channel/UCZRbpdDJyUbiOb_uiHPSwJw"
                                className="Youtube"
                            >
                                <FontAwesomeIcon icon={faYoutube}  style={{ color: "white" }} /><p style={{ color: "white", fontSize: "15px", display: "inline" }}>  Our Youtube Channel</p>
                            </a>

                        </div>


                    </div>
                </div>
            </section>
            {
                redirect?
                <Redirect to="profile"/>:""
            }
            </div>

        )
    } else if(user===null) return <Redirect to="login"/>
    else return <Loading1/>
    }
}

export default studentDashboard;
