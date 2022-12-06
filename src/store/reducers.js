import { combineReducers } from 'redux'
import about from './slices/about';
import organisation from './slices/organisation';
import loader from './slices/loader';

export const rootReducer = combineReducers({
    about,
    organisation,
    loader,
})