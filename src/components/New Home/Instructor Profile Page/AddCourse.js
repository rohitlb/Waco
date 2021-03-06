import React from 'react'
import { Component } from 'react';
import {  post } from '../../../script'
import styles from './addCourse.module.css'
class AddCourse extends Component{
    constructor(props){
        super()
        this.state={
            module:[{name:'',link:''}],
            course:'',
            Quiz:[{question:'',option1:'',option2:'',option3:'',option4:'',answer:''}]
            ,image:'',
            description:'',
            email:props.profile.email,
            token:props.profile.token
        }
    }
    handle=(e)=>{
        if (["name", "link"].includes(e.target.name) ) {
            let module = [...this.state.module]   
            module[e.target.dataset.id][e.target.name] = e.target.value
            this.setState({ module }, () => console.log(this.state.module))
          } else if (["question", "option1", "option2", "option3", "option4", "answer"].includes(e.target.name) ) {
            let Quiz = [...this.state.Quiz]   
            Quiz[e.target.dataset.id][e.target.name] = e.target.value
            this.setState({ Quiz }, () => console.log(this.state.Quiz))
          }
          else
          {
            this.setState({ [e.target.name]: e.target.value })
            console.log(this.state)
          }   }
       addModule=(event)=>{
           event.preventDefault()
         this.setState((prevState)=>({
             module:[...prevState.module,{name:'',link:''}],
         }))
        }
        addQuestion=(event)=>{
            event.preventDefault()
          this.setState((prevState)=>({
              Quiz:[...prevState.Quiz,{question:'',option1:'',option2:'',option3:'',option4:'',answer:''}],
          }))
         }
         removeModule=(event)=>{
            event.preventDefault()
            const {module}=this.state
            module.pop()
            this.setState({module})
         }
         removeQuestion=(event)=>{
            event.preventDefault()
            const {Quiz}=this.state
            Quiz.pop()
            this.setState({Quiz})
         }
        onSubmit=async(event)=>{
            event.preventDefault()
            console.log(this.state)
            const {course,module,image,email,token,description,Quiz}=this.state
             module.push({name:'Quiz',link:"quiz"});
            const data=await post('postcourse',token,{name:course,modules:module,image,description,email,quiz:Quiz})
            console.log(data) 
        
        }


render(){
    const {module,Quiz}=this.state

    return(
        <div style={{width:"77%"}} className={`overflow-y-scroll ${styles.content3}`}>
<h1 className="f1 tc" style={{fontFamily:"Allerta",fontWeight:"600",color:"#666262"}}
            >Post Course</h1>                        <form className="tl  pa3" onChange={this.handle} onSubmit={this.onSubmit}>
                    <div className="form-group">
                    <h2 style={{fontFamily:"Mada"}}>Course Name</h2>
                    <input autoFocus type="text" className="form-control"  name="course" placeholder="Course Name" required/>
                    </div>
                    <div className="form-group">
                    <label>Course Logo</label>
                    <input  type="text" className="form-control"  name="image" placeholder="Enter Url of logo" required/>
                    </div>
                    <div className="flex items-between justify-around" >
                    <div className="form-group w-50 pa3" id="modules">
                    <h2 style={{fontFamily:"Mada"}}>Course Modules</h2>
                    {module.map((value,i)=>{
                        return(

                            <div key={i} className="form-group" id="clone">
                    <label>Module {i+1}</label>
                    <button onClick={this.removeModule} name="module" className="btn btn-danger ma3">Delete</button>
                    <input data-id={i}  type="text" className="form-control" name="name" placeholder="Enter name of Module" required/>
                    <br/>
                    <input data-id={i} type="text" className="form-control"  name="link"  placeholder="Enter vedio link of Module" required/>
                    </div>
                        )
                        
                    })}

                        
                    <button onClick={this.addModule} id="btn" className="btn btn-info f6">Add Module +</button>

                    </div>
                    <div className="form-group w-50 pa3" id="quiz">
                    <h2 style={{fontFamily:"Mada"}}>Quiz</h2>
                    {Quiz.map((value,i)=>{
                        return(
                            <div key={i} className="form-group" id="clone">
                    <label>Question {i+1}</label>
                    <button onClick={this.removeQuestion} name="Quiz" className="btn btn-danger ma3">Delete</button>
                    <input data-id={i}  type="text" className="form-control" name="question" placeholder="Enter Question" required/>
                    <input data-id={i} type="text" className="form-control"  name="option1"  placeholder="Enter option 1" required/>
                    <input data-id={i} type="text" className="form-control"  name="option2"  placeholder="Enter option 2" required/>
                    <input data-id={i} type="text" className="form-control"  name="option3"  placeholder="Enter option 3" required/>
                    <input data-id={i} type="text" className="form-control"  name="option4"  placeholder="Enter option 4" required/>
                    <input data-id={i} type="text" className="form-control"  name="answer"  placeholder="Enter answer" required/>
                    </div>
                        )
                        
                    })}

                    <button onClick={this.addQuestion} id="btn" className="btn btn-info f6">Add Question +</button>

                    </div>
                    </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Description</label>
                            <textarea className="form-control" name="description" id="exampleFormControlTextarea1" rows="3" required></textarea>
                        </div>
                    

                    <div className="form-group tc">
                    <button className="btn btn-info" type="submit">Post a Course</button>
                        
                    </div>
                    </form>
                    </div>
    )
}

}
export default AddCourse