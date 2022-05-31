import { ADD_ALARM, DELETE_ALARM } from "../actions/index.js";
import moment from "moment";

const  initalState = {
  alarms: []
}

const alarmReducer = ((state = initalState, action) => {
  switch(action.type){
    case ADD_ALARM:
      moment.locale()
      console.log('time', state);
      const payload = action.payload
      const time = moment(payload.date.value).format('hh:mmA')
      const date = moment(payload.date.value).format('d/M/YY')

      const alarm = {
        alarmNotifData: payload,
        value: payload.date.value,
        time: time,
        date: date
      }
      return{
        ...state,
        alarms:state.alarms.concat(alarm)
      }
      case DELETE_ALARM:
        return{
          ...state,
          alarms:state.alarms.filter(v =>{
            return v.value !== action.payload
          })
        }
        default:
          return state
  }
})

export default alarmReducer