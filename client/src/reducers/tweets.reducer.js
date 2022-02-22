import { GET_TWEETS } from "../actions/tweets.actions";

const initialState = {};

export default function tweetsReducer(state = initialState, action) {
  switch (action.type) {

    case GET_TWEETS:
      return action.payload;

    default:
      return state;
  }
}
