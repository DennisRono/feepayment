import React, { Fragment, useState } from 'react'
import '../styles/css/auth.css'

const auth = () => {
    const [active, setActive] = useState('login')
    const activity = (activity) => {
        (activity==='login')?setActive('login'):setActive('register')
    }
  return (
    <Fragment>
        <div className="authentification">
          <section class="contact">
            <div class="contact-wrapper">
                <div class="contFormSec">
                    <h2 class="contact-header">Fees Payment System</h2>
                    <form action="contact.php" method="POST" className={(active==='register')?"registration-form":"hide-activity"}>
                        <h3>Register</h3>
                        <div class="cont-group">
                            <div class="cont-gr-flex">
                                <div class="contPut">
                                    <div class="user-input-wrp">
                                        <br/>
                                        <input id="id-input" type="text" onkeyup="this.setAttribute('value', this.value);" class="inputText" name="email" value=""/>
                                        <span class="floating-label">First Name <span style={{color: "red"}}>*</span></span>
                                    </div>
                                    <span id="id-err"></span>
                                </div>
                                <div class="contPut">
                                    <div class="user-input-wrp">
                                        <br/>
                                        <input id="id-input" type="text" onkeyup="this.setAttribute('value', this.value);" class="inputText" name="phone" value=""/>
                                        <span class="floating-label">Last Name <span style={{color: "red"}}>*</span></span>
                                    </div>
                                    <span id="id-err"></span>
                                </div>
                            </div>
                            <div class="user-input-wrp">
                                <br/>
                                <input id="id-input" type="text" onkeyup="this.setAttribute('value', this.value);" class="inputText" name="name" value=""/>
                                <span class="floating-label">Registration Number <span style={{color: "red"}}>*</span></span>
                            </div>
                            <span id="id-err"></span>
                            <div class="cont-gr-flex">
                                <div class="contPut">
                                    <div class="user-input-wrp">
                                        <br/>
                                        <input id="id-input" type="text" onkeyup="this.setAttribute('value', this.value);" class="inputText" name="email" value=""/>
                                        <span class="floating-label">School <span style={{color: "red"}}>*</span></span>
                                    </div>
                                    <span id="id-err"></span>
                                </div>
                                <div class="contPut">
                                    <div class="user-input-wrp">
                                        <br/>
                                        <input id="id-input" type="text" onkeyup="this.setAttribute('value', this.value);" class="inputText" name="phone" value=""/>
                                        <span class="floating-label">Department <span style={{color: "red"}}>*</span></span>
                                    </div>
                                    <span id="id-err"></span>
                                </div>
                            </div>
                            <div class="cont-gr-flex">
                                <div class="contPut">
                                    <div class="user-input-wrp">
                                        <br/>
                                        <input id="id-input" type="text" onkeyup="this.setAttribute('value', this.value);" class="inputText" name="email" value=""/>
                                        <span class="floating-label">Semester <span style={{color: "red"}}>*</span></span>
                                    </div>
                                    <span id="id-err"></span>
                                </div>
                                <div class="contPut">
                                    <div class="user-input-wrp">
                                        <br/>
                                        <input id="id-input" type="text" onkeyup="this.setAttribute('value', this.value);" class="inputText" name="phone" value=""/>
                                        <span class="floating-label">Year of study <span style={{color: "red"}}>*</span></span>
                                    </div>
                                    <span id="id-err"></span>
                                </div>
                            </div>
                            <div class="user-input-wrp">
                                <br/>
                                <input id="id-input" type="text" onkeyup="this.setAttribute('value', this.value);" class="inputText" name="website" value=""/>
                                <span class="floating-label">Password <span style={{color: "red"}}>*</span></span>
                            </div>
                            <div class="user-input-wrp">
                                <br/>
                                <input id="id-input" type="text" onkeyup="this.setAttribute('value', this.value);" class="inputText" name="website" value=""/>
                                <span class="floating-label">Confirm Password <span style={{color: "red"}}>*</span></span>
                            </div>
                            <span id="id-err"></span>
                        </div>
                        <p>have an account? <span onClick={activity('login')}>Login here</span></p>
                        <input type="submit" value="register" name="contact" class="contact-btn"/>
                    </form>
                    <form action="contact.php" method="POST" className={(active==='login')?"login-form":"hide-activity"}>
                        <h3>Login</h3>
                        <div class="cont-group">
                            <div class="user-input-wrp">
                                <br/>
                                <input id="id-input" type="text" onkeyup="this.setAttribute('value', this.value);" class="inputText" name="name" value=""/>
                                <span class="floating-label">Registration Number <span style={{color: "red"}}>*</span></span>
                            </div>
                            <span id="id-err"></span>
                            <div class="user-input-wrp">
                                <br/>
                                <input id="id-input" type="text" onkeyup="this.setAttribute('value', this.value);" class="inputText" name="website" value=""/>
                                <span class="floating-label">Password <span style={{color: "red"}}>*</span></span>
                            </div>
                            <span id="id-err"></span>
                        </div>
                        <input type="submit" value="login" name="contact" class="contact-btn"/>
                    </form>
                </div>
            </div>
          </section>
        </div>
    </Fragment>
  )
}

export default auth