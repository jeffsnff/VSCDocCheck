import React from 'react'

import Chapter33 from './chapters/Chapter33.js'
import Chapter31 from './chapters/Chapter31.js'
import Chapter1606 from './chapters/Chapter1606.js'
import Chapter35 from './chapters/Chapter35.js'
import ChapterToe from './chapters/ChapterToe.js'
import Chapter30 from './chapters/Chapter30.js'

function ChapterQuestions(props) {

  const { chapterInfo } = props

  function chapterRender(){
    if(chapterInfo === '31'){
      return <Chapter31 />
    }else if(chapterInfo === '33'){
      return <Chapter33 />
    }else if(chapterInfo === '1606'){
      return <Chapter1606 />
    }else if(chapterInfo === '35'){
      return <Chapter35 />
    }else if(chapterInfo === 'toe'){
      return <ChapterToe />
    }else if(chapterInfo === '30'){
      return <Chapter30 />
    }
  }
  
  return(
    <div>
      <h1>QUESTIONS FOR CHAPTERS</h1>
      {chapterRender()}
    </div>
  )
}

export default ChapterQuestions