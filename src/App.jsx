import './App.css'
import ApiCall from './childComponents/ApiCall'
import PracticeThree from './childComponents/PracticeThree'
import PracticeTwo from './childComponents/PracticeTwo'
import SampleOne from './parentComponents/SampleOne'
import SampleThree from './parentComponents/SampleThree'
import SampleTwo from './parentComponents/SampleTwo'

function App() {


  return (
    <>
      <SampleOne/>
      <SampleTwo/>
      <SampleThree/>
      <ApiCall/>
      <PracticeTwo/>
      <PracticeThree/>
    </>
  )
}

export default App
