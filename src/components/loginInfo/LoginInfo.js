import React from 'react'
import { Component } from 'react';
import Hr from '../veritcal Divider/Hr';

class LoginInfo extends Component{

    render(){
        const {image,text}=this.props
        return(
            <div className="" style={{width:"250px"}}>
                <div className="dib ">
                <img src={image} alt="" style={{width:"40px",height:"40px"}} className="br-100"/>        
                </div>
                <div className="dib ml3 ">
                   <h6>
                   {text}
                       </h6> 
                </div>
                {/* <Hr/>
                <div className="pa2 ma2">
                   <button className="btn btn-danger">Logout</button>
                </div> */}
            </div>
        )
    }
}
export default LoginInfo