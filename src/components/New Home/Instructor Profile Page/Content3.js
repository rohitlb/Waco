import React, { Component } from 'react'
import cad from './cad.png'
import styles from './content3.module.css'
import Accordion from './Accordion/Accordion'
import { post, get } from '../../../script'
import { Progress } from './Progress'
export class Content3 extends Component{
    constructor(){
        super()
        this.state={
            courses:[],
            review:[],
            rating:[],
            progress:[],
            enrolled:[],
        }
    }
  async  componentDidMount(){
    const {email,token}=JSON.parse(localStorage.getItem('instructor'))
    const {courses}=await post('fetchuserData',token,{email});
    const data=await get('courseProgress');
    data.forEach(value => {
    this.setState((prevState)=>({
    rating:[...prevState.rating,{email:value.email,rating:value.rating,id:value.id}],
        }))
    this.setState((prevState)=>({
    review:[...prevState.review,{email:value.email,review:value.review,id:value.id}],
    })) 
    this.setState((prevState)=>({
    progress:[...prevState.progress,{email:value.email,progress:value.progress,id:value.id}],
    }))
    this.setState((prevState)=>({
    enrolled:[...prevState.enrolled,{email:value.email,id:value.id}],
    }))
        });
        this.setState({courses});
    
    }
    enrollCount=(id)=>{
        var count=0;
        const {enrolled}=this.state
        enrolled.forEach(value=>{
            if(value.id===id)
            count++;
        })
        return count
    }

    render(){
        const {courses,rating,review,progress,enrolled}=this.state
        console.log(this.state)

      if(courses)  return(
            <div style={{width:"77%"}} className={`overflow-y-scroll ${styles.content3}`}>
 <h1 className="f1 tc mb5" style={{fontFamily:"Allerta",fontWeight:"600",color:"#666262"}}>
               All Courses
            </h1>
                {courses.length?courses.map((value,i)=>{
                    return(
            <div >
                        <div key={i}  className="flex justify-evenly container mt3">
                <div className="pa2 grow pointer" style={{width:"400px"}}>
                    <img alt="edusmith" src={value.image} className="w-100"/>
                </div>
                <div className="w-70">
                    <h2 
                    style={{fontWeight:"600",fontSize:"30px",fontFamily:"Overlock"}}>
                        {value.name}</h2>
                       <p style={{fontWeight:"400",fontSize:"15px",color:"#7a7a7a",fontFamily:"Roboto,Sans-serif"}}>
                       Students enrolled : {this.enrollCount(value.id)}
                       </p>
                    </div>
                </div> 
              <Progress rating={rating} progress={progress} review={review} id={value.id}/>
            <hr className="w-100 bg-black"/>
                </div>    
                    )}):""}
            
        </div>
    )
    else return "loading"
}
}