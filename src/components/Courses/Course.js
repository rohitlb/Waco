import React, { Component } from 'react'
import styles from './course.module.css'
import Footer from './footer/Footer'
import Navbar from './Navbar/Navbar'
import YouTube from 'react-youtube';
import {post} from '../../script'
import { Redirect, Link } from 'react-router-dom'
import Loading1 from '../Loading/Loading1'

class Course extends Component{
    totalModules=5;
       constructor(props){
           super()
          
               this.state={
                   notes:[],
                   id:'',  //id of current course
                   searchModule:'',
                   url:'',  //default module url
                   progress:0,
                   moduleName:'',  //default module name
            modules:[], //all modules array
            name:'',    //course name
            modulesCompleted:[],
            rating:0,
            quiz:false,

        }

          
    }
   async componentDidMount(){
           const {email,token,id}=JSON.parse(localStorage.getItem('student'))

           if(!email && !token ) this.setState({email:null,token:null})
           
           else{
        this.setState({email,token,id})
        const {modules,name,modulesCompleted,notes,rating,progress,quizScore
        }=await post('coursebyid',token,{email,id});
        console.log(modules,name,modulesCompleted,notes,rating,progress)
        this.totalModules=modules.length
        if (rating) this.setState({rating})
        if (progress) this.setState({progress});
        this.setState({modules,name,notes,modulesCompleted,
        url:modules[0].link,moduleName:modules[0].name
        })
        if(modulesCompleted.length){
            modulesCompleted.forEach((value,i)=>{
                const check=document.getElementsByClassName('form-check-label')
                Array.from(check).forEach((detail)=>{
                    if(detail.innerHTML===value)
                    detail.previousSibling.checked=true
                })
            })
        }
        if(notes.length){
                notes.forEach(value=>{
                document.getElementById('textArea').innerHTML+=value+"\n"
            })}

        }

    }
    handle=(event)=>{
            this.setState({
                [event.target.name]:event.target.value
            })
    }
    addNotes=async()=>{
        const {notes,email,id,token}=this.state
        document.getElementById("textArea").innerHTML+=notes+"\n";
        await post('addNotes',token,{notes,email,id})
    }
    resetProgress=async (event)=>{
        const {email,id,token}=this.state
        this.setState({progress:0,modulesCompleted:[],email,id})
    const checkBox=document.getElementsByClassName("form-check-input") 
    Array.from(checkBox).forEach(value=>{
        value.checked=false
    })           
    await post('reset',token,{email,id})
    
    }
    
    
    videoEnd=async (event)=>{
        const data=event.target.l.id
   const checkBox= document.getElementById(data)
   var label=checkBox.nextSibling.innerHTML
   if(!checkBox.checked){
       checkBox.checked=true
       this.setState((prevState)=>({
        modulesCompleted:[...prevState.modulesCompleted,label],
    }))
    const {email,token,id,modulesCompleted}=this.state
    const progress=Math.round((modulesCompleted.length/this.totalModules)*100)
    this.setState({progress})
    console.log(modulesCompleted)
      const data=await post('addmodulescompleted',token,{modulesCompleted,email,
        progress,id})
        console.log(data)
   }
        
}
    videoPlay=(event)=>{
        if(event.target.dataset.url)
        this.setState({url:event.target.dataset.url})
        this.setState({moduleName:event.target.innerHTML})
    }
    Attemptquiz=()=>{
        this.setState({quiz:true})
    }
    
    render(){
            const opts = {
                height: '480',
            width: '980',
            playerVars: {
                autoplay: 0,
            },
          };
    const {modules,email,name,id,progress,rating,token,quiz,url,moduleName,modulesCompleted}=this.state
    console.log(this.state)
          if(email!==null && id.length)
         
          return(
        <div style={{fontFamily:"Mada"}}>
            <Navbar courseId={id}/>
            <div className={`${styles.container}`}>
                {/* mosules box */}
                <div className={`${styles.item1}  bg-near-white pa3 pb0`}>
                    <h2 style={{fontFamily:"Mada"}}>Course Content</h2>
        <p className="black">{modulesCompleted?modulesCompleted.length:0}/{modules.length} Modules Completed  
                     <button onClick={this.resetProgress} className="btn btn-danger f6 ml2">Reset Progress</button>
                        </p>
                    <hr className="w-100 mt3 mb3"></hr>
                    <div className={`${styles.moduleBox}`} id="modules">
                        {modules.map((value)=>{
                            if(value.name!=="Quiz")
                            return(
                                <div  key={value.name} className={styles.modules} >

                            <li  className={`modules list pa2 pointer `}>
                                <div className="form-check">
                                    <input disabled type="checkbox" className="form-check-input" id={`${value.link}`}/>
                                    <label  onClick={this.videoPlay}  className="form-check-label" data-url={value.link}>{value.name}</label>
                                </div>
                            </li><hr className="w-100 mt3 mb3"></hr>
                                </div>
                                )
                        })}
                        <Link to ={{pathname:"quiz",query:{id,modulesCompleted,modules}}}>
                        <div   className={styles.modules} > 
                        <li  className={`modules list pa2 pointer `}>
                            <div className="form-check">
                                <input disabled type="checkbox" className="form-check-input"/>
                                <label className="form-check-label">Quiz</label>
                            </div>
                        </li><hr className="w-100 mt3 mb3"></hr>
                            </div>
                        </Link>
                    
                    </div>
                    <div>
                        <div className="form-group ma3">
                            <label htmlFor="textArea">Saved Notes</label>
                            <textarea className="form-control h-auto" id="textArea" rows="5">
                            </textarea>
                        </div>
                    </div>
                </div>
                {/* vedio box */}
                <div className={`${styles.item2}`}>
                   <div className="flex justify-between items-center">
                       <h2 style={{fontFamily:"Mada"}}>{name}</h2>
                   </div>
                   <div className="progress w-50  mt3">
                        <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: `${progress}%`}} aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">
                            {progress}%
                        </div>
                    </div>
                    <div className="">
                        <div><p className="black fr ba pa2">Playing {moduleName}</p></div>
                    <YouTube videoId={url} id={url}  opts={opts} onEnd={this.videoEnd} name="hey"/>
                    
                    </div>
                    <div className="mt2">
                        <input type="text" onChange={this.handle} name="notes" className={`pa2 outline-0 w-90 ${styles.addNotes}`} />
                        <button onClick={this.addNotes} className={`${styles.addNotes} bg-white pa2`}>Add Notes</button>
                    </div>
                    {/* <div className="pa4">
                        <button onClick={this.Attemptquiz} className="btn btn-success fr">Attempt Quiz</button>
                        {quiz?<Redirect to={{
                            pathname:"quiz",
                            state:{id,modules,modulesCompleted},
                            
                        } }/> : ""}
                    </div> */}
                </div>
            </div>
            <Footer id={id} email={email} token={token} rating={rating}/>
        </div>
        )
    //     else if(email===null) return <Redirect to="login"/>
       else return <Loading1/>
    
}
    
}
export default Course