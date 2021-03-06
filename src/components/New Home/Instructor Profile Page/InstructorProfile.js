import React, { Component } from 'react'
import { Content } from './Content'
import { Sidebar } from './Sidebar'
import { Content2 } from './Content2'
import { Content3 } from './Content3'
import { Switch, Route } from 'react-router-dom'
import AddCourse from './AddCourse'
import { post } from '../../../script'

export class InstructorProfile extends Component{
    constructor(){
        super()
        this.state={
            profile:null
        }
    }
  async componentDidMount(){
      const {email,token}=JSON.parse(localStorage.getItem('instructor'))
    const profile=await post('load-profile',token,{email,type:'instructor'})
    console.log(profile)
    this.setState({profile})
    }
    render(){
        const {profile}=this.state;
       if(profile)
        return(
        <div className="flex vh-100 overflow-hidden">
            <Sidebar name={profile.name} email={profile.email} imageUrl={profile.imageUrl}/>
            <Switch>
            <Route  path="/edusmith/Instructor-Profile/change-password" component={Content2} />
            <Route  path="/edusmith/Instructor-Profile/post-course"
              render={(props) => (
                <AddCourse  profile={profile} />
            )} />  
            <Route  path="/edusmith/instructor-Profile/courses"
             render={(props) => (
                <Content3  profile={profile} />
                    )} />    
            <Route path="/edusmith/instructor-Profile"
            render={(props) => (
            <Content  profile={profile} />
                )} />       
            </Switch>
            {/* <Content/> */}
            {/* <Content3/>             */}
        </div>
    )
    else return "loading"
}
}