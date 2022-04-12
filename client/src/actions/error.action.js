
export const ADD_TWEET_ERRORS = "ADD_TWEET_ERRORS";

export const addTweetError = (error) => {
    return {type: ADD_TWEET_ERRORS, payload: error}
}