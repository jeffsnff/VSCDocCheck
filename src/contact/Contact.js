import React, { useState } from 'react'
import emailjs from 'emailjs-com'

import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBAlert} from 'mdbreact'

function Contact(){
  
  const [ msgSuccess, setMsgSuccess ] = useState(false)

  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICEID, process.env.REACT_APP_EMAILTEMPLATE, e.target, process.env.REACT_APP_USERID)
      .then((result) => {
          if(result.status === 200){
            toggle()
          }
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset()
  }

  const toggle = () => {
    setMsgSuccess(!msgSuccess)
  }
    return(
      <MDBContainer>
        <MDBRow style={{padding: '50px'}}>
          <MDBCol></MDBCol>
          <MDBCol md="9">
            {
              msgSuccess ?
                <MDBAlert color="success" dismiss onClose={() => toggle()}>Your message has been sent!</MDBAlert>
              :
              <form onSubmit={sendEmail}>
                <p className="h2 text-center mb-4">Contact Jeff S.</p>
                <p className="text-center mb-4">Please be as detailed as possible: <br />What chapter it is under, what selections you have made etc.</p>
                <label htmlFor="defaultFormContactNameEx" className="grey-text">
                  Your name
                </label>
                <input 
                  name='name' 
                  type="text" 
                  required
                  id="defaultFormContactNameEx" 
                  className="form-control" 
                />
                <br />
                <label htmlFor="defaultFormContactEmailEx" className="grey-text">
                  Your email
                </label>
                <input
                  name='email'
                  type="email"
                  required
                  id="defaultFormContactEmailEx"
                  className="form-control"
                />
                <br />
                <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
                  Subject
                </label>
                <input
                  name='subject'
                  type="text"
                  required
                  id="defaultFormContactSubjectEx"
                  className="form-control"
                />
                <br />
                <label htmlFor="defaultFormContactMessageEx" className="grey-text">
                  Your message
                </label>
                <textarea
                  name='message'
                  type="text"
                  required
                  id="defaultFormContactMessageEx"
                  className="form-control"
                  rows="3"
                />
                <div className="text-center mt-4">
                  <MDBBtn color="warning" outline type="submit">
                    Send
                  <MDBIcon far icon="paper-plane" className="ml-2" />
                  </MDBBtn>
                </div>
              </form>
            }
            
          </MDBCol>
          <MDBCol></MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  
}

export default Contact