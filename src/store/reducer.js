import { combineReducers } from 'redux-immutable';
import { reducer as heaerReducer } from '../commont/header/store';
import { reducer as homeReducer } from '../pages/home/store';

const reducer = combineReducers({
  header: heaerReducer,
  home: homeReducer
});

export default reducer;
