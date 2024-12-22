import axios from 'axios'
import {pipe} from 'fp-ts/lib/function'
import * as TE from 'fp-ts/lib/TaskEither'


export const getCompareResult=(prodId:string):TE.TaskEither<Error,string>=>
pipe(
    TE.tryCatch(
        ()=>
        axios.get(`/api/v1/compare?prodId=${prodId}`).then((response)=>{
            return response.data.CompareResult
        }),
        (error)=>new Error(`Failed to get w: ${error}`)
    )
)
export const getRedirect=():TE.TaskEither<Error,string>=>
pipe(
    TE.tryCatch(
        ()=>
        axios.get(`/api/v1/redirect`).then((response)=>{
            return response.data
        }),
        (error)=>new Error(`Failed to get w: ${error}`)
    )
)