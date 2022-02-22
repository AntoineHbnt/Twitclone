import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import tweetsReducer from "./tweets.reducer";
import threadReducer from "./thread.reducer";
import usersReducer from "./users.reducer";


export default combineReducers({
  userReducer,
  threadReducer,
  tweetsReducer,
  usersReducer
});
