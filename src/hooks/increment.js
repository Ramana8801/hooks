import React, { useState } from "react";
 export default function Year(){
   // const [Language,setlanguage] =  useState('Telugu');
    
   const[state,setState]= useState({
       language:"telugu",
       Year:0
   }
   )
  
   function changeLanguage(){
        setState({...state,language:"React dom"})
    }
  //const [year,setyear] =  useState(0);
  
  function addyear(){
      setState(prev=>{
    return{
        ...prev,
        Year:prev.Year+1
  }
}
)
  }
  return(
      <div>
        <h1 onClick={changeLanguage}> i am learning {state.language}</h1>  
      <h1 onClick={addyear}> my age is {state.Year} years</h1>
  <button onClick={addyear}>Add year</button>
      </div>
      )
  }