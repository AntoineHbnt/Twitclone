import axios from "axios";

export const GET_TWEETS = "GET_TWEETS";

export const getTweets = (uid) => {
  return (dispatch) => {
    return axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}api/tweet/`,
      withCredentials: true,
    }).then((res) => {
        dispatch({type: GET_TWEETS, payload: res.data});
    }).catch((err) => console.log(err));
  };
};
