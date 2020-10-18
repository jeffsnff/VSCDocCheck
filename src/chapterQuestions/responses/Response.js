import React from 'react'

function Response(props){

  const { jst, residency, collegeCredit, majorMatch, initials, semester, year } = props

  const response = {
    notes : {
      good: `all documentation on file. Major matches WT- Moved to ${semester} ${year} `,
      bad: `Stu missing`,
      jst: `JST / CCAF`,
      residency: `is non Resident called to establish resident`,
      call: `called stu`,
      email: `requested via email imaged`
    },
    emails : {
      subject: `URGENT: Missing Documentation for ${semester} ${year} VA Education Benefits`,
      jst: ` we are missing your official military transcripts; either the Joint Service Transcripts (JST) or Community College of the Air Force Transcripts (CCAF) . The JST/CCAF  can be sent to UVU by going to https://jst.doded.mil/ or https://www.airuniversity.af.edu/Barnes/CCAF/ and sending them to UVU transcript office. The school must have official copies these transcripts before your classes can be certified for benefits.  If you have any questions or need any help with this reach out to us and we can assist you. 
            
            Steps to submit the Joint Services Transcript (Army/Marines/Navy/CG):
            1.	Please navigate to https://jst.doded.mil/jst/ in a web browser. If your browser displays a security warning, you can either click “Advanced” and then “Proceed” or use another browser. 
            2.	Create an account or use a CAC to log in. 
            3.	After logging in, choose option 5 and search for Utah Valley University. 
            4.	Finally, check the box to consent to e-delivery and submit. This will officially deliver the transcript to the UVU Transfer Credit Office.
            `,
      resident: `you are not listed as a Utah resident. Please contact the residency office as soon as possible to work to establish Utah Residency and be charged in-state tuition rates. They can be reached at 801-863-8706 or residency@uvu.edu.`
    }
  }


  
  let note
  let email
  if(jst !== false && residency !== false && majorMatch !== false && collegeCredit !== false) {
    note = response.notes.good
  }
  if(jst === false){
    note = response.notes.bad + ' ' + response.notes.jst + ' ' + response.notes.email
    email = response.emails.jst
  }
  if(residency === false){
    
    if(note){
      
      note = note + ' and ' + response.notes.residency
      email = email + ' also ' + response.emails.resident
    }else{
      note = response.notes.bad + ' ' + response.notes.residency
      email = response.emails.resident
    }
    
  }
  

  return(
    <div>
      <div>
        <h3>Note : </h3>
        <p>Document Check - {note} {semester} {year} - {initials}</p>
      </div>
      <div>
        <h3>Email : </h3>
        <h5>Subject : {response.emails.subject}</h5>
        <div>
          I was reviewing your {semester} {year} class schedule form and noticed that {email}
        </div>
      </div>
    </div>
  )
}

export default Response