import axios from "axios";

export const GET_THREAD = "GET_THREAD";

/* export const getTweet = (tweetId) => {
  return (dispatch) => {
    return axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}api/tweet/${tweetId}`,
      withCredentials: true,
    })
      .then((res) => {
        dispatch({ type: GET_TWEET, payload: res.data });
      })
      .catch((err) => console.error(err));
  };
}; */

export const getThread = (uid) => {
  return (dispatch) => {
    return axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}api/tweet/thread/${uid}`,
      withCredentials: true,
    }).then((res) => {
        dispatch({type: GET_THREAD, payload: res.data});
    }).catch((err) => console.log(err));
  };
};
