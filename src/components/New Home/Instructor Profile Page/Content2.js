import React from 'react'
import { Component } from 'react'
import { post } from '../../../script'

export class Content2 extends Component{
    constructor(){
        super()
        this.state={
            isChanged:null,
            
        }
    }
    submit=async(e)=>{
        e.preventDefault();
        const {email,token}=JSON.parse(localStorage.getItem('instructor'));
        const newPass=document.getElementById('newPass');
        const confPass=document.getElementById('confPass');
        if(newPass.value===confPass.value){
            confPass.nextElementSibling.classList.remove('db')            
            confPass.classList.remove('is-invalid')
            const data= await post('change-password',token,
            {newPass:newPass.value,type:'instructor',email});
            if(data.n && data.nModified)
                this.setState({isChanged:true})
                window.location.reload(true)
        }
        else{
            confPass.nextElementSibling.classList.add('db')            
            confPass.classList.add('is-invalid')
        }
    }

    render(){
        const {isChanged}=this.state
        return(
            <div style={{width:"77%"}}>
            <h1 className="f1 tc" style={{fontFamily:"Allerta",fontWeight:"600",color:"#666262"}}>
                Change Password
            </h1>
            <form className="w-50 ma3" onSubmit={this.submit}>
        <div className="form-group mt4 mb4">
            <h6> New Password</h6>
            <input  type="password" name="newPass" id="newPass" required 
             className="form-control" placeholder="Enter New password"/>
            
        </div>
        <div className="form-group mt4 mb4">
            <h6> Confirm New Password</h6>
            <input  type="password" name="confPass" id="confPass" required 
             className="form-control" placeholder="Confirm password"/>
            <small className="text-danger dn">Password do not match</small>
        </div>
        <button className="btn btn-success white ">Change Password</button>
       { isChanged!==null?isChanged===true?<p className="text-success">Password Changed Successfully</p>:
        <p className="text-danger">cannot change password</p>:""}
        </form>
        </div>
    )
}
}