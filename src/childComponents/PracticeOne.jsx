import React, { useContext } from 'react'
import {context} from '../parentComponents/SampleTwo'

const PracticeOne = () => {
    const data = useContext(context)
  return (
    <>
        <h2>Use Context hook</h2>
        <p>Name:{data.name}</p>
        <p>age:{data.age}</p>
        <p>Place:{data.place}</p>
    </>
  )
}

export default PracticeOne