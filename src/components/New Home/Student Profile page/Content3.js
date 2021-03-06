import React, { Component } from 'react'
import cad from './cad.png'
import styles from './content3.module.css'
import { post, get } from '../../../script'
import { Link, Redirect } from 'react-router-dom'
export class Content3 extends Component{
    constructor(){
        super()
        this.state={
            allCourses:null,
            selectedCourses:null,
            redirect:'no'
        }
    }
    async componentDidMount(){
        const {token,email}=this.props.profile
        const data=await post('fetch-enrolled-courses',token,{email});
        this.setState({selectedCourses:data})
        const allCourses=await get('allcourses');
        this.setState({allCourses})
        console.log(data)
    }
     addCourse=async(e)=>{
        const {token,email}=this.props.profile
        const {id,name,imageurl}=e.target.dataset
        e.persist()
        const data=await post('addCourseData',token,{email,id,name,imageUrl:imageurl})
        if(data.upserted){
            e.target.nextElementSibling.classList.remove('dn')
        }
    }
    addId=async(e)=>{
        const {id}=e.target.dataset;
        const data=JSON.parse(localStorage.getItem('student'));
        Object.assign(data,{id});
        localStorage.setItem('student',JSON.stringify(data));
        e.persist();
        this.setState({redirect:"yes"})


    }
    render(){
        const {allCourses,selectedCourses,redirect}=this.state
        if(allCourses!==null && selectedCourses!==null)
        return(
            <div style={{width:"77%"}} className={`overflow-y-scroll ${styles.content3}`}>
 <h1 className="f1 tc mb5" style={{fontFamily:"Allerta",fontWeight:"600",color:"#666262"}}>
               All Courses
            </h1>
            <div >
                {selectedCourses.length?
                selectedCourses.map((value,i)=>{
                    return(

                        <div  className="flex justify-evenly container mt3">
                <div className="pa2 grow pointer" style={{width:"400px"}}>
                    <img alt="edusmith" src={value.imageUrl} className="w-100"/>
                </div>
                <div className="w-70 ml3">
                    <h2 
                    style={{fontWeight:"600",fontSize:"30px",fontFamily:"Overlock"}}>
                        {value.CourseName}</h2>
                       <div style={{fontWeight:"400",fontSize:"15px",color:"#7a7a7a",fontFamily:"Roboto,Sans-serif"}}>
                       Status : Ongoing
                       <br/>
                       Quiz Score : {value.quizScore?value.quizScore+"%":"Not attempted"}
                       <br/>
                       Progress : {value.progress?`${value.progress}%`:"0%"}
                       <div className="progress">
                <div className="progress-bar progress-bar-striped" role="progressbar"
                 style={{width:`${value.progress?value.progress:0}%` }}aria-valuenow="10" aria-valuemin="0" 
                 aria-valuemax="100">
                    {value.progress?value.progress:0}%</div>
                        </div>

                       {redirect==='yes'? 
                        <Redirect to="/edusmith/courses"/>
                       :""
                       }
                        <button onClick={this.addId} data-id={value.id} className="ba bg-white pa2 grow mt2">Go to Course</button>

                       </div>
                         <br/><br/>
                </div>
            </div>
            )
            })
             :<h5>No Courses Found </h5>
            }
            <hr className="w-100 bg-black"/>
            <h5 className="tl ml3">Popular courses</h5>
            <hr className="bg-black w-100 "/>

            {allCourses.map((value,i)=>{
                    return(

                        <div key={i}>

            <div  className="flex justify-evenly container">
                <div className="w-70">
                <h2 
                    style={{fontWeight:"600",fontSize:"30px",fontFamily:"Overlock"}}>
                        {value.name}</h2>
                        <p style={{fontWeight:"400",fontSize:"15px",color:"#7a7a7a",fontFamily:"Roboto,Sans-serif"}}>
                        {value.description}  </p>
                        
               <button className="btn btn-info" data-id={value._id} 
               data-name={value.name} data-imageurl={value.image} onClick={this.addCourse}>Add +</button>
                <small className="text-success ml3 dn">Added Successfully</small>
            <br/><br/>
                </div>
                <div className="pa2 grow pointer" style={{width:"400px"}}>
                    <img alt="edusmith" src={value.image} className="w-100"/>
                </div>
            </div>
            <div className="container mt5 mb5">
            <hr className="bg-black w-100 "/>
            </div>
            </div>
                )
                })}
                </div>    
            
        </div>
    )
    else return "loading"
}
}