import {
  FAV_TWEET,
  GET_THREAD,
  RETWEET_TWEET,
  UNFAV_TWEET,
  UNRETWEET_TWEET,
} from "../actions/thread.actions";

const initialState = { userFavs: [], userRetweets: [], timeline: [] };

export default function threadReducer(state = initialState, action) {
  switch (action.type) {
    case GET_THREAD:
      return action.payload;

    case FAV_TWEET:
      return {
        ...state,
        userFavs: [...state.userFavs, action.payload.tweetId],
        timeline: state.timeline.map((e) => {
          const tweet = e.tweet;
          if (
            tweet._id === action.payload.tweetId &&
            !tweet.favs.includes(action.payload.uid)
          ) {
            return {
              ...e,
              tweet: { ...tweet, favs: [action.payload.uid, ...tweet.favs] },
            };
          } else {
            return e;
          }
        }),
      };

    case UNFAV_TWEET:
      return {
        ...state,
        userFavs: state.userFavs.filter((fav) => fav !== action.payload.tweetId),
        timeline: state.timeline.map((e) => {
          const tweet = e.tweet;
          if (tweet._id === action.payload.tweetId) {
            return {
              ...e,
              tweet: {
                ...tweet,
                favs: tweet.favs.filter((fav) => {
                  return fav !== action.payload.uid;
                }),
              },
            };
          } else {
            return e;
          }
        }),
      };

    case RETWEET_TWEET:
      return {
        ...state,
        userRetweets: [...state.userRetweets, action.payload.tweetId],
        timeline: state.timeline.map((e) => {
          const tweet = e.tweet;
          if (
            tweet._id === action.payload.tweetId &&
            !tweet.retweets.includes(action.payload.uid)
          ) {
            return {
              ...e,
              tweet: {
                ...tweet,
                retweets: [action.payload.uid, ...tweet.retweets],
              },
            };
          } else {
            return e;
          }
        }),
      };

    case UNRETWEET_TWEET:
      return {
        ...state,
        userRetweets: state.userRetweets.filter(
          (retweet) => retweet !== action.payload.tweetId
        ),
        timeline: state.timeline.map((e) => {
          const tweet = e.tweet;
          if (tweet._id === action.payload.tweetId) {
            return {
              ...e,
              tweet: {
                ...tweet,
                retweets: tweet.retweets.filter((retweet) => {
                  return retweet !== action.payload.uid
                }),
              },
            };
          } else {
            return e;
          }
        }),
      };

    default:
      return state;
  }
}
