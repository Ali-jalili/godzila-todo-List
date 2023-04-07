import { legacy_createStore } from "redux";

import { composeWithDevTools } from "redux-devtools-extension"

import reducer from './reduser'


const store = legacy_createStore(reducer, composeWithDevTools())


export default store;
