import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import data from "../database/data";

/** redux action **/
import * as Action from '../redux/quesion_reducer' 

/** fetch question hook to fetch api data and set value to store **/
export const useFetchQuestion = () =>{
    const dispatch = useDispatch()
   const [getData, setGetData] = useState({
       isLoading : false,
       apiData : [],
       serverError : null
   }) 

   useEffect(() =>{
       setGetData(prev => ({...prev,isLoading : true}))
      
    /* async functiion fetch backend data */ 
    (async () =>{
       try {
             let question = await data;

             if(question.length > 0){
                setGetData(prev => ({...prev,isLoading : false}))
                setGetData(prev => ({...prev,apiData : question}))

                /* display aan action */
                dispatch(Action.startExamAction(question)) 
             }else{
                 throw new Error("No Question Avalibale")
             }
           

       } catch (error) {
        setGetData(prev => ({...prev,isLoading : false}))
        setGetData(prev => ({...prev,serverError : error}))

       }
    })();   
   
 
    }, [dispatch])

   return [getData, setGetData]

} 