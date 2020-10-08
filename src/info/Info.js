import React from 'react'
import { MDBContainer } from 'mdbreact'

function Info(){
  return(
    <MDBContainer>
      <div>
        <ul>
          <li>Check every student’s account to make sure we have all documents needed- list in note what is missing </li>
          <li>This will be an ongoing task - Check the Under Review tab every day multiple times a day <highlight className='highLight'>(no more than 20 should be in Under Review at once)</highlight></li>
          <li>Please make sure you organize the list by submit date, and do the document checks on a first-come, first serve basis.</li>
          <li>If we are missing documentation, please email the student <b className="email">(uvid@my.uvu.edu)</b> and image it AND make a note. </li>
          <li>After the doc check and note is made move the file from the Under Review tab to Prep for Cert tab. Make sure you press save after each one!!!</li>
          <li>
            If it is a brand new student and they are not a Utah Resident, you need to <b>CALL THEM and have them contact the Residency Office.</b> If they don’t answer, send them an email.
            <ul>
              <li>
                **If they are Chapter 33/31 remind them that out-of-state tuition is not covered by the GI Bill and is approximately a $5000 difference out of pocket
              </li>	
            </ul> 
          </li>
        </ul>
      </div>
    </MDBContainer>
  )
}

export default Info