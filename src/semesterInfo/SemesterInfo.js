import React, { useEffect, useState } from 'react'
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from 'mdbreact'
import Info from '../info/Info.js'
import ChapterQuestions from '../chapterQuestions/ChapterQuestions.js'

function SemesterInfo() {

  const initUser = { semester: '', year: '', initials: '' }
  const initChap = { chapter: ''}

  const [info, setInfo] = useState(true)
  const [ userInfo, setUserInfo ] = useState(initUser)
  const [chapter, setChapter] = useState(initChap)

  const onChange = e => {
    const { name, value } = e.target
    // Saves user information to session storage
    setUserInfo(prevInfo => ({...prevInfo, [name]: value}))
    sessionStorage.setItem([name], [value])
  }

  useEffect( () => {
    // Pulls user information from session storage
    const localSemester = sessionStorage.getItem('semester')
    const localYear = sessionStorage.getItem('year')
    const localInitials = sessionStorage.getItem('initials')
    setUserInfo(prevInfo => ({
        ...prevInfo, 
        semester: localSemester, 
        year: localYear, 
        initials: localInitials
      })
    )
  }, [])

  const chapterSelected = (e) => {
    e.preventDefault()

    if(userInfo.semester === null || userInfo.initials === null || userInfo.year === null){
      alert("Please Enter Your Informatiuon in the Form")
    }else{
      // Turn info hook to false so that it hides the Info.js file
      if(info){
        setInfo(prevInfo => !prevInfo)
      }
      const { value, name } = e.target
        // Sets chapter hook to button selected to pass down 
        // through props to be used for rendering certain questions
        setChapter(prevChapter => ({
              ...prevChapter, 
              [name]: value
            })
        )
    }
  }

  return(
    
    <MDBContainer>
      <MDBCol>
        <MDBRow className='flex-center' >
          <form className="d-flex justify-content-center flex-md-row">
            <input 
            type='text' 
            name='semester' 
            placeholder="Semester"
            className="form-control w-25 p-3"
            value={userInfo.semester}
            onChange={onChange}
            required
            />
            <input 
            type='text' 
            name='year' 
            placeholder='Year'
            className="form-control w-25 p-3"
            value={userInfo.year}
            onChange={onChange}
            />
            <input 
            type='text' 
            name='initials'
            className="form-control w-25 p-3" 
            placeholder='Initials'
            value={userInfo.initials}
            onChange={onChange}
            />
          </form>
        </MDBRow>
          <MDBRow className="d-flex justify-content-around">
          <MDBBtn name='chapter' value='31' onClick={chapterSelected }>Chapter <br/> 31</MDBBtn>
          <MDBBtn name='chapter' value='33' onClick={chapterSelected }>Chapter <br/>33 & 1606 & 30</MDBBtn>
          <MDBBtn name='chapter' value='toe' onClick={chapterSelected }>Chapter <br/>33 TOE / 35 DEA / 35 FRY</MDBBtn>
        </MDBRow>
      </MDBCol>

      { 
      // Displays info before button click. On button click, it hides info and shows the chapter questions.
        info ? 
            <Info
              
            /> 
          : <MDBContainer>
              <ChapterQuestions
                chapterInfo={chapter.chapter}
                year={userInfo.year}
                semester={userInfo.semester}
                initials={userInfo.initials}
              />
            </MDBContainer>
            
      }
      

    </MDBContainer>
  )
}

export default SemesterInfo