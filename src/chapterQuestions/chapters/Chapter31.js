import React, { useState } from 'react'
import JST from '../responses/JST.js'

function Chapter31(props){

  const initState = {
    jst: false,
    collegeCredit: false,
    residency: false,
    majorMatch: false
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
    setToggle(prevToggle => !prevToggle)
    

  }


  return(
    <div>
      <h1>Chapter 31</h1>
      <form onSubmit={handleSubmit}>

        <input id='jst' type='checkbox' checked={thing.jst} onChange={handleChange}></input>
        <label>Joint Service Transcripts / Military Credit</label>

        <input id='collegeCredit' type='checkbox' checked={thing.collegeCredit} onChange={handleChange}></input>
        <label>College Credit if Applicable</label>

        
        <input id='residency' type='checkbox' checked={thing.residency} onChange={handleChange}></input>
        <label>Residency</label>
        
        <input id='majorMatch' type='checkbox' checked={thing.majorMatch} onChange={handleChange}></input>
        <label>Major matches Wolverine Track</label>

        <button>Submit</button>
      </form>
      <div>
        {
          toggle ? 
            <JST
            jst={thing.jst}
            collegeCredit={thing.collegeCredit}
            residency={thing.residency}
            majorMatch={thing.majorMatch}
            year={props.year}
            semester={props.semester}
            initials={props.initials}
          />
          :
          null
        }
        
      </div>
    </div>
  )
}

export default Chapter31