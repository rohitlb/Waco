import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'
import {SocialMediaIconsReact} from 'social-media-icons-react';
import { Link } from 'react-router-dom';

export const Sidebar=(props)=>{
    return(
        <div className="pa2 white  flex flex-column items-center" style={{backgroundColor:"#3E2356",width:"300px"}}>
            <div >
                <img  className="br-100" style={{width:"100px",height:"100px"}}
                src={props.imageUrl}
                />
            
            </div>
            <h1 style={{fontFamily:"Amita,Sans-serif",}}
            className="white"
            >{props.name}</h1>
            <p className="f4"
             style={{fontFamily:"Balthazar,Sans-serif",}}
            >
               {props.email}
            </p>
            <div className="flex justify-around">
            <SocialMediaIconsReact borderColor="rgba(0,0,0,0)" borderWidth="0" icon="twitter" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(28,186,223,1)" iconSize="2" roundness="50%" url="https://some-website.com/my-social-media-url" size="40" />
            &nbsp;&nbsp;&nbsp;
            <SocialMediaIconsReact borderColor="rgba(0,0,0,0)" borderWidth="0" borderStyle="inset" icon="facebook" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(9,3,84,1)" iconSize="2" roundness="50%" url="https://some-website.com/my-social-media-url" size="40" />
            &nbsp;&nbsp;&nbsp;
            <SocialMediaIconsReact borderColor="rgba(0,0,0,0)" borderWidth="0" borderStyle="inset" icon="youtube-play" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(219,18,6,1)" iconSize="2" roundness="50%" url="https://some-website.com/my-social-media-url" size="40" />
            &nbsp;&nbsp;&nbsp;
            </div>
            <br/><br/>
            <Link to="/edusmith/student-Profile" className="pa2 w-100 ma2 tl" style={{textDecoration:"none",color:"white"}}>

            <h5 className="tl" style={{fontFamily:"Overlock,Sans-serif",fontWeight:"500"}}
            >Profile Info</h5> 
            </Link>
            <Link to="/edusmith/student-Profile/change-password" className="pa2 w-100 ma2 tl" style={{textDecoration:"none",color:"white"}}>

             <h5 className="tl" style={{fontFamily:"Overlock,Sans-serif",fontWeight:"500"}}
            >Change Password</h5>
            </Link>
            <Link to="/edusmith/student-Profile/courses" className="pa2 w-100 ma2 tl" style={{textDecoration:"none",color:"white"}}>

            <h5 className="tl" style={{fontFamily:"Overlock,Sans-serif",fontWeight:"500"}}
            >Courses</h5>
            </Link>
            <Link to="/edusmith/login" className="pa2 w-100 ma2 tl" style={{textDecoration:"none",color:"white"}}>
             <h5 className="tl" style={{fontFamily:"Overlock,Sans-serif",fontWeight:"500"}}
            >Logout</h5>
            </Link>

        </div>
    )
}