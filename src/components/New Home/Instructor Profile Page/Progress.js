import React from 'react'
import { Component } from 'react';

export class Progress extends Component{
    constructor(){
        super()
        this.state={
            isRating:true,
            isReview:false,
            isProgress:false,

        }
    }
    rating=(e)=>{
        this.setState({isRating:true,isReview:false,isProgress:false})
        e.target.classList.add('btn-dark')
        e.target.nextElementSibling.classList.remove('btn-dark')
        e.target.nextElementSibling.nextElementSibling.classList.remove('btn-dark')
    }
    review=(e)=>{
        this.setState({isRating:false,isReview:true,isProgress:false})
        e.target.classList.add('btn-dark')
        e.target.nextElementSibling.classList.remove('btn-dark')
        e.target.previousElementSibling.classList.remove('btn-dark')
       
    }
    progress=(e)=>{
        this.setState({isRating:false,isReview:false,isProgress:true})
        e.target.classList.add('btn-dark')
        e.target.previousElementSibling.classList.remove('btn-dark')
        e.target.previousElementSibling.previousElementSibling.classList.remove('btn-dark')
  
    }
render(){
    const {id,rating,review,progress}=this.props
    const {isRating,isReview,isProgress}=this.state
    console.log(id,rating,review,progress)
    return(
        <div className="ma3">
        <button name={id} onClick={this.rating} className="btn btn-dark br0  ">Rating</button>
        <button name={id}  onClick={this.review} className=" btn br0  ">Reviews</button>
        <button name={id}  onClick={this.progress} className="br0 btn ">Progress</button>
        <div className="pa3 ba vh-20 overflow-y-scroll">
            {isRating?
            rating.map((value,i)=>{
                if(value.id===id)
               return <h6>{value.email} &nbsp; : {value.rating?value.rating:"Not Rated yet"}</h6>
            }):
            isReview?
            review.map((value,i)=>{
                if(value.id===id)
                return <h6>{value.email} &nbsp; : {value.review?value.review:"Not Reviewed yet"}</h6>
            }):
            isProgress?
            progress.map((value,i)=>{
                if(value.id===id)
               return(
                   <div className="ma2">
                    <h6>{value.email}</h6>
                <div className="progress">
                <div className="progress-bar progress-bar-striped" role="progressbar"
                 style={{width:`${value.progress?value.progress:0}%` }}aria-valuenow="10" aria-valuemin="0" 
                 aria-valuemax="100">
                    {value.progress?value.progress:0}%</div>
                        </div>
                        </div>
               )
            }):"Select one of them"

        
        }
        </div>
        </div>
    )
}


}