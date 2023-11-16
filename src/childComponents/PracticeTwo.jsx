import React, { useRef, useState } from 'react'

const PracticeTwo = () => {
    const render = useRef(0);
    const inputValue = useRef('');
    const [timer,setTimer] = useState(0);
    const time = useRef();

    const update = () =>{
        render.current++
        console.log(render.current)
    }
    const focusInput = () =>{
        inputValue.current.focus()
    }
    const startTimer = () =>{
        setInterval(() => {
            time.current = setTimer(timer=> timer+1)
        });

    }
    const stopTimer = () =>{
        clearInterval(time.current)
       
    }

  return (
    <>
        <h2>Use Ref Hook Method</h2>
        <h2>Ref Value:{render.current}</h2>
        <button onClick={update}>Click Here</button><br/><br/>
        <input type='text' ref={inputValue}/><br/><br/>
        <button onClick={startTimer}>Stop Watch On</button>
        <h2>Timer:{timer}</h2>
        <button onClick={stopTimer}>Stop Watch Off</button>

        
    </>
  )
}

export default PracticeTwo;