import {SET_DATA} from '../actions/index'
export default function setData(state = [], action) {
  switch (action.type) {
  case SET_DATA:
    return state=[...action.payload]
  default:
    return state
  }
}
