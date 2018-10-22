import { combineReducers } from 'redux';
import Data from './product_reducer';

const rootReducer = combineReducers({
  data:Data
});

export default rootReducer;
