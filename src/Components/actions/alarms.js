// import { ADD_ALARM, DELETE_ALARM } from "./index.js"

 
export const ADD_ALARM = ((time) => {
  return{
    type: 'ADD_ALARM',
    payload: time
  }
})

export const DELETE_ALARM = ((time) => {
  return{
    type: 'DELETE_ALARM',
    payload: time
  }
})

 