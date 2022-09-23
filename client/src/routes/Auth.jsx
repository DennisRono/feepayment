import React, { Fragment, useState } from 'react'
import '../styles/css/auth.css'

const Auth = () => {
    const [active, setActive] = useState('login')
    const [register, setRegister] = useState({
        fname: '',
        lname: '',
        regno: '',
        school: '',
        department: '',
        semester: '',
        year: '',
        password: '',
        cpassword: ''
    })
    const [login, setLogin] = useState({
        regno: '',
        password: ''
    })
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
                                        <input id="id-input" type="text" onKeyUp={this.setAttribute('value', this.value)} className="inputText" name="fname" value={register.fname} onChange={(e)=>{setRegister({ ...register, [e.target.name]: e.target.value })}}/>
                                        <span className="floating-label">First Name <span style={{color: "red"}}>*</span></span>
                                    </div>
                                    <span id="id-err"></span>
                                </div>
                                <div className="contPut">
                                    <div className="user-input-wrp">
                                        <br/>
                                        <input id="id-input" type="text" onKeyUp={this.setAttribute('value', this.value)} className="inputText" name="lname" value={register.lname} onChange={(e)=>{setRegister({ ...register, [e.target.name]: e.target.value })}}/>
                                        <span className="floating-label">Last Name <span style={{color: "red"}}>*</span></span>
                                    </div>
                                    <span id="id-err"></span>
                                </div>
                            </div>
                            <div className="user-input-wrp">
                                <br/>
                                <input id="id-input" type="text" onKeyUp={this.setAttribute('value', this.value)} className="inputText" name="regno" value={register.regno} onChange={(e)=>{setRegister({ ...register, [e.target.name]: e.target.value })}}/>
                                <span className="floating-label">Registration Number <span style={{color: "red"}}>*</span></span>
                            </div>
                            <span id="id-err"></span>
                            <div className="cont-gr-flex">
                                <div className="contPut">
                                    <div className="user-input-wrp">
                                        <br/>
                                        <input id="id-input" type="text" onKeyUp={this.setAttribute('value', this.value)} className="inputText" name="school" value={register.school} onChange={(e)=>{setRegister({ ...register, [e.target.name]: e.target.value })}}/>
                                        <span className="floating-label">School <span style={{color: "red"}}>*</span></span>
                                    </div>
                                    <span id="id-err"></span>
                                </div>
                                <div className="contPut">
                                    <div className="user-input-wrp">
                                        <br/>
                                        <input id="id-input" type="text" onKeyUp={this.setAttribute('value', this.value)} className="inputText" name="department" value={register.department} onChange={(e)=>{setRegister({ ...register, [e.target.name]: e.target.value })}}/>
                                        <span className="floating-label">Department <span style={{color: "red"}}>*</span></span>
                                    </div>
                                    <span id="id-err"></span>
                                </div>
                            </div>
                            <div className="cont-gr-flex">
                                <div className="contPut">
                                    <div className="user-input-wrp">
                                        <br/>
                                        <input id="id-input" type="text" onKeyUp={this.setAttribute('value', this.value)} className="inputText" name="semester" value={register.semester} onChange={(e)=>{setRegister({ ...register, [e.target.name]: e.target.value })}}/>
                                        <span className="floating-label">Semester <span style={{color: "red"}}>*</span></span>
                                    </div>
                                    <span id="id-err"></span>
                                </div>
                                <div className="contPut">
                                    <div className="user-input-wrp">
                                        <br/>
                                        <input id="id-input" type="text" onKeyUp={this.setAttribute('value', this.value)} className="inputText" name="year" value={register.year} onChange={(e)=>{setRegister({ ...register, [e.target.name]: e.target.value })}}/>
                                        <span className="floating-label">Year of study <span style={{color: "red"}}>*</span></span>
                                    </div>
                                    <span id="id-err"></span>
                                </div>
                            </div>
                            <div className="user-input-wrp">
                                <br/>
                                <input id="id-input" type="text" onKeyUp={this.setAttribute('value', this.value)} className="inputText" name="password" value={register.password} onChange={(e)=>{setRegister({ ...register, [e.target.name]: e.target.value })}}/>
                                <span className="floating-label">Password <span style={{color: "red"}}>*</span></span>
                            </div>
                            <div className="user-input-wrp">
                                <br/>
                                <input id="id-input" type="text" onKeyUp={this.setAttribute('value', this.value)} className="inputText" name="cpassword" value={register.cpassword} onChange={(e)=>{setRegister({ ...register, [e.target.name]: e.target.value })}}/>
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
                                <input id="id-input" type="text" onKeyUp={this.setAttribute('value', this.value)} className="inputText" name="regno" value={login.regno} onChange={(e)=>{setLogin({ ...login, [e.target.name]: e.target.value })}}/>
                                <span className="floating-label">Registration Number <span style={{color: "red"}}>*</span></span>
                            </div>
                            <span id="id-err"></span>
                            <div className="user-input-wrp">
                                <br/>
                                <input id="id-input" type="text" onKeyUp={this.setAttribute('value', this.value)} className="inputText" name="password" value={login.password} onChange={(e)=>{setLogin({ ...login, [e.target.name]: e.target.value })}}/>
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