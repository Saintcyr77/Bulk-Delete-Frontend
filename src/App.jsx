import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Fetch from './Components/Fetch'
import { LinearProgressWithLabel } from './Components/LinearProgressWithLable'
import UploadCSV from './Components/Delete/UploadCSV'
import { progressContext } from './Components/ProgressProvider'

function App() {

  const {progress} = useContext(progressContext)
 

  return (
    <>
    <div style={{paddingTop:"60px"}}>

     <LinearProgressWithLabel />
    </div>
    <div className='container'>
     

     {progress<50?
      <Fetch/>
    :<UploadCSV/>}
       
      
    
       
    </div>
    </>
  )
}

export default App
