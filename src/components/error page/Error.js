import React from 'react'
import { Component } from 'react';
import image from './404.gif'
import { Link } from 'react-router-dom';

class Error extends Component{
constructor(){
    super()
    this.state={

    }
}

    render(){
        return(
            <div style={{fontFamily:"Mada",backgroundColor:"#3A97D2"}} className="flex white justify-center items-center flex-column vh-100">
                <img className="w-30" src={image} alt=""/>
                <h1>Error 404 Page Not Found</h1>
                <h5>The page you are looking for does not exist or might be deleted.</h5>
                <h5>Try reloading the page or 
                    <Link to ="edusmith/login">
                    <buttton className="btn btn-info">Click here</buttton>
                    </Link>
                    </h5>
                
            </div>
        )
    }
}
export default Error