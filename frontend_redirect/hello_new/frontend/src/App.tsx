import './App.css'
import {getCompareResult, getRedirect} from './service/compareResult'
import {flow} from 'fp-ts/lib/function'
import * as E from 'fp-ts/Either'
import { useState } from 'react'
// import * as config from './config.json'

function App() {
  const [prodId, setprodId] = useState('')
  const handleGetCompareResult=(prodId:string)=>{
    getCompareResult(prodId)().then(
      flow(
        E.match(
          (e)=>console.error(e),
          (right)=>console.log(right)
        )
      )
    )
  }
  const handleConnectURLFront=()=>{
    // var config = require('./config.json');
    // console.log(config['api']);
    window.location.href = 'https://stackoverflow.com/questions/34338440/how-to-redirect-to-an-external-url-in-angular2'
  }
  const handleConnectURLBack=()=>{
    getRedirect()().then(
      flow(
        E.match(
          (e)=>console.error(e),
          (right)=>
    window.location.href = right
        )
      )
    )
  }
  return (
    <>
      <h1>PDM compare GUI</h1>
      <div className="card">
        <input onChange={(e)=> setprodId(e.target.value)} placeholder='product ID'/>
        <button onClick={()=>handleGetCompareResult(prodId)}>submit</button>    
      </div>
      <div className="card">
        <button onClick={()=>handleConnectURLFront()}>redirect from frontend</button>              
      </div>
      <div className="card">
        <button onClick={()=>handleConnectURLBack()}>redirect from backend</button>              
      </div>
      <p className="read-the-docs">
        other context
      </p>
    </>
  )
}

export default App
