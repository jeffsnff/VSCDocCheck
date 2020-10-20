import React, { useState } from 'react'
import Response from '../responses/Response.js'

function Chapter33(props){
  
  const initState = {
    jst: false,
    collegeCredit: false,
    residency: false,
    majorMatch: false,
    certElg: false,
    kicker: false
  }
  const [thing, setThing] = useState(initState)
  const [ toggle, setToggle ] = useState(false)

  const handleChange = e => {
    const { checked, id} = e.target
    setThing(prevThing => ({
      ...prevThing,
      [id]: checked
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    setToggle(true)
  }

  const resetSelection = () => {
    setThing(initState)
    setToggle(false)
  }


  return(
    <div>
      <h1>Chapter 33</h1>
      <form onSubmit={handleSubmit}>

        <input id='certElg' type='checkbox' checked={thing.certElg} onChange={handleChange}></input>
        <label>Certificate of Eligibility</label>

        <input id='jst' type='checkbox' checked={thing.jst} onChange={handleChange}></input>
        <label>Joint Service Transcripts / Military Credit</label>

        <input id='collegeCredit' type='checkbox' checked={thing.collegeCredit} onChange={handleChange}></input>
        <label>College Credit if Applicable</label>

        
        <input id='residency' type='checkbox' checked={thing.residency} onChange={handleChange}></input>
        <label>Residency</label>

        <input id='kicker' type='checkbox' checked={thing.kicker} onChange={handleChange}></input>
        <label>Kicker Contract</label>
        
        <input id='majorMatch' type='checkbox' checked={thing.majorMatch} onChange={handleChange}></input>
        <label>Major matches Wolverine Track</label>

        <button>Submit</button>
      </form>
      <button onClick={() => resetSelection()}>Reset</button>
      <div>
        {
          toggle ? 
            <Response
            jst={thing.jst}
            collegeCredit={thing.collegeCredit}
            residency={thing.residency}
            majorMatch={thing.majorMatch}
            year={props.year}
            semester={props.semester}
            initials={props.initials}
            certElg={thing.certElg}
            kicker={thing.kicker}
            initials={props.initials}
            semester={props.semester}
            year={props.year}
          />
          :
          null
        }
        
      </div>
    </div>
  )
}

export default Chapter33