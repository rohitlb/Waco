import React, { Component } from 'react'
import { Content } from './Content'
import { Sidebar } from './Sidebar'
import { Content2 } from './Content2'
import { Content3 } from './Content3'
import { Switch, Route } from 'react-router-dom'
import { post } from '../../../script'
import Course from '../../Courses/Course'

export class ProfilePage extends Component{
    constructor(){
        super()
        this.state={
            profile:null
        }
    }
  async componentDidMount(){
      const {email,token}=JSON.parse(localStorage.getItem('student'))
    const profile=await post('load-profile',token,{email,type:'student'})
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
            <Route  path="/edusmith/Student-Profile/change-password" component={Content2} />
            <Route  path="/edusmith/Student-Profile/courses"
             render={(props) => (
                <Content3  profile={profile} />
                    )} />
            <Route path="/edusmith/Student-Profile"
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