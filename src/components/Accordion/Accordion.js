import React, { Component } from 'react'
import styles from './accordion.module.css'
class Accordion extends Component{
show=(e)=>{
    var para=e.target.parentElement.nextSibling
    if(para.style.maxHeight)
        para.style.maxHeight = null;
     else 
      para.style.maxHeight = para.scrollHeight + "px";
    

}
render(){
    return(
        <div>
            
               <button className="bg-near-white f3 bn w-100 tl pa3"  style={{outline:"none"}}>
                    Accordion 1
                    <button className="bn b bg-near-white  fr" onClick={this.show}>+</button>
                    
                     </button>
            
                <div className={` ${styles.para}`}>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                     Quibusdam repellendus aperiam asperiores aspernatur 
                     deleniti nemo, doloremque inventore molestiae tenetur 
                     ipsum esse illum 
                    ipsa voluptas nam impedit quas. Ipsa, suscipit eligendi?
                    </p>
            </div>
        </div>
    )
}

}
export default Accordion