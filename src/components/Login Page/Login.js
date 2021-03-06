import React, { Component } from 'react'
import styles from './login.module.css'
import logo from '../../images/edusmithLogo.png'
import { GoogleLogin } from 'react-google-login';
import { Link, Redirect } from 'react-router-dom';
import { post } from '../../script'
import { googleClientID } from '../../script';

class Login extends Component{
    constructor(){
        super()
        this.state={
            enable:false,
            redirect:'',
            email:'',
            password:''
        }
    }
    componentDidMount(){
        
    }
 login=async (e)=>{
        e.preventDefault();
        const {email,password}=this.state
        const {type,status,token}=await post('login',null,{email,password})
        localStorage.setItem(type,JSON.stringify({email,type,token}))
        
        if(status){
            const RedirectUrl=`${type}-Profile`
            this.setState({redirect:RedirectUrl})
        }
        // display error of username or password invalid
    }
    handle=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }
    checkPrivacy=()=>{
        if(this.Privacy.checked){
            this.setState({enable:true})
        }
        else{
            this.setState({enable:false})
        }
    }
    fillLocalStorage=async(profileObj,tokenObj,type)=>{
      
            const userDetails={
                email:profileObj.email,
                token:tokenObj.access_token,
                type:type
            }
            localStorage.setItem(type,JSON.stringify(userDetails))
            const data= await post('loginwithGoogle',userDetails.token,
            {email:profileObj.email,imageUrl:profileObj.imageUrl,type,name:profileObj.name})
            if(data)
            return `${type}-Profile`
       
    }
    student = async({profileObj,tokenObj}) => {
        const go=await this.fillLocalStorage(profileObj,tokenObj,'student')
        if(go)
        this.setState({redirect:go})
    }
    instructor =async ({profileObj,tokenObj}) => {
      const go=await this.fillLocalStorage(profileObj,tokenObj,'instructor')
       if(go)
       this.setState({redirect:go})

    }
    
    
    render(){
        const {enable,redirect}=this.state
        console.log(enable)
        return(
            <div className={`min-vh-100  white `}>
               {
                   redirect.length?
                   <Redirect push to={redirect}/>
                   :""
                }
            <div className={` min-vh-100 ${styles.gradientBack}`}></div>
            <div className={`flex items-center  shadow-1 pa4 ${styles.loginbox}`}>
            <div className={`w-50 tc pa2 `}>
            <h1>Welcome</h1>
            <div className={`${styles.imagebox}`}>
            <img src={logo} alt=""/>
            </div>
            </div>
            
            <div className={` w-50  pa2`}>
            <h1 className="tc">Login</h1>
            {/* <h5 className="tl">Login to get started</h5> */}
            <div className="form-check tl">
            <input type="checkbox"
            onChange={this.checkPrivacy}
            ref={(Privacy) => this.Privacy =Privacy}
            
            className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" htmlFor="exampleCheck1">I Agree with the Privacy Policy. <Link to="/edusmith/privacy" className="white shadow-0 f5 inline-block">View Policy
            </Link></label>
            
            </div>                            
            <form className="tl" onSubmit={this.login}>
            <div className="form-group">
            <label>Email</label>
            <input autoFocus type="email" className="form-control" onChange={this.handle} name="email" placeholder="Email" required/>
            </div>
            <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" onChange={this.handle} name="password"  placeholder="Password" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more character"
            // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            
            required/>
            </div>
            <div className="form-group tc">
            {enable?
                <button type="submit"  ref={(loginButoon) => this.loginButoon = loginButoon} className="btn btn-info">Login</button>
                :
                <button disabled ref={(loginButoon) => this.loginButoon = loginButoon} className="btn btn-info">Login</button>
            }
            </div>
            </form>
            <hr></hr>
            <div className="flex items-center">
                <div>
                <h6 className="tc">As a Student</h6>
                <div className="ma2 tc">
                {enable?
                    <GoogleLogin
                    clientId={googleClientID}
                    buttonText="Continue with Google"
                    onSuccess={this.student}
                    onFailure={this.student}
                    />:
                    <GoogleLogin
                    clientId={googleClientID}
                    buttonText="Continue with Google"
                    disabled
                    />
                     }
                </div>
            
                 </div>
            
                <div>
                <h6 className="tc">As a Instructor</h6>
                <div className="ma2 tc">
                {enable?
                    <GoogleLogin
                    clientId={googleClientID}
                    buttonText="Continue with Google"
                    onSuccess={this.instructor}
                    onFailure={this.instructor}
                    />:
                    <GoogleLogin
                    clientId={googleClientID}
                    buttonText="Continue with Google"
                    disabled
                    />
                }
                </div>
            
            
            </div>
                </div>
            </div>
            
            </div>
            </div>
            )
        }
    }
    export default Login
