import React, { useEffect, useState } from 'react'
import { MDBCol, MDBContainer, MDBRow } from 'mdbreact'
import Info from '../info/Info.js'
import ChapterQuestions from '../chapterQuestions/ChapterQuestions.js'

function SemesterInfo() {
  const initState = { semester: '', year: '', initials: '' }
  const initChap = { chapter: ''}
  const [info, setInfo] = useState(true)
  const [ userInfo, setUserInfo ] = useState(initState)
  const [chapter, setChapter] = useState(initChap)

  const onChange = e => {
    const { name, value } = e.target
    setUserInfo(prevInfo => ({...prevInfo, [name]: value}))
    sessionStorage.setItem([name], [value])
  }

  // const onSubmit = e => {
  //   e.preventDefault()
  //   console.log(e.target)

  // }

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
  // console.log(chapter)

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
          <button name='chapter' value='31' onClick={chapterSelected }>Chapter 31</button>
          <button name='chapter' value='33' onClick={chapterSelected }>Chapter 33</button>
          <button name='chapter' value='1606' onClick={chapterSelected }>Chapter 1606</button>
          <button name='chapter' value='30' onClick={chapterSelected }>Chapter 30</button>
          <button name='chapter' value='toe' onClick={chapterSelected }>Chapter 33 TOE</button>
        </MDBRow>
          
        
      </MDBCol>

      { 
        info ? 
            <Info
              
            /> 
          : 
            <ChapterQuestions
              chapterInfo={chapter.chapter}
            />
      }
      

    </MDBContainer>
  )
}

export default SemesterInfo