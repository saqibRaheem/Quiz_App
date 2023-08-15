import React from 'react'
import Questions from './Questions';
export default function Quiz() {
  const onNext = () =>{
    console.log('on next');
  };

  const onPrev = () =>{
    console.log('on prev');
  }


  return (
    <div className='container'>
        <h1 className='title text-light'>Quiz Application</h1>

        {/* display Question */}
        <Questions />

        <div className="grid">
            <button className='btn prev' onClick={onPrev}>Prev</button>
            <button className='btn next' onClick={onNext}>Next</button>
        </div>
    </div>
  )
}
