import React, { useState } from 'react'
import Response from '../responses/Response.js'

function ChapterTOE(props){
  
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
      <h1>Chapter 33 TOE & 35 DEA & 30 FRY</h1>
      <form onSubmit={handleSubmit}>
        <div className="custom-control custom-checkbox checkbox-xl">
          <input className="custom-control-input" id='certElg' type='checkbox' checked={thing.certElg} onChange={handleChange}></input>
          <label className="custom-control-label" for='certElg'>Certificate of Eligibility</label>
        </div>
        {/* <div>
          <input id='jst' type='checkbox' checked={thing.jst} onChange={handleChange}></input>
          <label>Joint Service Transcripts / Military Credit</label>
        </div> */}
        <div className="custom-control custom-checkbox checkbox-xl">
          <input className="custom-control-input" id='residency' type='checkbox' checked={thing.residency} onChange={handleChange}></input>
          <label className="custom-control-label" for='residency'>Residency</label>
        </div>
        <div className="custom-control custom-checkbox checkbox-xl">
          <input className="custom-control-input" id='majorMatch' type='checkbox' checked={thing.majorMatch} onChange={handleChange}></input>
          <label className="custom-control-label" for='majorMatch'>Major matches Wolverine Track</label>
        </div>


        <button>Submit</button>
      </form>
      <button onClick={() => resetSelection()}>Reset</button>
      <div>
        {
          toggle ? 
            <Response
            // jst={thing.jst}
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

export default ChapterTOE