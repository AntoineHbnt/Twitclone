import axios from "axios";

export const GET_THREAD = "GET_THREAD";
export const FAV_TWEET = "FAV_TWEET";
export const UNFAV_TWEET = "UNFAV_TWEET";
export const RETWEET_TWEET = "RETWEET_TWEET";
export const UNRETWEET_TWEET = "UNRETWEET_TWEET";

export const getThread = (uid, type) => {
  return (dispatch) => {
    return axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}api/tweet/thread/${uid}/${type}`,
      withCredentials: true,
    }).then((res) => {
        dispatch({type: GET_THREAD, payload: res.data});
    }).catch((err) => console.log(err));
  };
};

export const favTweet = (uid, tweetId) => {
  return (dispatch) => {
    return axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_URL}api/tweet/fav/${tweetId}`,
      data: {
        "uid": uid
      }
    }).then((res) => {
      dispatch({type: FAV_TWEET, payload: {tweetId, uid}});
    })
  }
}

export const unfavTweet = (uid, tweetId) => {
  return (dispatch) => {
    return axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_URL}api/tweet/unfav/${tweetId}`,
      data: {
        "uid": uid
      }
    }).then((res) => {
      dispatch({type: UNFAV_TWEET, payload: {tweetId, uid}})
    })
  }
}

export const retweet = (uid, tweetId) => {
  return (dispatch) => {
    return axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_URL}api/tweet/retweet/${tweetId}`,
      data: {
        "uid": uid
      }
    }).then(() => {
      dispatch({type: RETWEET_TWEET, payload: {tweetId, uid}})
    })
  }
}

export const unRetweet = (uid, tweetId) => {
  return (dispatch) => {
    return axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_URL}api/tweet/unretweet/${tweetId}`,
      data: {
        "uid": uid
      }
    }).then(() => {
      dispatch({type: UNRETWEET_TWEET, payload: {tweetId, uid}})
    })
  }
}