import React, { useState } from 'react'

const SampleOne = () => {
    const [count,setCount] = useState(0);
  return (
    <>
       <h2>Use State hook</h2>
       <h2>count:{count}</h2>
       <button onClick={()=>{setCount(count+1)}}>Add</button>&nbsp;
       <button onClick={()=>{if(count>0){setCount(count-1)}else{setCount(0)}}}>Substract</button>&nbsp;
       <button  onClick={()=>{setCount(0)}}>Reset</button>
    </>
  )
}

export default SampleOne;