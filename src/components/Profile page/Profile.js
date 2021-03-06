import React, { Component } from 'react'
import styles from './profile.module.css'
import Card1 from '../Cards/Card1'
import {  post, get } from '../../script'
import { Redirect } from 'react-router-dom';
import Loading1 from '../Loading/Loading1';

class Profile extends Component{

    constructor(){
        super()
        this.state={
            user:'',
            courseImage:[]
        }
    }
    logout=()=>{
        localStorage.clear('user')
        this.setState({user:null})
    }
async componentDidMount(){
    
    const data1=JSON.parse(localStorage.getItem('user'))
    if(!data1) this.setState({user:null})
    else{

        const {status,data}=await post('student-profile',data1.token,{email:data1.email})
        const dataa=await get('allcourse')
        console.log(dataa)
        this.setState({courseImage:dataa})
        if(status){
            const user={}
            Object.assign(user,data1,...data)
            this.setState({user})
        }
    }
    
}
    render(){
        const {user,courseImage}=this.state
        if(user)
        return(
            <div style={{fontFamily:"Mada"}}>
                <div className={`bg-navy white pa3 tc ${styles.topBox}`}>
                    <h1 className="ma0">Welcome to Edusmith</h1>
                    <div>
                <button className="btn btn-danger fr" onClick={this.logout}> Logout</button>
                </div>
                </div>
                
                <div className={`relative w-100 tc`}>
                    <div className={`${styles.imageBox}`}>
                    <img src={user.imageUrl}
                     className="br-100" alt=""/>
                     <br></br><br></br>
                    <h2>{user.name}</h2>
                    <div className="flex justify-center">
                        <div className="tc pa2">
                        <h6>{user.courses.length}</h6>
                        <span>Courses Enrolled</span>
                        </div>
                        
                    </div>
                    <div className="tl mt3">
                        <h3>Courses Information</h3>
                        <div className="flex pa4">
                            {/* { user.courses.length?user.courses.map((value,i)=>{
                              return  (
                              <div key={value.id}>

                              <Card1 heading={value.name} key={i} 
                              name={value.name} id={value.id} image={
                                  `https://res.cloudinary.com/drcx4jfun/image/upload/v1595425141/notebook-336634_640_vsnckd.jpg`
                                  }/>
                                </div>
                              )
                            }):<h1>No Courses found</h1>} */}
                            {user.courses.length?user.courses.map((value,i)=>{
                              return courseImage.map(image=>{
                                    if(value.id===image._id)
                                    return(

                                        <div key={value.id}>
                              <Card1 heading={value.name} key={i} 
                              name={value.name} id={value.id} image={
                                  image.image}/>
                                </div>
                                    )
                                 } 
                                 
                                 )
                                    
                                    

                            }):"" 
                        }
                        </div>
                    </div>
                    {/* <div className="tl mt3">
                    <h3>Personal Information</h3>
                    <form className="w-50 pa4">
                    <div className="form-group">
                    <label>Name</label>
                    <input disabled type="email" className="form-control" onChange={this.handle} name="email" placeholder="Name" required/>
                    </div>
                    </form>
                    </div> */}
                    </div>
                </div>
            </div>
        ) 
        else if(user===null) return <Redirect to="login"/>
        else return <Loading1/>
    }
}
export default Profile