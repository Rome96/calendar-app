import { combineReducers } from 'redux';
import { uiReducer } from './index';

const rootReducers = combineReducers({
  ui: uiReducer
});

export default rootReducers;