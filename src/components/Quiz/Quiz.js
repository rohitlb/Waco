import React from 'react'
import { Component } from 'react';
import { post } from '../../script';
import styles from './quiz.module.css'
import { Redirect, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Loading1 from '../Loading/Loading1';

class Quiz extends Component{
constructor(props){
    super()
    try{this.state={
        quiz:[],
        answers:new Array(4),
        result:'',
        id:props.location.query.id,
        token:'',
        email:'',
    }
    console.log(props)
}catch(e){

}
}
async componentDidMount(){
   try{
    const {email,token}=JSON.parse(localStorage.getItem('student'))
        this.setState({token,email})
       const {id}=this.state
       console.log(id,token)
       const data=await post('quiz',token,{id})
       console.log(data[0].question.length)
       this.setState({quiz:data,answers:new Array(data[0].question.length)})
       console.log(this.state)
    }catch(e){
        console.log(e)
    }
}
handle=(e)=>{
    var {answers}=this.state

        answers[e.target.name]=e.target.value
    this.setState({answers})
        console.log(this.state)
}
submitQuiz=async(e)=>{
    e.preventDefault()
    const {quiz,answers,token,email}=this.state
    const {modules,modulesCompleted}=this.props.location.query
    const result=await post('submit-Quiz',token,{id:quiz[0].id,answers,email,modulesCompleted,modules})
    console.log(result)
    if(result){
       this.setState({result:result})
       
    }
}   
render(){
    try{

        const {quiz,result}=this.state
        console.log(quiz)
        if(quiz.length){
        const {name,question}=quiz[0]
        return(
            <div>
        <form className={styles.back} onSubmit={this.submitQuiz} onChange={this.handle} >
               <Link to="courses">

                <FontAwesomeIcon  className="f1 white" icon={faArrowLeft}/>
               </Link>
            <div style={{fontFamily:"Mada"}}  >
            <h1 className="tc">Quiz Attempt</h1>
            <h3 >{name}</h3>
            </div>

            {question.map((value,i)=>{
                
                return(
                    
                    <div key={i} className="pa4 ">

                <h6 className="tl">Question {i+1}: {value.question}</h6>
                
                {value.option1?
                    <div className="form-check ma2">
                <input className="form-check-input" type="radio" required name={i} id={`${i}1`} value={value.option1} />
                <label className="form-check-label" htmlFor={`${i}1`}>
                {value.option1}

                </label>
                </div>:""
                }
                {value.option2?
                    <div className="form-check ma2">
                <input className="form-check-input" type="radio" required name={i} id={`${i}2`} value={value.option2} />
                <label className="form-check-label" htmlFor={`${i}2`}>
                {value.option2}

                </label>
                </div>:""
                }
                {value.option3?
                    <div className="form-check ma2">
                <input className="form-check-input" type="radio" required name={i} id={`${i}3`} value={value.option3} />
                <label className="form-check-label" htmlFor={`${i}3`}>
                {value.option3}

                </label>
                </div>:""
                }
                {value.option4?
                    <div className="form-check ma2">
                <input className="form-check-input" type="radio" required name={i} id={`${i}4`} value={value.option4} />
                <label className="form-check-label" htmlFor={`${i}4`}>
                {value.option4}

                </label>
                </div>:""
                }
               
            </div>
                )
            })}
           
            <button type="submit" className="btn btn-info ">Submit</button>
        
        {   result?result<50?
           <div class="alert alert-danger mt4" role="alert">
        {`score : ${result}% You need to learn more`}
      </div>:result<75?
      <div class="alert alert-warning mt4" role="alert">
      {`score : ${result}% Try to improve`}
    </div>:result<=100?
    <div class="alert alert-success mt4" role="alert">
    {`score : ${result}% Excellent great Job`}
  </div>:"":result===0?
  <div class="alert alert-danger mt4" role="alert">
  {`score : ${result}% You need to learn more`}
</div>:""
    }
        </form>
        
      </div>
    ) 
}
else return <Loading1/>
}catch(e){
    return(<Redirect to="courses"/>)
}
}
}
export default Quiz


