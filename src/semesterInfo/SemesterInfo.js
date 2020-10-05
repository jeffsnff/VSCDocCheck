import React, { useEffect, useState } from 'react'
import { MDBContainer, MDBRow } from 'mdbreact'
import Info from '../info/Info.js'

function SemesterInfo() {
  const initState = { semester: '', year: '', initials: '' }
  const [info, setInfo] = useState(true)
  const [ userInfo, setUserInfo ] = useState(initState)

  const onChange = e => {
    const { name, value } = e.target
    setUserInfo(prevInfo => ({...prevInfo, [name]: value}))
    sessionStorage.setItem([name], [value])
  }

  const onSubmit = e => {
    e.preventDefault()

  }

  useEffect( () => {
    const localSemester = sessionStorage.getItem('semester')
    const localYear = sessionStorage.getItem('year')
    const localInitials = sessionStorage.getItem('initials')
    setUserInfo(prevInfo => ({...prevInfo, semester: localSemester, year: localYear, initials: localInitials}))
  }, [])

  const chapterSelected = (e) => {
    e.preventDefault()
    setInfo(prevInfo => !prevInfo)
  }
  return(
    <MDBContainer>
      <MDBRow>
        <form>
          <input 
          type='text' 
          name='semester' 
          placeholder="Semester"
          value={userInfo.semester}
          onChange={onChange}
          />
          <input 
          type='text' 
          name='year' 
          placeholder='Year'
          value={userInfo.year}
          onChange={onChange}
          />
          <input 
          type='text' 
          name='initials' 
          placeholder='Initials'
          value={userInfo.initials}
          onChange={onChange}
          />
          <>
            <button onClick={chapterSelected }>Chapter 31</button>
            <button>Chapter 33</button>
            <button>Chapter 1606</button>
            <button>Chapter 30</button>
            <button>Chapter 33 TOE</button>
          </>
        </form>
      </MDBRow>

      { info ? <Info /> : null }
      

    </MDBContainer>
  )
}

export default SemesterInfo