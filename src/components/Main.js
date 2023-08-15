import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Main.css'

export default function Main() {

   const inputRef = useRef(null)

  return (
    <div className='container'>
     <h1 className='title text-light'> Quiz Application</h1>
       
       <ol>
        <li>you will be asked 10 question one after another</li>
        <li>you will be asked 10 question one after another</li>
        <li>you will be asked 10 question one after another</li>
        <li>you will be asked 10 question one after another</li>
        <li>you will be asked 10 question one after another</li>
       </ol>

       <form id="form">
        <input ref={inputRef} className='userid' type="text" placeholder='username' />
       </form>
       
       <div className="start">
        <Link className='btn' to={'quiz'}>Start Quiz</Link>
       </div>

    </div>
  )
}
