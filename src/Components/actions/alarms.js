// import { ADD_ALARM, DELETE_ALARM } from "./index.js"

 
const ADD_ALARM = ((time) => {
  return{
    type: 'ADD_ALARM',
    payload: time
  }
})

const DELETE_ALARM = ((time) => {
  return{
    type: 'DELETE_ALARM',
    payload: time
  }
})

export default (DELETE_ALARM, ADD_ALARM) 