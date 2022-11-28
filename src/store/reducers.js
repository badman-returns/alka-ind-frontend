import { combineReducers } from 'redux'
import about from './slices/about'

export const rootReducer = combineReducers({
    about,
})