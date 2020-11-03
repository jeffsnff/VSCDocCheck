import React from 'react'

import Chapter33 from './chapters/Chapter33.js'
import Chapter31 from './chapters/Chapter31.js'
import ChapterToe from './chapters/ChapterToe.js'

function ChapterQuestions(props) {

  // Passed down from semesterInfo to render the chapter file
  const { chapterInfo } = props

  function chapterRender(){
    if(chapterInfo === '31'){
      return <Chapter31 
                year={props.year}
                initials={props.initials}
                semester={props.semester}
              />
    }else if(chapterInfo === '33'){
      return <Chapter33 
                year={props.year}
                initials={props.initials}
                semester={props.semester}
              />
    }else if(chapterInfo === 'toe'){
      return <ChapterToe 
              year={props.year}
              initials={props.initials}
              semester={props.semester}
            />
    }
  }
  
  return(
    <div>
      {chapterRender()}
    </div>
  )
}

export default ChapterQuestions