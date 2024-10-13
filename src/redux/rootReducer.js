import { combineReducers } from 'redux';
import noteReducer from './notes/noteReducer';

const rootReducer = combineReducers({
    notes: noteReducer,
});

export default rootReducer;
