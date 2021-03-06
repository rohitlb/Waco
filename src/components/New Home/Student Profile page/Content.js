import React, { Component } from 'react'
import { post } from '../../../script'

export class Content extends Component{
    constructor(){
        super()
        this.state={
           isSaved:false
        }
    }
    submit=async (event)=>{
        const submitObject={}
        const fields=document.querySelectorAll('form>.form-group>.form-control')
        Array.from(fields).forEach(value=>{
        if(value.name)
          Object.assign(submitObject,{[value.name]:value.value},{type:'student'})
    })
        const isSaved= await post('save-profile',null,submitObject);
        this.setState({isSaved})
    }
    render(){
        const {profile}=this.props;
        const {isSaved}=this.state
        return(
            <div style={{width:"77%"}}>
            <h1 className="f1 tc" style={{fontFamily:"Allerta",fontWeight:"600",color:"#666262"}}
            >Profile Page</h1>
            <form className="w-50 ma3" onSubmit={this.submit}>

        <div className="form-group mt4 mb4">
        <h6>Name</h6>
            <input disabled type="text" name="name" required defaultValue={profile.name}
             className="form-control" placeholder="Enter Name"/>
        </div>
        <div className="form-group mt4 mb4">
        <h6>Email</h6>
            <input disabled type="email" name="email" required defaultValue={profile.email}
             className="form-control" placeholder="Enter Name"/>
        </div>
        <div className="form-group mt4 mb4">
        <h6>Organization</h6>
            <input  type="text" name="organization" required defaultValue={profile.organization}
             className="form-control" placeholder="Enter Organization name"/>
        </div>
        <div className="form-group mt4 mb4">
        <h6>Phone Number</h6>
            <input  type="tel" name="phone" required defaultValue={profile.phone}
             className="form-control" placeholder="Enter phone number"/>
        </div>
        <div className="form-group mt4 mb3">
        <h6>Alternate Number</h6>
            <input  type="tel" name="alternateNumber" required defaultValue={profile.alternateNumber}
             className="form-control" placeholder="Enter Alternate Phone number"/>
            <small className="text-muted">This alternate number is for future communication if default number is unreachable</small>
       </div>
       <button className="btn btn-info" type="submit">Save</button>
      {isSaved?
      <p className="text-success dib ml3">Saved Successfully</p>
        :""}
             </form>
            
        </div>
    )
}
}