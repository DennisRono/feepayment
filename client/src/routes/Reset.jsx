import React, { Fragment, useState } from 'react'
import '../styles/css/auth.css'
import { api } from '../api/axios'

const Reset = () => {
    const [login, setLogin] = useState({
        regno: '',
        password: ''
    })

    const loginSubmit = async (e) => {
        e.preventDefault()
        let res = await api('POST', 'auth/login', login)
        setResponse(res)
        setLogin({
            regno: '',
            password: ''
        })
    }
  return (
    <Fragment>
        <div className="reset">
        <section className="contact">
            <div className="contact-wrapper">
                <div className="contFormSec">
                    <h2 className="contact-header">Fees Payment System</h2>
                    {(response.message!=='')?<p className={(response.type==='success')?"formNotifySucc":"formNotify"}>{response.message}</p>:null}
                    <form action="contact.php" method="POST" className={(active==='login')?"login-form":"hide-activity"}  onSubmit={(e)=>loginSubmit(e)}>
                        <h3>Login</h3>
                        <div className="cont-group">
                            <div className="user-input-wrp">
                                <br/>
                                <input id="id-input" type="text" className="inputText" name="regno" value={login.regno} onChange={(e)=>{setLogin({ ...login, [e.target.name]: e.target.value })}}/>
                                <span className="floating-label">Registration Number <span style={{color: "red"}}>*</span></span>
                            </div>
                            <span id="id-err"></span>
                            <div className="user-input-wrp">
                                <br/>
                                <input id="id-input" type="text" className="inputText" name="password" value={login.password} onChange={(e)=>{setLogin({ ...login, [e.target.name]: e.target.value })}}/>
                                <span className="floating-label">Password <span style={{color: "red"}}>*</span></span>
                            </div>
                            <span id="id-err"></span>
                        </div>
                        <p>don't have an account? <span onClick={()=>{
                            setActive('register')
                            setResponse({message: '', type: ''})
                        }}>Register here</span></p>
                        <div className="resetting-pass">
                            <input type="submit" value="login" name="contact" className="contact-btn"/>
                            <p><Link to="/reset">forgot password?</Link></p>
                        </div>
                    </form>
                </div>
            </div>
          </section>
        </div>
    </Fragment>
  )
}

export default Reset