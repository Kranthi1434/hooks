import React from 'react'
import PracticeOne from '../childComponents/practiceOne';


export const context = React.createContext();

const SampleTwo = () => {
  
    let student = {
        name:'kranthi',
        age:27,
        place:'banglore',
    }
      
      
    
  return (
    <>
        <context.Provider value={student}>
            <PracticeOne/> 
        </context.Provider>
    </>
  )
}

export default SampleTwo;