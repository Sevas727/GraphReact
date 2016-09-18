import {combineReducers} from 'redux';
import items from './itemsReducer';
import coord from './graphicsReducer';

const rootReducer = combineReducers({
  items,
  coord
});

export default rootReducer;
