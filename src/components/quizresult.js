import React from 'react'

function QuizResult(props) {
  return (
    <>
    <div className='show-score'>
        
    </div>
    <button id="next-button" onClick={props.tryAgain}>Try Again</button>
    </>
  )
}

export default QuizResult