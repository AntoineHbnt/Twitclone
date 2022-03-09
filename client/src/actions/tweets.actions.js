import axios from "axios";

//tweet
export const GET_TWEETS = "GET_TWEETS";

//errors
export const GET_TWEET_ERRORS = "GET_TWEET_ERRORS";

export const getTweets = (uid) => {
  return (dispatch) => {
    return axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}api/tweet/`,
      withCredentials: true,
    })
      .then((res) => {
        dispatch({ type: GET_TWEETS, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const addTweet = (uid, data) => {
  return (dispatch) => {
    return axios({
      method: "post",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      url: `${process.env.REACT_APP_API_URL}api/tweet/${uid}`,
      data: data,
      withCredentials: true,
    }).catch((err) => {
      console.log(err);
    });
  };
};
