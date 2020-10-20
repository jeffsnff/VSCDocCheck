import React from 'react'

function Response(props){

  const { jst, residency, collegeCredit, majorMatch, kicker, certElg, initials, semester, year } = props

  const noteResponse = {
    jst: `Document check- missing JST. Requested from stu by email-imaged. Major matches WT- moved to ${semester} ${year} prepped for cert. - ${initials}`,
    coe: `Document check- missing COE- requested from stu by email-imaged. Major matches WT- moved to ${semester} ${year} prepped for cert. - ${initials}`,
    resident: `Document check- student is non-resident. Called student to establish residency and emphasized that the difference is approximately $5000 out of pocket. Major matches WT, moved to ${semester} ${year} prepped for cert. - ${initials}`,
    jstCOE: `Document check- missing JST and COE. Requested from stu by email-imaged. Major matches WT- moved to ${semester} ${year} prepped for cert. - ${initials}`,
    jstResident: `Document check - missing JST & non-Resident. Emailed Stu to request JST and instate resident. Majors matches WT - moved to ${semester} ${year} prepped to cert. - ${initials}`,
    coeResident: `Document check - missing COE & non-Resident. Emailed Stu to request COE and instate resident. Majors matches WT - moved to ${semester} ${year} prepped to cert. - ${initials}`,
    jstCoeResident: `Document check - missing JST, COE & non-Resident. Emailed Stu to request JST, COE and instate resident. Majors matches WT - moved to ${semester} ${year} prepped to cert. - ${initials}`,
    allDocs: `Document check- all documentation on file. Major matches WT- moved to ${semester} ${year} prepped for cert. - ${initials}`
  }
  const jstResponse = 
    <div>
      <p>Hello [student name],</p>
      <p>we are missing your official military transcripts; either the Joint Service Transcripts (JST) or Community College of the Air Force Transcripts (CCAF) . The JST/CCAF  can be sent to UVU by going to https://jst.doded.mil/ or https://www.airuniversity.af.edu/Barnes/CCAF/ and sending them to UVU transcript office. The school must have official copies these transcripts before your classes can be certified for benefits.  If you have any questions or need any help with this reach out to us and we can assist you.</p>
      <p>Steps to submit the Joint Services Transcript (Army/Marines/Navy/CG):</p>
      <ol>
        <li className={'hey'}>Please navigate to <a>https://jst.doded.mil/jst/ </a>in a web browser. If your browser displays a security warning, you can either click “Advanced” and then “Proceed” or use another browser.</li>
        <li className={'hey'}>Create an account or use a CAC to log in.</li>
        <li className={'hey'}>After logging in, choose option 5 and search for Utah Valley University. </li>
        <li className={'hey'}>Finally, check the box to consent to e-delivery and submit. This will officially deliver the transcript to the UVU Transfer Credit Office.</li>
      </ol>
      <p>Respectfully,</p>
    </div>
  
  const residentResponse =
    <div>
      <p>Hello [Student Name]</p>
      <p>
        I was reviewing your {semester} {year} class schedule form today and noticed that you are not listed as a Utah resident. Please contact the residency office as soon as possible to work to establish Utah Residency and be charged in-state tuition rates. They can be reached at 801-863-8706 or <a>residency@uvu.edu.</a>  
      </p>
      <p>
        <b>If they are Chapter 33/31 add this bit:</b>
	      Please note that the GI Bill does NOT cover non-resident tuition/fees and you will be responsible to pay the difference out-of-pocket (approximately $5000).  If you have any questions, please let us know. 
      </p>
      <p>Respectfully,</p>
    </div>

  const coeResponse =
    <div>
      <p>Hello [Student Name]</p>
      <p>
      I was reviewing your {semester} {year} class schedule form to use GI Bill benefits, and noticed that we are missing your Certificate of Eligibility (COE). This is a letter you receive in the mail from the VA after completing an application on <a>https://www.va.gov/education/how-to-apply/</a> explaining the benefits you are eligible for. If you have not applied yet, please do so.  
      </p>
      <p>
      If you have a copy of your COE, you can email it or bring it into our office. If you have not received one yet, it may be on it’s way if you applied less than 30 days ago.  If you would like to request a new one, you can call the VA student line at 1-888-442-4551.  Please contact us if you have any questions.
      </p>
      <p>Respectfully,</p>
    </div>

  const jstCOEresponse = 
    <div>
      <p>Hello [Student Name]</p>
      <p>
      I was reviewing your {semester} {year} class schedule form to use GI Bill benefits, and noticed that we are missing your Certificate of Eligibility (COE). This is a letter you receive in the mail from the VA after completing an application on <a>https://www.va.gov/education/how-to-apply/</a> explaining the benefits you are eligible for. If you have not applied yet, please do so.  
      </p>
      <p>
      If you have a copy of your COE, you can email it or bring it into our office. If you have not received one yet, it may be on it’s way if you applied less than 30 days ago.  If you would like to request a new one, you can call the VA student line at 1-888-442-4551.  Please contact us if you have any questions.
      </p>
      <p>Also, we are missing your official military transcripts; either the Joint Service Transcripts (JST) or Community College of the Air Force Transcripts (CCAF) . The JST/CCAF  can be sent to UVU by going to https://jst.doded.mil/ or https://www.airuniversity.af.edu/Barnes/CCAF/ and sending them to UVU transcript office. The school must have official copies these transcripts before your classes can be certified for benefits.  If you have any questions or need any help with this reach out to us and we can assist you.</p>
      <p>Steps to submit the Joint Services Transcript (Army/Marines/Navy/CG):</p>
      <ol>
        <li className={'hey'}>Please navigate to <a>https://jst.doded.mil/jst/ </a>in a web browser. If your browser displays a security warning, you can either click “Advanced” and then “Proceed” or use another browser.</li>
        <li className={'hey'}>Create an account or use a CAC to log in.</li>
        <li className={'hey'}>After logging in, choose option 5 and search for Utah Valley University. </li>
        <li className={'hey'}>Finally, check the box to consent to e-delivery and submit. This will officially deliver the transcript to the UVU Transfer Credit Office.</li>
      </ol>
      <p>Respectfully,</p>
    </div>
  
  
  let note
  let email =''
  if(jst !== false && residency !== false && majorMatch !== false && collegeCredit !== false && certElg !== false){
    note = noteResponse.allDocs
  }else if(jst !== false && residency !== false && majorMatch !== false && collegeCredit !== false) {
    note = noteResponse.allDocs
  }else if(jst === false && certElg === false){
    note = noteResponse.jstCOE
    email = jstCOEresponse
  }else if(certElg === false){
    note = noteResponse.coe
  }else if(jst === false){
    note = noteResponse.jst
    email = jstResponse
  }else if(residency === false){
    note = noteResponse.resident
    email = residentResponse
  }


  let emailHeader
  if(email !== undefined){
    emailHeader = <h1>Email</h1>
  }


  return(
    <div>
      <div>
        <h1>Note</h1>
        {note}
      </div>
      <div>
        {emailHeader}
        {email}
      </div>
    </div>
  )
}

export default Response