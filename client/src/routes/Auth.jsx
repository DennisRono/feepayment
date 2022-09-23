import React, { Fragment } from 'react'
import '../styles/css/auth.css'

const auth = () => {
  return (
    <Fragment>
        <div className="authentification">
          <section class="contact">
            <div class="contact-wrapper">
                <div class="contFormSec">
                    <h2 class="contact-header">Contact Us</h2>
                    <form action="contact.php" method="POST">
                        <h3>1. Tell us about yourself</h3>
                        <div class="cont-group">
                            <div class="user-input-wrp">
                                <br/>
                                <input id="id-input" type="text" onkeyup="this.setAttribute('value', this.value);" class="inputText" name="name" value=""/>
                                <span class="floating-label">Your Name <span style="color: red;">*</span></span>
                            </div>
                            <span id="id-err"></span>
                            <div class="cont-gr-flex">
                                <div class="contPut">
                                    <div class="user-input-wrp">
                                        <br/>
                                        <input id="id-input" type="text" onkeyup="this.setAttribute('value', this.value);" class="inputText" name="email" value=""/>
                                        <span class="floating-label">Your Email <span style="color: red;">*</span></span>
                                    </div>
                                    <span id="id-err"></span>
                                </div>
                                <div class="contPut">
                                    <div class="user-input-wrp">
                                        <br/>
                                        <input id="id-input" type="text" onkeyup="this.setAttribute('value', this.value);" class="inputText" name="phone" value=""/>
                                        <span class="floating-label">Your Phone Number</span>
                                    </div>
                                    <span id="id-err"></span>
                                </div>
                            </div>
                            <div class="user-input-wrp">
                                <br/>
                                <input id="id-input" type="text" onkeyup="this.setAttribute('value', this.value);" class="inputText" name="website" value=""/>
                                <span class="floating-label">Company Website</span>
                            </div>
                            <span id="id-err"></span>
                        </div>
                        
                        <h3>2. What are you looking to work on?</h3>
                        <div class="cont-group">
                            <div class="user-input-wrp">
                                <br/>
                                <textarea id="id-input" type="text" onkeyup="this.setAttribute('value', this.value);" class="inputText" name="brief" value="" style="min-height: 100px;"></textarea>
                                <span class="floating-label">Describe your project briefly <span style="color: red;">*</span></span>
                            </div>
                            <span id="id-err"></span>
                            <div class="input-field-row">
                                <div class="input-file-row">
                                    <label for="project_brief" class="project_brief">
                                        <div class="file-content">
                                            <div class="icon">
                                                <img src="./assets/svg/icon-download.svg" alt=""/>
                                            </div>
                                            <div class="content-label">
                                                Drag or browse your project brief (you can upload multipe files)
                                            </div>
                                        </div>
                                        <div class="row-wrap">
                                            <div id="filePush" class="button">upload</div>
                                        </div>
                                    </label>
                                    <input class="file-field" type="file" accept="application/pdf, application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint" name="upload[]" multiple="multiple" onChange='getFile()'/>
                                </div>
                                <span id="id-err fileErr"></span>
                            </div>
                        </div>
                        <input type="submit" value="submit" name="contact" class="contact-btn"/>
                    </form>
                </div>
            </div>
          </section>
        </div>
    </Fragment>
  )
}

export default auth