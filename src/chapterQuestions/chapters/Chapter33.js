import React, { useState } from 'react'
import Response from '../responses/Response.js'
import {MDBBtn} from 'mdbreact'

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
      <h4>Chapter 33 & 1606 & 30</h4>
      <form onSubmit={handleSubmit}>
        <div className="custom-control custom-checkbox checkbox-xl">
          <input className="custom-control-input" id='certElg' type='checkbox' checked={thing.certElg} onChange={handleChange}></input>
          <label className="custom-control-label" for='certElg'>Certificate of Eligibility</label>
        </div>
        <div className="custom-control custom-checkbox checkbox-xl">
          <input className="custom-control-input" id='jst' type='checkbox' checked={thing.jst} onChange={handleChange}></input>
          <label className="custom-control-label" for='jst'>Joint Service Transcripts / Military Credit</label>
        </div>
        <div className="custom-control custom-checkbox checkbox-xl">
          <input className="custom-control-input" id='residency' type='checkbox' checked={thing.residency} onChange={handleChange}></input>
          <label className="custom-control-label" for='residency'>Residency</label>
        </div>
        <div className="custom-control custom-checkbox checkbox-xl">
          <input className="custom-control-input" id='majorMatch' type='checkbox' checked={thing.majorMatch} onChange={handleChange}></input>
          <label className="custom-control-label" for='majorMatch' >Major matches Wolverine Track</label>
        </div>
        

        <MDBBtn onClick={handleSubmit}>Submit</MDBBtn>
      </form>
      <div>
        {
          toggle ? 
            <div>
              <MDBBtn color='yellow' onClick={resetSelection}>Reset</MDBBtn>
              <Response
                jst={thing.jst}
                residency={thing.residency}
                majorMatch={thing.majorMatch}
                certElg={thing.certElg}

                year={props.year}
                semester={props.semester}
                initials={props.initials}
              />
            </div>
          :
          null
        }
        
      </div>
    </div>
  )
}

export default Chapter33