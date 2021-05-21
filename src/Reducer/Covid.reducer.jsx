// import {Covidconst} from '../Action/Covid.const'
// const inistate={
//     Statewise:[],
//     error:null,
//     message:""
// }
// const Covidreducer=(state=inistate,action)=>{
// switch(action.type){
//     case `${Covidconst.Covid_Data}_REQUEST`:
//         return state={
//             ...state
//         }
//         case `${Covidconst.Covid_Data}_SUCCESS`:
//             return state= (state = {
//                 ...state,
        
//                 Statewise: action.payload.categarydata,
//                 Message:action.payload.message
//               });
//         case `${Covidconst.Covid_Data}_FAILURE`:
//         return state={
//             ...state,
//             error:action.payload.error
//         }
//         default:
//         return state;
// }
// }
// export default Covidreducer;