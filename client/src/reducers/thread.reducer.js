import { GET_THREAD } from "../actions/thread.actions";

const initialState = {};

export default function threadReducer(state = initialState, action) {
  switch (action.type) {

    case GET_THREAD:
      return action.payload;

    default:
      return state;
  }
}
