"use client"
import React, { useEffect } from 'react'

export default function Error({error,reset}:{error:Error,reset:()=>void}) {
      
    useEffect(()=>{
      console.error(error);
    },[error]);
  return (
    <div>
        <h1>Error</h1> 
        <button onClick={()=>reset()} >Coba Ulang</button>
    </div>
    
  )
}


