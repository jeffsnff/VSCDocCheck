import React from 'react'
import { MDBBtn, MDBCard, MDBContainer, MDBListGroup, MDBListGroupItem } from 'mdbreact'

function Response(props){

  const { jst, residency, majorMatch, certElg, initial, semester, year } = props
  const today = (new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(Date.now()))
  let note
  let email
  let emailSubject = `URGENT: Missing Documentation for ${semester} ${year} VA Education Benefits`
  const initials = initial.toUpperCase()

  const noteResponse = {
    coe: `Document check- missing COE- requested from stu by email-imaged. Major matches WT- moved to ${semester} ${year} prepped for cert. - ${initials}`,
    jst: `Document check- missing JST. Requested from stu by email-imaged. Major matches WT- moved to Awaiting Information. - ${initials}`,
    resident: `Document check- student is non-resident. Called student to establish residency and emphasized that the difference is approximately $5000 out of pocket. Major matches WT, moved to ${semester} ${year} prepped for cert. - ${initials}`,
    jstCOE: `Document check- missing JST and COE. Requested from stu by email-imaged. Major matches WT- Moved to Awaiting Information. - ${initials}`,
    coeRes: `Document Check - Stu missing COE and Non-resident. Requested COE and informed them to call residency to get instate. -imaged ${initials}`,
    coeWT: `Document Check - Stu missing COE and major does not match. Requested COE and informed them fill out 1995 form to update program of study -imaged ${initials}`,
    jstResident: `Document check - missing JST & non-Resident. Emailed Stu to request JST and instate resident. Majors matches WT - moved to Awaiting Information - ${initials}`,
    coeResident: `Document check - missing COE & non-Resident. Emailed Stu to request COE and instate resident. Majors matches WT - moved to ${semester} ${year} prepped to cert. - ${initials}`,
    jstCoeResident: `Document check - missing JST, COE & non-Resident. Emailed Stu to request JST, COE and instate resident. Majors matches WT - moved to Awaiting Information - ${initials}`,
    wtMatch: `Document check - WT does not match to degree on Snapshot. Informed stu via email to fill out a 1995 form. moved to awaiting information - ${initials}`,
    residentWT: `Document Check - WT does not match & Stu is non-resident. Emailed stu about filling out 1995 form as well as contacting Resident office. Moved to Awaiting Information - ${initials}`,
    jstWT: `Document check - WT does not match to degree on Snapshot, & missing JST Informed stu via email to fill out a 1995 form and gave steps to request JST/CCAF. moved to Awaiting Information - ${initials}`,
    jstWTResident : `Document Check - Stu missing JST, is non resident and major does not match WT. Gave student steps on how to request JST, apply for 1995 change of program, and residency number. Moved to Awaiting for information - ${initials}`,
    coeJSTwtResident: `Document Check - Student missing JST, COE, is non-resident and majors don't match. Informed how to fix issues moved to Awating Information. ${initials}`,
    coeJSTRest: `Document Check - missing COE, JST, and is non resident. Gave information on correcting these issues via email. Moved to Awaiting Information. imaged ${initials}`,
    coeJSTWT: `Document Check - missing COE, JST and Majors don't match. Emailed stu on how to fix these issues. imaged ${initials}`,
    coeResMaj: `Document Check - Stu missing COE, non-resident, major does not match. Informed stu how to fix issues. email imaged ${initials}`,
    allDocs: `Document check- all documentation on file. Major matches WT- moved to ${semester} ${year} prepped for cert. - ${initials}`
  }
  const jstResponse = 
    <div>
      <p>Hello [student name],</p>
      <p>
        I was reviewing your {semester} {year} class schedule form today and noticed that we are missing your official military transcripts; either the Joint Service Transcripts (JST) or Community College of the Air Force Transcripts (CCAF) . The JST/CCAF  can be sent to UVU by going to <a href='https://jst.doded.mil/'>https://jst.doded.mil/</a> or <a href='https://www.airuniversity.af.edu/Barnes/CCAF/'>https://www.airuniversity.af.edu/Barnes/CCAF/</a> and sending them to UVU transcript office. The school must have official copies these transcripts before your classes can be certified for benefits.  If you have any questions or need any help with this reach out to us and we can assist you.</p>
      <p>Steps to submit the Joint Services Transcript (Army/Marines/Navy/CG):</p>
      <ol>
        <li className={'hey'}>Please navigate to <a href='https://jst.doded.mil/jst/'>https://jst.doded.mil/jst/</a>in a web browser. If your browser displays a security warning, you can either click “Advanced” and then “Proceed” or use another browser.</li>
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
        I was reviewing your {semester} {year} class schedule form today and noticed that you are not listed as a Utah resident. Please contact the residency office as soon as possible to work to establish Utah Residency and be charged in-state tuition rates. They can be reached at 801-863-8706 or <a href='residency@uvu.edu'>residency@uvu.edu</a>.
      </p>
      <p>
        <b>If they are Chapter 33/31 add this bit:</b>
	      Please note that the GI Bill does NOT cover non-resident tuition/fees and you will be responsible to pay the difference out-of-pocket (approximately $5000).  If you have any questions, please let us know. 
      </p>
      <p>Respectfully,</p>
    </div>

  const coeJSTRest = 
  <div>
    <p>Hello [Student Name]</p>
      <p>
        I was reviewing your {semester} {year} class schedule form to use GI Bill benefits, and noticed that we are missing your Certificate of Eligibility (COE). This is a letter you receive in the mail from the VA after completing an application on <a href='https://www.va.gov/education/how-to-apply/'>https://www.va.gov/education/how-to-apply/</a> explaining the benefits you are eligible for. If you have not applied yet, please do so.  
      </p>
      <p>
        If you have a copy of your COE, you can email it or bring it into our office. If you have not received one yet, it may be on it’s way if you applied less than 30 days ago.  If you would like to request a new one, you can call the VA student line at <a href='1-888-442-4551'>1-888-442-4551</a>.  Please contact us if you have any questions.
      </p>

      <p>
        I also noticed that you are not listed as a Utah resident. Please contact the residency office as soon as possible to work to establish Utah Residency and be charged in-state tuition rates. They can be reached at <a href='801-863-8706'>801-863-8706</a> or <a href='residency@uvu.edu'>residency@uvu.edu</a>.
      </p>

      <p>
        Also, we are missing your official military transcripts; either the Joint Service Transcripts (JST) or Community College of the Air Force Transcripts (CCAF) . The JST/CCAF  can be sent to UVU by going to <a href='https://jst.doded.mil/'>https://jst.doded.mil/</a> or <a href='https://www.airuniversity.af.edu/Barnes/CCAF/'>https://www.airuniversity.af.edu/Barnes/CCAF/</a>and sending them to UVU transcript office. The school must have official copies these transcripts before your classes can be certified for benefits.  If you have any questions or need any help with this reach out to us and we can assist you.
      </p>
      <p>Steps to submit the Joint Services Transcript (Army/Marines/Navy/CG):</p>
      <ol>
        <li className={'hey'}>Please navigate to <a href='https://jst.doded.mil/jst/'>https://jst.doded.mil/jst/</a> in a web browser. If your browser displays a security warning, you can either click “Advanced” and then “Proceed” or use another browser.</li>
        <li className={'hey'}>Create an account or use a CAC to log in.</li>
        <li className={'hey'}>After logging in, choose option 5 and search for Utah Valley University. </li>
        <li className={'hey'}>Finally, check the box to consent to e-delivery and submit. This will officially deliver the transcript to the UVU Transfer Credit Office.</li>
      </ol>
      <p>Respectfully,</p>
  </div>

  const coeResponse =
    <div>
      <p>Hello [Student Name]</p>
      <p>
        I was reviewing your {semester} {year} class schedule form to use GI Bill benefits, and noticed that we are missing your Certificate of Eligibility (COE). This is a letter you receive in the mail from the VA after completing an application on <a href='https://www.va.gov/education/how-to-apply/'>https://www.va.gov/education/how-to-apply/</a> explaining the benefits you are eligible for. If you have not applied yet, please do so.  
      </p>
      <p>
        If you have a copy of your COE, you can email it or bring it into our office. If you have not received one yet, it may be on it’s way if you applied less than 30 days ago.  If you would like to request a new one, you can call the VA student line at <a href='1-888-442-4551'>1-888-442-4551</a>.  Please contact us if you have any questions.
      </p>
      <p>Respectfully,</p>
    </div>

  const jstCOEresponse = 
    <div>
      <p>Hello [Student Name]</p>
      <p>
        I was reviewing your {semester} {year} class schedule form to use GI Bill benefits, and noticed that we are missing your Certificate of Eligibility (COE). This is a letter you receive in the mail from the VA after completing an application on <a href='https://www.va.gov/education/how-to-apply/'>https://www.va.gov/education/how-to-apply/</a> explaining the benefits you are eligible for. If you have not applied yet, please do so.  
      </p>
      <p>
        If you have a copy of your COE, you can email it or bring it into our office. If you have not received one yet, it may be on it’s way if you applied less than 30 days ago.  If you would like to request a new one, you can call the VA student line at 1-888-442-4551.  Please contact us if you have any questions.
      </p>
      <p>
        Also, we are missing your official military transcripts; either the Joint Service Transcripts (JST) or Community College of the Air Force Transcripts (CCAF) . The JST/CCAF  can be sent to UVU by going to <a href='https://jst.doded.mil/ '>https://jst.doded.mil/</a> or <a href='https://www.airuniversity.af.edu/Barnes/CCAF/'>https://www.airuniversity.af.edu/Barnes/CCAF/</a> and sending them to UVU transcript office. The school must have official copies these transcripts before your classes can be certified for benefits.  If you have any questions or need any help with this reach out to us and we can assist you.
      </p>
      <p>Steps to submit the Joint Services Transcript (Army/Marines/Navy/CG):</p>
      <ol>
        <li className={'hey'}>Please navigate to <a href='https://jst.doded.mil/jst/'>https://jst.doded.mil/jst/</a> in a web browser. If your browser displays a security warning, you can either click “Advanced” and then “Proceed” or use another browser.</li>
        <li className={'hey'}>Create an account or use a CAC to log in.</li>
        <li className={'hey'}>After logging in, choose option 5 and search for Utah Valley University. </li>
        <li className={'hey'}>Finally, check the box to consent to e-delivery and submit. This will officially deliver the transcript to the UVU Transfer Credit Office.</li>
      </ol>
      <p>Respectfully,</p>
    </div>

    const JSTandResident =
    <div>
      <p>Hello [Student Name]</p>
      <p>
        I was reviewing your {semester} {year} class schedule form today and noticed that you are not listed as a Utah resident. Please contact the residency office as soon as possible to work to establish Utah Residency and be charged in-state tuition rates. They can be reached at 801-863-8706 or <a href='residency@uvu.edu'>residency@uvu.edu</a>. 
      </p>
      <p>
        We are also missing your official military transcripts; either the Joint Service Transcripts (JST) or Community College of the Air Force Transcripts (CCAF). The JST/CCAF  can be sent to UVU by going to <a href='https://jst.doded.mil/'>https://jst.doded.mil/</a> or <a href='https://www.airuniversity.af.edu/Barnes/CCAF/'>https://www.airuniversity.af.edu/Barnes/CCAF/</a> and sending them to UVU transcript office. The school must have official copies these transcripts before your classes can be certified for benefits.  If you have any questions or need any help with this reach out to us and we can assist you.
      </p>
      <p>Steps to submit the Joint Services Transcript (Army/Marines/Navy/CG):</p>
      <ol>
        <li className={'hey'}>Please navigate to <a href='https://jst.doded.mil/jst/'>https://jst.doded.mil/jst/</a> in a web browser. If your browser displays a security warning, you can either click “Advanced” and then “Proceed” or use another browser.</li>
        <li className={'hey'}>Create an account or use a CAC to log in.</li>
        <li className={'hey'}>After logging in, choose option 5 and search for Utah Valley University. </li>
        <li className={'hey'}>Finally, check the box to consent to e-delivery and submit. This will officially deliver the transcript to the UVU Transfer Credit Office.</li>
      </ol>
      <p>Respectivly,</p>
    </div>

    const wolvrineTrack = 
    <div>
      <p>Hello [Student Name]</p>
      <p>
        I was reviewing your {semester} {year} veteran class schedule form and noticed that your degree in Wolverine Track does not match the degree you have on file with the Veteran Affairs. I need you go to <a href='https://www.va.gov/education/apply-for-education-benefits/application/1995/introduction'>https://www.va.gov/education/apply-for-education-benefits/application/1995/introduction</a> so you can fill out a 1995 form with the Veteran Affairs and let them know that you have changed your degree major.
      </p>
      <p>Respectivly,</p>
    </div>

    const residencyWT =
    <div>
      <p>Hello [ Student Name ]</p>
      <p>
        I was reviewing your {semester} {year} veteran class schedule form and noticed that your degree in Wolverine Track does not match the degree you have on file with the Veteran Affairs. I need you go to <a href='https://www.va.gov/education/apply-for-education-benefits/application/1995/introduction'>https://www.va.gov/education/apply-for-education-benefits/application/1995/introduction</a> so you can fill out a 1995 form with the Veteran Affairs and let them know that you have changed your degree major.
      </p>
      <p>
        I also noticed that you are not listed as a Utah resident. Please contact the residency office as soon as possible to work to establish Utah Residency and be charged in-state tuition rates. They can be reached at 801-863-8706 or <a href='residency@uvu.edu'>residency@uvu.edu</a>.
      </p>
      <p>Respectivly,</p>
    </div>
    const jstWT = 
    <div>
      <p>Hello [ Student Name ]</p>
      <p>
        I was reviewing your {semester} {year} veteran class schedule form and noticed that your degree in Wolverine Track does not match the degree you have on file with the Veteran Affairs. I need you go to <a href='https://www.va.gov/education/apply-for-education-benefits/application/1995/introduction'>https://www.va.gov/education/apply-for-education-benefits/application/1995/introduction</a> so you can fill out a 1995 form with the Veteran Affairs and let them know that you have changed your degree major.
      </p>
      <p>
        We are also missing your official military transcripts; either the Joint Service Transcripts (JST) or Community College of the Air Force Transcripts (CCAF). The JST/CCAF  can be sent to UVU by going to <a href='https://jst.doded.mil/'>https://jst.doded.mil/</a> or <a href='https://www.airuniversity.af.edu/Barnes/CCAF/'>https://www.airuniversity.af.edu/Barnes/CCAF/</a> and sending them to UVU transcript office. The school must have official copies these transcripts before your classes can be certified for benefits.  If you have any questions or need any help with this reach out to us and we can assist you.
      </p>
      <p>Steps to submit the Joint Services Transcript (Army/Marines/Navy/CG):</p>
      <ol>
        <li className={'hey'}>Please navigate to <a href='https://jst.doded.mil/jst/'>https://jst.doded.mil/jst/</a> in a web browser. If your browser displays a security warning, you can either click “Advanced” and then “Proceed” or use another browser.</li>
        <li className={'hey'}>Create an account or use a CAC to log in.</li>
        <li className={'hey'}>After logging in, choose option 5 and search for Utah Valley University. </li>
        <li className={'hey'}>Finally, check the box to consent to e-delivery and submit. This will officially deliver the transcript to the UVU Transfer Credit Office.</li>
      </ol>
      <p>Respectivly,</p>
    </div>

    const jstWTResident =
    <div>
      <p>Hello [ Student Name ]</p>
      <p>
        I was reviewing your {semester} {year} veteran class schedule form and noticed that your degree in Wolverine Track does not match the degree you have on file with the Veteran Affairs. I need you go to <a href='https://www.va.gov/education/apply-for-education-benefits/application/1995/introduction'>https://www.va.gov/education/apply-for-education-benefits/application/1995/introduction</a> so you can fill out a 1995 form with the Veteran Affairs and let them know that you have changed your degree major.
      </p>
      <p>
        I also noticed that you are not listed as a Utah resident. Please contact the residency office as soon as possible to work to establish Utah Residency and be charged in-state tuition rates. They can be reached at 801-863-8706 or <a href='residency@uvu.edu'>residency@uvu.edu.</a>
      </p>
      <p>
        We are also missing your official military transcripts; either the Joint Service Transcripts (JST) or Community College of the Air Force Transcripts (CCAF). The JST/CCAF  can be sent to UVU by going to <a href='https://jst.doded.mil/ '>https://jst.doded.mil/</a> or <a href='https://www.airuniversity.af.edu/Barnes/CCAF/'>https://www.airuniversity.af.edu/Barnes/CCAF/ </a>and sending them to UVU transcript office. The school must have official copies these transcripts before your classes can be certified for benefits.  If you have any questions or need any help with this reach out to us and we can assist you.
      </p>
      <p>Steps to submit the Joint Services Transcript (Army/Marines/Navy/CG):</p>
      <ol>
        <li className={'hey'}>Please navigate to <a href='https://jst.doded.mil/jst/'>https://jst.doded.mil/jst/</a>in a web browser. If your browser displays a security warning, you can either click “Advanced” and then “Proceed” or use another browser.</li>
        <li className={'hey'}>Create an account or use a CAC to log in.</li>
        <li className={'hey'}>After logging in, choose option 5 and search for Utah Valley University. </li>
        <li className={'hey'}>Finally, check the box to consent to e-delivery and submit. This will officially deliver the transcript to the UVU Transfer Credit Office.</li>
      </ol>
      <p>Respectivly,</p>
    </div>

    const jstCOEwtResident = 
    <div>
      <p>Hello [ Student Name ]</p>
      <p>
        I was reviewing your {semester} {year} veteran class schedule form and noticed that your degree in Wolverine Track does not match the degree you have on file with the Veteran Affairs. I need you go to <a href='https://www.va.gov/education/apply-for-education-benefits/application/1995/introduction'>https://www.va.gov/education/apply-for-education-benefits/application/1995/introduction</a> so you can fill out a 1995 form with the Veteran Affairs and let them know that you have changed your degree major.
      </p>
      <p>
        I also noticed that you are not listed as a Utah resident. Please contact the residency office as soon as possible to work to establish Utah Residency and be charged in-state tuition rates. They can be reached at <a href='801-863-8706'>801-863-8706</a> or <a href='residency@uvu.edu'>residency@uvu.edu</a>.
      </p>

      <p>
        We are missing your Certificate of Eligibility (COE). This is a letter you receive in the mail from the VA after completing an application on <a href='https://www.va.gov/education/how-to-apply/'>https://www.va.gov/education/how-to-apply/</a> explaining the benefits you are eligible for. If you have not applied yet, please do so.  
      </p>
      <p>
        If you have a copy of your COE, you can email it or bring it into our office. If you have not received one yet, it may be on it’s way if you applied less than 30 days ago.  If you would like to request a new one, you can call the VA student line at <a href='1-888-442-4551'>1-888-442-4551</a>.  Please contact us if you have any questions.
      </p>
      <p>
        We are also missing your official military transcripts; either the Joint Service Transcripts (JST) or Community College of the Air Force Transcripts (CCAF). The JST/CCAF  can be sent to UVU by going to <a href='https://jst.doded.mil/'>https://jst.doded.mil/</a> or <a href='https://www.airuniversity.af.edu/Barnes/CCAF/'>https://www.airuniversity.af.edu/Barnes/CCAF/</a> and sending them to UVU transcript office. The school must have official copies these transcripts before your classes can be certified for benefits.  If you have any questions or need any help with this reach out to us and we can assist you.
      </p>

      <p>Steps to submit the Joint Services Transcript (Army/Marines/Navy/CG):</p>
      <ol>
        <li className={'hey'}>Please navigate to <a href='https://jst.doded.mil/jst/'>https://jst.doded.mil/jst/</a> in a web browser. If your browser displays a security warning, you can either click “Advanced” and then “Proceed” or use another browser.</li>
        <li className={'hey'}>Create an account or use a CAC to log in.</li>
        <li className={'hey'}>After logging in, choose option 5 and search for Utah Valley University. </li>
        <li className={'hey'}>Finally, check the box to consent to e-delivery and submit. This will officially deliver the transcript to the UVU Transfer Credit Office.</li>
      </ol>
      <p>Respectivly,</p>
    </div>

    const coeRes = 
    <div>
      <p>Hello [ Student Name ]</p>
      <p>
        I was reviewing your {semester} {year} veteran class schedule form and noticed that you are not listed as a Utah resident. Please contact the residency office as soon as possible to work to establish Utah Residency and be charged in-state tuition rates. They can be reached at <a href='801-863-8706'>801-863-8706</a> or <a href='residency@uvu.edu'>residency@uvu.edu</a>.
      </p>
      <p>
        If you have a copy of your COE, you can email it or bring it into our office. If you have not received one yet, it may be on it’s way if you applied less than 30 days ago.  If you would like to request a new one, you can call the VA student line at <a href='1-888-442-4551'>1-888-442-4551</a>. Please contact us if you have any questions.
      </p>
      <p>Respectivly,</p>
    </div>

    const jstCOEwt =
      <div>
        <p>Hello [ Student Name ]</p>

        <p>
          I was reviewing your {semester} {year} veteran class schedule form and noticed that your degree in Wolverine Track does not match the degree you have on file with the Veteran Affairs. I need you go to <a href='https://www.va.gov/education/apply-for-education-benefits/application/1995/introduction'>https://www.va.gov/education/apply-for-education-benefits/application/1995/introduction</a> so you can fill out a 1995 form with the Veteran Affairs and let them know that you have changed your degree major.
        </p>
        <p>
          We are missing your Certificate of Eligibility (COE). This is a letter you receive in the mail from the VA after completing an application on <a href='https://www.va.gov/education/how-to-apply/'>https://www.va.gov/education/how-to-apply/</a> explaining the benefits you are eligible for. If you have not applied yet, please do so.  
        </p>
        <p>
          If you have a copy of your COE, you can email it or bring it into our office. If you have not received one yet, it may be on it’s way if you applied less than 30 days ago.  If you would like to request a new one, you can call the VA student line at <a href='1-888-442-4551'>1-888-442-4551</a>.  Please contact us if you have any questions.
        </p>
        <p>
          We are also missing your official military transcripts; either the Joint Service Transcripts (JST) or Community College of the Air Force Transcripts (CCAF). The JST/CCAF  can be sent to UVU by going to <a href='https://jst.doded.mil/'>https://jst.doded.mil/</a> or <a href='https://www.airuniversity.af.edu/Barnes/CCAF/'>https://www.airuniversity.af.edu/Barnes/CCAF/</a> and sending them to UVU transcript office. The school must have official copies these transcripts before your classes can be certified for benefits.  If you have any questions or need any help with this reach out to us and we can assist you.
        </p>
        <p>Steps to submit the Joint Services Transcript (Army/Marines/Navy/CG):</p>
        <ol>
          <li className={'hey'}>Please navigate to <a href='https://jst.doded.mil/jst/'>https://jst.doded.mil/jst/</a> in a web browser. If your browser displays a security warning, you can either click “Advanced” and then “Proceed” or use another browser.</li>
          <li className={'hey'}>Create an account or use a CAC to log in.</li>
          <li className={'hey'}>After logging in, choose option 5 and search for Utah Valley University. </li>
          <li className={'hey'}>Finally, check the box to consent to e-delivery and submit. This will officially deliver the transcript to the UVU Transfer Credit Office.</li>
        </ol>
        <p>Respectivly,</p>
      </div>

    const coeWT =
      <div>
        <p>Hello [Student Name]</p>
        <p>
          I was reviewing your {semester} {year} veteran class schedule form and noticed that your degree in Wolverine Track does not match the degree you have on file with the Veteran Affairs. I need you go to <a href='https://www.va.gov/education/apply-for-education-benefits/application/1995/introduction'>https://www.va.gov/education/apply-for-education-benefits/application/1995/introduction</a> so you can fill out a 1995 form with the Veteran Affairs and let them know that you have changed your degree major.
        </p>
      </div>

    const coeResMajor = 
    <div>
      <p>Hello [ Student Name ]</p>
      <p>
        I was reviewing your {semester} {year} veteran class schedule form and noticed that your degree in Wolverine Track does not match the degree you have on file with the Veteran Affairs. I need you go to <a href='https://www.va.gov/education/apply-for-education-benefits/application/1995/introduction'>https://www.va.gov/education/apply-for-education-benefits/application/1995/introduction</a> so you can fill out a 1995 form with the Veteran Affairs and let them know that you have changed your degree major.
      </p>
      <p>
        I also noticed that you are not listed as a Utah resident. Please contact the residency office as soon as possible to work to establish Utah Residency and be charged in-state tuition rates. They can be reached at <a href='801-863-8706'>801-863-8706</a> or <a href='residency@uvu.edu'>residency@uvu.edu</a>.
      </p>

      <p>
        We are missing your Certificate of Eligibility (COE). This is a letter you receive in the mail from the VA after completing an application on <a href='https://www.va.gov/education/how-to-apply/'>https://www.va.gov/education/how-to-apply/</a> explaining the benefits you are eligible for. If you have not applied yet, please do so.  
      </p>
      <p>
        If you have a copy of your COE, you can email it or bring it into our office. If you have not received one yet, it may be on it’s way if you applied less than 30 days ago.  If you would like to request a new one, you can call the VA student line at <a href='1-888-442-4551'>1-888-442-4551</a>.  Please contact us if you have any questions.
      </p>
      <p>Respectivly,</p>
    </div>

  if(jst !== false && residency !== false && majorMatch !== false && certElg !== false){
    note = noteResponse.allDocs
    emailSubject = null
    email = null
    
  }else if(jst === false && residency === false && majorMatch === false && certElg === false){
    note = noteResponse.coeJSTwtResident
    email = jstCOEwtResident
  }else if(certElg === false && residency === false && majorMatch === false){
    note = noteResponse.coeResMaj
    email = coeResMajor
  }else if(jst === false && residency === false && majorMatch === false){
    note = noteResponse.jstWTResident
    email = jstWTResident
  }else if(certElg === false && jst === false && residency === false){
    note = noteResponse.coeJSTRest
    email = coeJSTRest
  }else if(jst === false && certElg === false && majorMatch === false){
    note = noteResponse.coeJSTWT
    email = jstCOEwt
  }else if(majorMatch === false && residency === false){
    note = noteResponse.residentWT
    email = residencyWT
  }else if(jst === false && majorMatch === false){
    note = noteResponse.jstWT
    email = jstWT
  }else if(jst === false && certElg === false){
    note = noteResponse.jstCOE
    email = jstCOEresponse
  }else if(jst === false && residency === false){
    note = noteResponse.jstResident
    email = JSTandResident
  }else if(certElg === false && residency === false){
    note = noteResponse.coeRes
    email = coeRes
  }else if(certElg === false && majorMatch === false){
    note = noteResponse.coeWT
    email = coeWT
  }else if(certElg === false){
    note = noteResponse.coe
    email = coeResponse
  }else if(jst === false){
    note = noteResponse.jst
    email = jstResponse
  }else if(residency === false){
    note = noteResponse.resident
    email = residentResponse
  }else if(majorMatch === false){
    note = noteResponse.wtMatch
    email = wolvrineTrack
  }

  return(
    <MDBContainer>
      <MDBCard>
        <MDBListGroup>
      <MDBListGroupItem>
        {/* <h4>Note</h4> */}
        <MDBBtn onClick={() => navigator.clipboard.writeText(today + ' ' + note)}>Note</MDBBtn>
        {today} {note}
      </MDBListGroupItem>
      

        {
          emailSubject  ?
                          <MDBListGroupItem>
                            {/* <h4>Email Subject</h4> */}
                            <MDBBtn onClick={() => navigator.clipboard.writeText(emailSubject)}>Email Subject</MDBBtn>
                            {emailSubject}
                          </MDBListGroupItem>
                        :
                          null
        }
        
        
        {
          email ? 
                  <MDBListGroupItem>
                    <h4>Email</h4>
                    {/* <MDBBtn onClick={() => navigator.clipboard.writeText(email.div)}>Email</MDBBtn>
                    <MDBBtn onClick={() => console.log(email)}>Email Test</MDBBtn> */}
                    {email}
                  </MDBListGroupItem>
                :
                null
        }
        </MDBListGroup>
      </MDBCard>
    </MDBContainer>
  )
}

export default Response