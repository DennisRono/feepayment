import React, { Fragment } from 'react'
import '../styles/css/auth.css'

const auth = () => {
  return (
    <Fragment>
        <div className="authentification">
          <section class="contact">
            <div class="contact-wrapper">
                <div class="contFormSec">
                    <h2 class="contact-header">Fees Payment System</h2>
                    <form action="contact.php" method="POST">
                        <h3>Register to the system</h3>
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
                        <input type="submit" value="register" name="contact" class="contact-btn"/>
                    </form>
                </div>
            </div>
          </section>
        </div>
    </Fragment>
  )
}

export default auth