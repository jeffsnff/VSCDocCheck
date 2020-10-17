import React from 'react'

function JST(props){

  const { jst, residency, collegeCredit, majorMatch, initials, semester, year } = props

  const response = {
    notes : {
      allDocs: 'Document check- all documentation on file. Major matches WT- moved to Fall 2020 prepped for cert.',
      resident: 'Document check- student is non-resident. Called student to establish residency and emphasized that the difference is approximately $5000 out of pocket. Major matches WT, moved to prepped for cert.',
      coe: 'Document check- missing COE- requested from stu by email-imaged. Major matches WT- moved to Spring Fall 2020 prepped for cert.',
      jst: `Document check- missing JST. Requested from stu by email-imaged. Major matches WT- moved to ${semester} ${year} prepped for cert.`
    },
    emails : {
      jst: `I was reviewing your ${semester} ${year} class schedule form to use GI Bill benefits, and noticed that we are missing your official military transcripts; either the Joint Service Transcripts (JST) or Community College of the Air Force Transcripts (CCAF) . The JST/CCAF  can be sent to UVU by going to https://jst.doded.mil/ or https://www.airuniversity.af.edu/Barnes/CCAF/ and sending them to UVU transcript office. The school must have official copies these transcripts before your classes can be certified for benefits.  If you have any questions or need any help with this reach out to us and we can assist you. 
            Steps to submit the Joint Services Transcript (Army/Marines/Navy/CG):
            1.	Please navigate to https://jst.doded.mil/jst/ in a web browser. If your browser displays a security warning, you can either click “Advanced” and then “Proceed” or use another browser. 
            2.	Create an account or use a CAC to log in. 
            3.	After logging in, choose option 5 and search for Utah Valley University. 
            4.	Finally, check the box to consent to e-delivery and submit. This will officially deliver the transcript to the UVU Transfer Credit Office.
            `,
      coe: `I was reviewing your (semester and year ex. Fall 2019) class schedule form to use GI Bill benefits, and noticed that we are missing your Certificate of Eligibility (COE). This is a letter you receive in the mail from the VA after completing an application on https://www.va.gov/education/how-to-apply/ explaining the benefits you are eligible for. If you have not applied yet, please do so.  
            If you have a copy of your COE, you can email it or bring it into our office. If you have not received one yet, it may be on it’s way if you applied less than 30 days ago.  If you would like to request a new one, you can call the VA student line at 1-888-442-4551.  Please contact us if you have any questions.
            `,
      residency: `
                  I was reviewing your (semester and year, ex. Fall 2019) class schedule form today and noticed that you are not listed as a Utah resident. Please contact the residency office as soon as possible to work to establish Utah Residency and be charged in-state tuition rates. They can be reached at 801-863-8706 or residency@uvu.edu.  
                  If they are Chapter 33/31 add this bit: 
                  Please note that the GI Bill does NOT cover non-resident tuition/fees and you will be responsible to pay the difference out-of-pocket (approximately $5000).  If you have any questions, please let us know.
                  `
    }
  }



  let note
  let email
  if(jst === false){
    note = response.notes.jst
    email = response.emails.jst
  }







  return(
    <div>
      <div>Note : {note}</div>
      <div>Email : {email}</div>
    </div>
  )
}

export default JST