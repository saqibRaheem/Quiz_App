import React from 'react'
import '../styles/Result.css'
import {Link} from 'react-router-dom'
import ResultTable from './ResultTable'

export default function Result() {
 
  const onRestart = () =>{
    console.log('restart');
  }

  return (
    <div className='container'>
      <h1 className="title text-light">Quiz Application</h1>

      <div className="result flex-center">
        <div className="flex">
          <span>username</span>
          <span className="bold">Sk-Digi-Tech</span>
        </div>
        <div className="flex">
          <span>Total Quiz points : </span>
          <span className="bold">05</span>
        </div>
        <div className="flex">
          <span>Total Question</span>
          <span className="bold">25</span>
        </div>
        <div className="flex">
          <span>Total Attempts</span>
          <span className="bold">25</span>
        </div>
        <div className="flex">
          <span>Total Earn Points</span>
          <span className="bold">20</span>
        </div>
        <div className="flex">
          <span>Quiz Result</span>
          <span className="bold">Pass</span>
        </div>
      </div>

      <div className="start">
        <Link className='btn' to={'/'} onClick={onRestart} >Restart</Link>
      </div>

      <div className="container">
         <ResultTable />
      </div>
    </div>
  )
}
