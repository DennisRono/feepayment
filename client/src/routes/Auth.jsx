import React, { Fragment, useState } from 'react'
import '../styles/css/auth.css'

const Auth = () => {
    const [active, setActive] = useState('login')
  return (
    <Fragment>
        <div className="authentification">
          <section className="contact">
            <div className="contact-wrapper">
                <div className="contFormSec">
                    <h2 className="contact-header">Fees Payment System</h2>
                    <form action="contact.php" method="POST" className={(active==='register')?"registration-form":"hide-activity"}>
                        <h3>Register</h3>
                        <div className="cont-group">
                            <div className="cont-gr-flex">
                                <div className="contPut">
                                    <div className="user-input-wrp">
                                        <br/>
                                        <input id="id-input" type="text" onKeyUp="this.setAttribute('value', this.value);" className="inputText" name="email" value=""/>
                                        <span className="floating-label">First Name <span style={{color: "red"}}>*</span></span>
                                    </div>
                                    <span id="id-err"></span>
                                </div>
                                <div className="contPut">
                                    <div className="user-input-wrp">
                                        <br/>
                                        <input id="id-input" type="text" onKeyUp="this.setAttribute('value', this.value);" className="inputText" name="phone" value=""/>
                                        <span className="floating-label">Last Name <span style={{color: "red"}}>*</span></span>
                                    </div>
                                    <span id="id-err"></span>
                                </div>
                            </div>
                            <div className="user-input-wrp">
                                <br/>
                                <input id="id-input" type="text" onKeyUp="this.setAttribute('value', this.value);" className="inputText" name="name" value=""/>
                                <span className="floating-label">Registration Number <span style={{color: "red"}}>*</span></span>
                            </div>
                            <span id="id-err"></span>
                            <div className="cont-gr-flex">
                                <div className="contPut">
                                    <div className="user-input-wrp">
                                        <br/>
                                        <input id="id-input" type="text" onKeyUp="this.setAttribute('value', this.value);" className="inputText" name="email" value=""/>
                                        <span className="floating-label">School <span style={{color: "red"}}>*</span></span>
                                    </div>
                                    <span id="id-err"></span>
                                </div>
                                <div className="contPut">
                                    <div className="user-input-wrp">
                                        <br/>
                                        <input id="id-input" type="text" onKeyUp="this.setAttribute('value', this.value);" className="inputText" name="phone" value=""/>
                                        <span className="floating-label">Department <span style={{color: "red"}}>*</span></span>
                                    </div>
                                    <span id="id-err"></span>
                                </div>
                            </div>
                            <div className="cont-gr-flex">
                                <div className="contPut">
                                    <div className="user-input-wrp">
                                        <br/>
                                        <input id="id-input" type="text" onKeyUp="this.setAttribute('value', this.value);" className="inputText" name="email" value=""/>
                                        <span className="floating-label">Semester <span style={{color: "red"}}>*</span></span>
                                    </div>
                                    <span id="id-err"></span>
                                </div>
                                <div className="contPut">
                                    <div className="user-input-wrp">
                                        <br/>
                                        <input id="id-input" type="text" onKeyUp="this.setAttribute('value', this.value);" className="inputText" name="phone" value=""/>
                                        <span className="floating-label">Year of study <span style={{color: "red"}}>*</span></span>
                                    </div>
                                    <span id="id-err"></span>
                                </div>
                            </div>
                            <div className="user-input-wrp">
                                <br/>
                                <input id="id-input" type="text" onKeyUp="this.setAttribute('value', this.value);" className="inputText" name="website" value=""/>
                                <span className="floating-label">Password <span style={{color: "red"}}>*</span></span>
                            </div>
                            <div className="user-input-wrp">
                                <br/>
                                <input id="id-input" type="text" onKeyUp="this.setAttribute('value', this.value);" className="inputText" name="website" value=""/>
                                <span className="floating-label">Confirm Password <span style={{color: "red"}}>*</span></span>
                            </div>
                            <span id="id-err"></span>
                        </div>
                        <p>have an account? <span onClick={()=>{setActive('login')}}>Login here</span></p>
                        <input type="submit" value="register" name="contact" className="contact-btn"/>
                    </form>
                    <form action="contact.php" method="POST" className={(active==='login')?"login-form":"hide-activity"}>
                        <h3>Login</h3>
                        <div className="cont-group">
                            <div className="user-input-wrp">
                                <br/>
                                <input id="id-input" type="text" onKeyUp="this.setAttribute('value', this.value);" className="inputText" name="name" value=""/>
                                <span className="floating-label">Registration Number <span style={{color: "red"}}>*</span></span>
                            </div>
                            <span id="id-err"></span>
                            <div className="user-input-wrp">
                                <br/>
                                <input id="id-input" type="text" onKeyUp="this.setAttribute('value', this.value);" className="inputText" name="website" value=""/>
                                <span className="floating-label">Password <span style={{color: "red"}}>*</span></span>
                            </div>
                            <span id="id-err"></span>
                        </div>
                        <p>don't have an account? <span onClick={()=>{setActive('register')}}>Register here</span></p>
                        <input type="submit" value="login" name="contact" className="contact-btn"/>
                    </form>
                </div>
            </div>
          </section>
        </div>
    </Fragment>
  )
}

export default Auth