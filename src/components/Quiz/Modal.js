import React from "react";
import styles from './modal.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Component } from "react";

export class Modal extends Component{
    close=()=>{
        window.location.reload();
    }
  render(){

      return(
          <div className="vh-100  fixed top-0 left-0 right-0 bottom-0" style={{backgroundColor:"rgba(0,0,0,.3)",margin:"auto"}}>
   
 <div class={styles.successContainer}>
	<div class="row">
        <div class={`${styles.modalbox} ${styles.success}
         col-md-12 col-md-9 col-lg-12 ${styles.center} ${styles.animate}`}>
             <div style={this.props.status?{backgroundColor:"#4caf50"}:{backgroundColor:"#dc3545"}} class={`${styles.icon}  flex items-center justify-center`}>
				<span class="">
                    {this.props.status?
                <FontAwesomeIcon icon={faCheck}/>    
                : <FontAwesomeIcon icon={faTimes}/>
            }
                </span>
			</div>
			<h1>{this.props.message.first}</h1>
            <p>Your score was {this.props.score} %</p>
			<p>{this.props.message.second}
				</p>
                <button className="btn btn-light fr" onClick={this.close}>Close</button>
		</div>
	</div>
</div>

        </div>
    )
}
}