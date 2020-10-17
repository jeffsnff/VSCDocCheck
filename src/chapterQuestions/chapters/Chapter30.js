import React, { useState } from 'react'

function Chapter30(){
  const initState = {
    jst: false,
    collegeCredit: false,
    residency: false,
    majorMatch: false
  }
  const [thing, setThing] = useState(initState)

  const handleChange = e => {
    const { checked, name, value , id} = e.target
    setThing(prevThing => ({
      ...prevThing,
      [id]: checked
    }))
    console.log(e.target.checked)
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(e.target)
    

  }


  return(
    <div>
      <h1>Chapter 30</h1>
      <form onSubmit={handleSubmit}>

        <input id='jst' type='checkbox' checked={thing.jst} onChange={handleChange}></input>
        <label>Certificate of Eligibility</label>

        <input id='jst' type='checkbox' checked={thing.jst} onChange={handleChange}></input>
        <label>Joint Service Transcripts / Military Credit</label>

        <input id='collegeCredit' type='checkbox' checked={thing.collegeCredit} onChange={handleChange}></input>
        <label>College Credit if Applicable</label>

        
        <input id='residency' type='checkbox' checked={thing.residency} onChange={handleChange}></input>
        <label>Residency</label>

        <input id='jst' type='checkbox' checked={thing.jst} onChange={handleChange}></input>
        <label>Kicker Contract</label>
        
        <input id='majorMatch' type='checkbox' checked={thing.majorMatch} onChange={handleChange}></input>
        <label>Major matches Wolverine Track</label>

        <button>Submit</button>
      </form>
    </div>
  )
}

export default Chapter30