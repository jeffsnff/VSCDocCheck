import React from 'react'

function ChapterQuestions(props) {

  const { chapterInfo } = props
  
  return(
    <div>
      <h1>QUESTIONS FOR CHAPTERS</h1>
      <h6>{chapterInfo}</h6>
    </div>
  )
}

export default ChapterQuestions