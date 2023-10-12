import { combineReducers } from 'redux';
import listReducer from './listReducer';
import { TList } from '../actions/ListAction';

export interface IInitialState {
	listReducer?: TList | undefined
}

const rootReducer = combineReducers({
	// Here comes the reducers
	listReducer
});

export default rootReducer;
