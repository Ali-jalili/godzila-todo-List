import { combineReducers } from "redux"

import membersSlice from './membersSlice'

const rootReducer = combineReducers({
    members: membersSlice,
})

export default rootReducer;