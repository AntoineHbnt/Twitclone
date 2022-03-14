import { FAV_TWEET, GET_THREAD, UNFAV_TWEET } from "../actions/thread.actions";

const initialState = {};

export default function threadReducer(state = initialState, action) {
  switch (action.type) {
    case GET_THREAD:
      return action.payload;

    case FAV_TWEET:
      console.log("fav");
      return state.map((tweet) => {
        if (tweet._id == action.payload.tweetId && !tweet.favs.includes(action.payload.uid)
        ) {
          return { ...tweet, favs: [action.payload.uid, ...tweet.favs] };
        } else {
          return tweet;
        }
      });

    case UNFAV_TWEET:
      console.log("unfav");
      return state.map((tweet) => {
        if (tweet._id == action.payload.tweetId) {
          return {
            ...tweet,
            favs: tweet.favs.filter((fav) => {
              return fav != action.payload.uid;
            }),
          };
        } else {
          return tweet;
        }
      });

    default:
      return state;
  }
}
