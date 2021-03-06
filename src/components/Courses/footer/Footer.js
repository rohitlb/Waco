import React, { Component } from 'react'
import styles from './footer.module.css'
import logo from '../../../images/edusmithLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faFacebook,faYoutube,faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {post} from '../../../script'
class Footer extends Component{
    constructor(props){
        super()
        console.log(props)
        this.state={
            rating:0,
            review:null,
            id:props.id,
            email:props.email,
            token:props.token
        }
       
    }
    
    handleInputChange=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }
    Submit=async (event)=>{
        event.preventDefault();
        const {review,token,email,id}=this.state
        console.log(id)

        const result=await post('addreview',token,{review,email,id})
            console.log(result)
    }
    handleStar=async(event)=>{
        const {token,email,id}=this.state

        console.log(this.state)

        Array.from(document.querySelectorAll('.star')).forEach(value=>{
            value.style.color="white"
            console.log(value)
        })
            var data= event.target.parentElement
            // console.log(data)
            data.style.color="yellow"
            const rating=data.getAttribute('sta')
            console.log(id)

            const result=await post('addrating',token,{rating,email,id})
            console.log(result)
            this.setState({rating})
            var star=data
            for(let i=0;i<rating;i++){
           if(star.previousSibling){
               star.previousSibling.style.color="yellow"
               star=star.previousSibling;
           }
           
        }
    }
    
    render(){
        const arr=Array(5).fill(0)
        const {rating}=this.props
        return(
            <div className="bg-black white pa3  
            flex jutify-btetween items-center">
                <div className="ml5 w-10">
                   <a href="edusmithMain">
                         <img src={logo} alt=""/>
                        </a>
                </div>
                <div className="w-80 flex justify-end ">
                    <div>
                        <h5 style={{fontFamily:"Mada"}}>Rate The Course</h5>
                        <div className="mt3">
                            {
                                arr.map((value,i)=>{
                                 if(i<rating)   return(
                                <FontAwesomeIcon icon={faStar} 
                                onClick={this.handleStar} key={i} sta={i+1}  className="yellow star ml2"/>
                                    )
                                else return(
                                    <FontAwesomeIcon icon={faStar} 
                                    onClick={this.handleStar} key={i} sta={i+1} className="white star ml2"/>
                                         
                                )

                                })
                            }
                       
                        </div>
                    </div>
                    <div className={styles.divider}>
                    </div>

                    <div>
                        <h5 style={{fontFamily:"Mada"}}>Write Review of Course</h5>
                        <form onSubmit={this.Submit}>
                        <div className="mt3">
                        <input type="text" onChange={this.handleInputChange} name="review" className="pa1 w-100 bn" />
                        <button type="submit" className="btn btn-info mt2">Submit</button>
                        </div>
                        </form>
                    </div>
                    <div className={styles.divider}>
                    </div>
                    <div className="tc">
                        <h5 style={{fontFamily:"Mada"}}>Contact Us</h5>
                        <div className="mt3 color ">
                        <a href="https://www.youtube.com/channel/UCZRbpdDJyUbiOb_uiHPSwJw" className="white">
                        <FontAwesomeIcon icon={faFacebook} className="ml3  f3 pointer"/>
                        </a>
                        <a href="https://www.youtube.com/channel/UCZRbpdDJyUbiOb_uiHPSwJw" className="white">

                        <FontAwesomeIcon icon={faLinkedin} className="ml3  f3 pointer"/>
                            </a>
                       <a href="https://www.youtube.com/channel/UCZRbpdDJyUbiOb_uiHPSwJw" className="white">

                       <FontAwesomeIcon icon={faYoutube} className="ml3  f3 pointer"/>
                       </a>

                       
                        </div>
                        </div>
                    
                </div>
            </div>
        )
    }
}
export default Footer