// you need tachyons to use this

import React,{Component} from "react"


class Card2 extends  Component{
    constructor(){
        super()
        this.state={
            courseId:''
            
        }
    }



    render(){
        const {image,heading,enrolledCount}=this.props

        return(
           <div>

            <div className=" ml2 mr2  flex items-center tc overfow-hidden ">
                {image?
                
                <div className=" grow br4  tc mb3 br4" style={{width:"300px"}}>
                <img src={this.props.image} alt="" className="w-100 "/>
                </div>:""
            }
                <div className="pa3 ma3 black">
                    <h3>{heading}</h3>
                    <br></br>
        <h6 className="tl">Students Enrolled : {enrolledCount}</h6>
                </div>
                
                
            
            </div>
            </div>
        )
    }
}
export default Card2