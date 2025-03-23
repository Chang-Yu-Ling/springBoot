/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
import './App.css'
import {getCompareResult, getRedirect} from './service/compareResult'
import {flow} from 'fp-ts/lib/function'
import * as E from 'fp-ts/Either'
import { useState } from 'react'
// import {config} from '../public/config.json'

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

  // get enum fom json
  // reference read json: https://www.geeksforgeeks.org/read-json-file-using-javascript/
  // reference enum: https://ithelp.ithome.com.tw/articles/10221546
  // https://stackoverflow.com/questions/39589315/typescript-enum-stored-in-json/39590132#39590132
  type DynamicEnum=Record<string,string>
  const jsoninput={"valid":["f1","f3"],"url":"8080"}
  function createEnum(json:{valid:string[]}):DynamicEnum{
    // eslint-disable-next-line prefer-const
    let dE:DynamicEnum={}
    json.valid.forEach(value=>{
      dE[value]=value
    })
    return dE
  }
  let validTrgetFab_data
  function fetchJSONData() {
    fetch('../public/config.json')
        .then((res) => {
            if (!res.ok) {
                throw new Error
                    (`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .then((data) =>{
          let validTrgetFab=createEnum(jsoninput)
              console.log(validTrgetFab)
              validTrgetFab_data=createEnum(data)
                  console.log(validTrgetFab_data)
            })
        .catch((error) =>
            console.error("Unable to fetch data:", error));
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
      <div className="card">
        <button onClick={()=>fetchJSONData()}>fetchJSONData</button>              
      </div>
      <p className="read-the-docs">
        other context
      </p>
    </>
  )
}

export default App
