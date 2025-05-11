import './App.css'
import {getCompareResult} from './service/compareResult'
import {flow} from 'fp-ts/lib/function'
import * as E from 'fp-ts/Either'
import { useState } from 'react'

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
  return (
    <>
      <h1>PDM compare GUI</h1>
      <div className="card">
        <input onChange={(e)=> setprodId(e.target.value)} placeholder='product ID'/>
        <button onClick={()=>handleGetCompareResult(prodId)}>submit</button>      </div>
      <p className="read-the-docs">
        other context
      </p>
    </>
  )
}

export default App
