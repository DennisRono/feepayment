import React, { Fragment, useState } from 'react'
import '../styles/css/auth.css'
import { api } from '../api/axios'
import { Link } from "react-router-dom"

const Reset = () => {
    const [regno, setRegno] = useState({
        regno: ''
    })

    const [response, setResponse] = useState({message: '', type: ''})
    const loginSubmit = async (e) => {
        e.preventDefault()
        let res = await api('POST', 'auth/reset', login)
        setResponse(res)
        setRegno({
            regno: ''
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
                    <form action="contact.php" method="POST" className="login-form"  onSubmit={(e)=>loginSubmit(e)}>
                        <h3>Reset your password</h3>
                        <div className="cont-group">
                            <div className="user-input-wrp">
                                <br/>
                                <input id="id-input" type="text" className="inputText" name="regno" value={regno.regno} onChange={(e)=>{setRegno({ ...regno, [e.target.name]: e.target.value })}}/>
                                <span className="floating-label">Registration Number <span style={{color: "red"}}>*</span></span>
                            </div>
                            <span id="id-err"></span>
                        </div>
                        <div className="resetting-pass">
                            <input type="submit" value="request reset" name="contact" className="contact-btn"/>
                            <p><Link to="/auth">Login</Link></p>
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