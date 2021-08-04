import React from 'react'
import styles from './signup.css'
const Signup=()=>{

    return(
        
        <section className="signup">
            <div className="container mt-5">
                <div className="signup-content">
                    <div className="signup-form">
                        <h2 className="form-title">Sign up</h2>
                            <form className="register-form" id="register-form"></form>
                                <div className="form-group">
                                    <label htmlFor="name">
                                    <i class="zmdi zmdi-account material-icons-name"></i>
                                    </label>
                                    <input type="text" placeholder="Your Name" name="name" autoComplete="off" id="name">

                                    </input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">
                                    <i class="zmdi zmdi-email material-icons-name"></i>
                                    </label>
                                    <input type="email" placeholder="Email" name="email" autoComplete="off" id="email">
                                        
                                    </input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">
                                    <i class="zmdi zmdi-lock material-icons-name"></i>
                                    </label>
                                    <input type="password" placeholder="Password" name="password" autoComplete="off" id="password">
                                        
                                    </input>
                                </div>
                                <div className="form-group fomr-button">
                                    <input type="submit" className="form-submit" name="signup" id="signup" value="register"></input>
                                </div>

                    </div>
                </div>
            </div>
        </section>

    )
}
export default Signup

