import React, { useReducer } from 'react'

const PracticeThree = () => {
    const intialState = {naturalNumbers:0} ;
    const [state,dispatch] = useReducer(reducer,intialState);
    function reducer (state,action){
        switch (action.type) {
            case "increment":
                return {naturalNumbers:state.naturalNumbers+1};
            case "decrement":
                return {naturalNumbers:state.naturalNumbers-1};
            case "reset":
                return {naturalNumbers:state.naturalNumbers=0};
            default:
                return{naturalNumbers:state.naturalNumbers} 

        }
    }
  return (
    <>
        <h2>Use Reducer Hook Method</h2>
        <h2>Value:{state.naturalNumbers}</h2>
        <button onClick={()=>dispatch({type:'increment'})}>Add</button>&nbsp;
        <button onClick={()=>dispatch({type:'decrement'})}>Detect</button>&nbsp;
        <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
    </>
  )
}

export default PracticeThree;