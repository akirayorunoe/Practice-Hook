import {ADD_JOB,SET_JOB} from './constants';

export const initState={
    jobs:[],
    job:''
}

export const reducer=(state,action)=>{
    console.log(action,'action')
    switch(action.type){        
        case ADD_JOB:
        return {...state,jobs:[...state.jobs,action.payload]}
        case SET_JOB:
        return {...state,job:action.payload}
        default:
        return new Error('Invalid action')
    }
    
}