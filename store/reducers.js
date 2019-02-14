import { combineReducers } from 'redux';
import { photoSet } from './photoSet/reducers';

const reducer = combineReducers({
  photoSet: photoSet,
});

export default reducer;
