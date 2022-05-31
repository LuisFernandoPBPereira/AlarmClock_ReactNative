import { createStore, combineReducers } from "redux";
import alarmReducer from '../reducers/alarmReducer.js'

const rootReducer = combineReducers({
  alarms: alarmReducer
})

const configureStore = (() => {
  return createStore(rootReducer)
}) 

export default configureStore