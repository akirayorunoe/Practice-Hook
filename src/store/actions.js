import {ADD_JOB,SET_JOB} from './constants'

export const addJob=(payload)=>({
    type:ADD_JOB,
    payload
});
export const setJob=(payload)=>({
    type:SET_JOB,
    payload
});
