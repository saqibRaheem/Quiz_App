import React, { useEffect, useState } from 'react'
import data from '../database/data';

/** Custom Hook **/
import { useFetchQuestion } from '../hooks/FetchQuestion';

export default function Questions() {


    const [checked , setChecked] = useState(undefined)
    const [ {isLoading, apiData, serverError}] = useFetchQuestion()
    const question = data[0]
    // console.log(question);
    useEffect(() => {
        console.log(isLoading);
        // console.log(apiData);
        // console.log(serverError);
    }, []);
    const onSelect = ()=>{
        console.log('radio button change');
    }

  return (
    <div className='questions'>
        <h2 className='text-light'>{question.question}</h2>

        <ul key={question.id}>
            {
                question.options.map((q,i)=>(
                    <li key={i}>
                <input type="radio"
                value={true}
                name='options'
                id={`q${i}-option`}
                onChange={onSelect()}
                 /> 

                 <label className='text-primary' htmlFor={`q${i}-option`}>{q}</label>
                 <div className='check'></div>
            </li>
                ))
            }
        </ul>
    </div>
  )
}
