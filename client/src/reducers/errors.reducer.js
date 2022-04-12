import { ADD_TWEET_ERRORS } from "../actions/error.action";

const initialState = {tweetError: ""};

export default function errorsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TWEET_ERRORS:
      return {
          tweetError:action.payload
      };

    default:
      return state;
  }
}
