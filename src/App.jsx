
import './App.css'
import {TextField, Button,Stack } from '@mui/material'
import { useState } from 'react';

function App() { 
const [interest,setInterest] = useState(0)
const [principle,setPrinciple] = useState(0)
const [rate,setRate] = useState(0)
const [year,setYear] = useState(0)

const [ValidPrinciple,setValidPrinciple] = useState(true)
const [ValidRate,setValidRate] = useState(true)
const [ValidYear,setValidYear] = useState(true)



// const [showError,setshowError] = useState(false)
// console.log(principle);
const valisateUserInputs = (e)=>{
  const {name,value} = e.target
//   console.log(`${name} , ${typeof value}`);
//  console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
 if(!!value.match(/^[0-9]*.?[0-9]+$/)){
  // valid patttern
    if(name==='principle'){
      setPrinciple(value)
      setValidPrinciple(true)
    }else if(name==='rate'){
      setRate(value)
      setValidRate(true)
    }else{
      setYear(value)
      setValidYear(true)

    }
  }else{
    if(name==='principle'){
      setPrinciple(value)
      setValidPrinciple(false)
    }else if(name==='rate'){
      setRate(value)
      setValidRate(false)
    }else{
      setYear(value)
      setValidYear(false)

  }
   
 }
}
const handleReset = ()=>{
  setPrinciple(0)
  setRate(0)
  setYear(0)
  setInterest(0)
  setValidPrinciple(true)
  setValidRate(true)
  setValidYear(true)

}
const handleCalculate = (e)=>{
  e.preventDefault()
  if(!principle ||!rate ||!year){
    alert ("please fill the form completely")
  }
  else{
    setInterest(principle*rate*year/100)
  }
}






  return (
    <div style={{width:'100%',height:'100vh'}} className='d-flex justify-content-center align-items-center bg-dark'>
    <div style={{width:'600px'}}className='bg-light p-5 rounded'>
       <h3 style={{height:'35px'}}>simple  interst calculator</h3>
       <p>Calculate your simple interest Easily</p>
       <div style={{width:'100%',height:'150px'}}className='d-flex justify-content-center align-items-center bg-warning mt-5 text-light shadow rounded flex-column'>
        <h1 style={{height:'55px'}}> ₹ {interest} </h1>
        <p className="fw-bolder">Total simple interest</p>
       </div>
       <form className='mt-5' onSubmit={handleCalculate}>
        <div className='mb-3'>
        <TextField className='w-100' id="outlined-basic-principle" label="₹ Principle Amount" variant="outlined" name='principle'  value={principle || ""} onChange={e=>valisateUserInputs(e)} />
        </div>
       { !ValidPrinciple&&<div className='mb-3 text-danger fw-bolder'> Invalid principle Ampount</div>}
        <div className='mb-3'>
        <TextField className='w-100' id="outlined-basic-rate" label="Rate of Interest (%)" variant="outlined" name='rate' value={rate || ""} onChange={e=>valisateUserInputs(e)} />
        </div>
        { !ValidRate&&<div className='mb-3 text-danger fw-bolder'> Invalid Rate</div>}
        <div className='mb-3'>
        <TextField className='w-100' id="outlined-basic-time" label="Time period (year)" variant="outlined" name='year' value={year || ""} onChange={e=>valisateUserInputs(e)} />
        </div>
        { !ValidYear&&<div className='mb-3 text-danger fw-bolder'> Invalid Year</div>}
        <Stack direction={'row'}spacing={2}>
        <Button type='submit' style={{height:'70px', width:'50%'}} className='bg-dark' variant="contained"
        disabled={ValidPrinciple&&ValidRate&&ValidYear?false:true}>CALCULATE</Button>
        <Button onClick={handleReset} style={{height:'70px', width:'50%'}} className='text-dark' variant="outlined">RESET</Button>
        </Stack>
       </form>
       </div>
    </div>
  )
}

export default App
