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
    setUserInfo(prevInfo => ({...prevInfo, [name]: value}))
    sessionStorage.setItem([name], [value])
  }

  useEffect( () => {
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
    
    if(info){
      setInfo(prevInfo => !prevInfo)
    }
    
    const { value, name } = e.target
    setChapter(prevChapter => ({
        ...prevChapter, 
        [name]: value
      })
    )


  }

  return(
    
    <MDBContainer>
      <MDBCol style={{border: '1px solid green'}}>
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
          <MDBBtn name='chapter' value='31' onClick={chapterSelected }>Chapter 31</MDBBtn>
          <MDBBtn name='chapter' value='33' onClick={chapterSelected }>Chapter 33 & 1606 & 30</MDBBtn>
          <MDBBtn name='chapter' value='toe' onClick={chapterSelected }>Chapter 33 TOE / 35 DEA / 35 FRY</MDBBtn>
        </MDBRow>
        
        
          
        
      </MDBCol>

      { 
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