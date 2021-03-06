import React, { Component } from 'react'
import styles from './profile.module.css'
import AddCourse from './postCourse/AddCourse'
import { post } from '../../script'
import Card2 from '../Cards/Card2'
import { Redirect } from 'react-router-dom'
// import "../node_modules/jquery/dist/jquery.min.js";
import "bootstrap/js/src/collapse.js";
import Loading1 from '../Loading/Loading1'

// bootstrap/dist/js/bootstrap.min.js";
class InstructorProfile extends Component{
   constructor(props){
       super()
       this.state={
           addcourse:false,
           courses:[],
           user:'',
           coursesInfo:[],
           progress:[],

       }

   }
   async componentDidMount(){
    const user=JSON.parse(localStorage.getItem('user'))
    if(!user)
    this.setState({user:null})
    else{
        const {email,token}=user;
        this.setState({user})
         const data=await post('instructorCourses',token,{email})
         if(data){

             data[0].courses.forEach(async (element) => {
                 const value=await post('coursereview',token,{id:element.id})
                 this.setState((prevState)=>({
                     coursesInfo: [...prevState.coursesInfo,value.data],
                     progress:[...prevState.progress,value.length]
                    } ))
                });
                this.setState({courses:data[0].courses,user})
            }
            }
     
    }
    componentDidUpdate(){

        const rating=document.getElementsByName('rating')
        const review=document.getElementsByName('review')
        const progress=document.getElementsByName('progress')
        const rat=document.createElement('h6')
        const re=document.createElement('h6')
        const pr=document.createElement('h6')
        Array.from(rating).map((value,i)=>{
            if(!value.childNodes[0]){
                rat.innerHTML="Not Rated yet"
              value.append(rat)
            }
            return 1;
    })
    Array.from(review).map((value,i)=>{

        if(!value.childNodes[0]){
              re.innerHTML="Not Reviews yet"
            value.append(re)
          }
          return 1;
  })
  Array.from(progress).map((value,i)=>{

    if(!value.childNodes[0]){
          pr.innerHTML="Not Progress yet"
        value.append(pr)
      }
      return 1;
})
    }
    AddCourse=(e)=>{
        this.setState({addcourse:true})
    }
    remove=(e)=>{
        this.setState({addcourse:false})
    }
    logout=()=>{
        localStorage.clear('user')
        this.setState({user:null})
    }
    show=(e)=>{
        var para=e.target.parentElement.nextSibling
        if(para.style.maxHeight)
            para.style.maxHeight = null;
         else 
          para.style.maxHeight = para.scrollHeight + "px";
        
          }
    
    render(){
        const {user,coursesInfo}=this.state
        console.log(coursesInfo)
        if(user && coursesInfo){
            
            const {addcourse,coursesInfo,courses}=this.state
            return(
            <div style={{fontFamily:"Mada"}}>
                <div className={`bg-navy flex justify-center white pa3 tc ${styles.topBox}`}>
                    <h1 style={{fontFamily:"Mada"}} className="ma0">Welcome to Edusmith</h1>
                    <div>
                <button className="btn btn-danger" onClick={this.logout}> Logout</button>
                </div>
                </div>
                
                <div className={`relative w-100 tc`}>
                    <div className={`${styles.imageBox}`}>
                    <img src={user.imageUrl}
                     className="br-100" alt=""/>
                     
                     <br></br><br></br>
            <h2 style={{fontFamily:"Mada"}}>{user.name}</h2>
            <div className="mt3">
                         <h6>{courses.length}</h6>
                         <h5>Course Posted </h5>
                     </div>
                    <div className="pa4">
                        <h1 className="tl">All Courses posted by You</h1>
                        {courses.length?courses.map((value,i)=>{
                       
                            return(

                                        <div key={value.id} className="pa3">
                              <Card2 heading={value.name} enrolledCount=   {coursesInfo[i]?coursesInfo[i].length:""}
 key={i} 
                              name={value.name} id={value.id} image={
                                  value.image}/>
                                  <div className="tl ">
                                        <div>
            
               <button className="bg-near-white f4 bn w-100 tl pa3"  style={{outline:"none"}}>
                    Rating
                    <small className="bn b f3 bg-near-white  fr" onClick={this.show}>+</small>
                    
                     </button>
            
                <div className={` ${styles.para}`}>
               
                <div className="overflow-y-scroll" name="rating" style={{height:"120px"}}>
                                        {/* <h5 className="tl">Rating</h5> */}
                                    {coursesInfo[i]?coursesInfo[i].map((value,id2)=>{
                                              if(value.rating) return ( <div key={id2} className="card-body  ">
                                                        {value.email} : {`${value.rating} star`}
                                                <hr className="w-100"/>
                                                </div>)
                                                else return null
                                                }):""}
                                    </div>
            </div>
        </div>
        <div>
            
            <button className="bg-near-white f4 bn w-100 tl pa3"  style={{outline:"none"}}>
                 Reviews
                 <small className="bn b bg-near-white f3 fr" onClick={this.show}>+</small>
                 
                  </button>
         
             <div className={` ${styles.para}`}>
             <div className="overflow-y-scroll" name="review" style={{height:"120px"}}>
                                        {/* <h5 className="tl">Reviews:</h5> */}
                                        
                                            {coursesInfo[i]?coursesInfo[i].map((value,id1)=>{
                                                if(value.review){
                                                        return( <div key={id1} className="card-body" >
                                                    {value.email} : {`${value.review}`}
                                                    <hr className="w-100"/>

                                                    </div>
                                                    )
                                                }
                                                    else return null
                                            }):""
                                                
                                                
                                                }
                                    </div>
         </div>
     </div>
     <div>
            
            <button className="bg-near-white f4 bn w-100 tl pa3"  style={{outline:"none"}}>
                 Progress of Students 
                 <small className="bn b bg-near-white f3 fr" onClick={this.show}>+</small>
                 
                  </button>
         
             <div className={` ${styles.para}`}>
             <div className="overflow-y-scroll" name="progress" style={{height:"200px"}}>
                                        {/* <h5 className="tl">Progress of Students:</h5> */}
                                                     {coursesInfo[i]?coursesInfo[i].map((value,ig)=>{
                                               return ( 
                                                   <div key={ig+3} className="pa3">
                                                  <h6>{value.email}</h6>
                                                  {value.quizScore?
                                                  <h6 className="mb2">Quiz Score :{value.quizScore}% </h6>
                                                    : <h6 className="mb2">Quiz Score :Not Attempted </h6>
                                                }
                                                <div className="progress ma2">
                                                {
                                                    value.progress?
                                                    <div className="progress-bar progress-bar-striped" role="progressbar"
                                                    style={{ width:value.progress+"%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                                                    {value.progress}%
                                                </div>
                                             :    <div className="progress-bar progress-bar-striped" role="progressbar"
                                             style={{ width:0+"%"}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                                             0%
                                         </div>
                                            }
                                                
                                              </div>
                                              <hr className="w-100"/>

                                              </div>
                                               )
                                                }):""}
                                    </div>
         </div>
     </div>
                                    
                                            
                                    
                             
                                  </div>
                                </div>
                                    )
                                 })
                                   :<h2>No courses Found</h2> 
                                    

                        }
                    
                    
                    </div>
                <div className=" ma4 ba pa5">
                    <button className="btn btn-info" onClick={this.AddCourse}>Post a Course +</button> 
                </div>
                {addcourse?
                <div>
                <button onClick={this.remove} className="btn btn-danger">Remove</button>
                <AddCourse 
                email={user.email} token={user.token}
                /></div>
                :""
                }
                {/* <AddCourse/> */}

                    </div>
                </div>

            </div>
        ) 
    }
    else if(user===null) return <Redirect to="login"/>
    else return <Loading1/>
        
    }
}
export default InstructorProfile