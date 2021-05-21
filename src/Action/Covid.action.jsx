// import axios from 'axios'
// import {Covidconst} from './Covid.const'
// export const Covidaction=()=>{
//     return async (dispatch)=>{
//         dispatch({type:`${Covidconst.Covid_Data}_REQUEST`})
//         axios.get("https://api.covid19india.org/data.json").then((res)=>{
//             dispatch({type:`${Covid_Data.Covidconst}_SUCCESS,payload:{messag:"Sucess}`})
//             message="Success"
//             console.log(message);
//         }).catch((res)=>{
//             dispatch({type:`${Covid_Data.Covidconst}_FAILURE,payload:{error:"Error"}`})
//             error="Error"
//         })
//     }
// }