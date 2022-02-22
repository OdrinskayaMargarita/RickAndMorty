import {combineReducers} from 'redux';
import { CharactersReducer } from "./CharactersReducer"

export const rootReducer = combineReducers({ CharactersReducer })