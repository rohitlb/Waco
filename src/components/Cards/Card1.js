// you need tachyons to use this

import React,{Component} from "react"
import { Redirect } from "react-router-dom"


class Card1 extends  Component{
    constructor(){
        super()
        this.state={
            redirect:false,
            courseId:''
            
        }
    }
gotoCourse=(event)=>{
    const user=JSON.parse(localStorage.getItem('user'))
    Object.assign(user,{id:event.target.id})
    localStorage.setItem('user',JSON.stringify(user))
    this.setState({redirect:true})
}


    render(){
        const {redirect,courseId}=this.state
        console.log(courseId)
        const {image,heading,name,id}=this.props

        return(
           <div>

            <div className=" ml2 mr2  flex items-center tc overfow-hidden ">
                {image?
                
                <div className=" grow br4 w-40 tc mb3 br4">
                <img src={this.props.image} alt="" className="w-100 "/>
                </div>:""
            }
                <div className="pa3 ma3 black">
                    <h3>{heading}</h3>
                    <br></br>
                    <button name={name} id={id} className="grow btn btn-info mt3" onClick={this.gotoCourse}>Go to Course</button>
                </div>
                {redirect?
                <Redirect push to={{
                    pathname: 'courses',
                    
                }}/>:""
                
            }
            </div>
            </div>
        )
    }
}
export default Card1