import React, { useEffect, useState } from 'react'

const SampleThree = () => {
    const [num,setNum] = useState(0);
    const [mul,setMul] = useState(0);
    useEffect(()=>{
       setMul(num*2)
    },[num])
  return (
    <>
        <h2>UseEffec Hook</h2>
        <p>Number Value:{num}</p>
        <p>Multiple Value:{mul}</p>
        <button onClick={()=>{setNum(num+1)}}>Click Here</button>
    </>
  )
}

export default SampleThree;