import {
  UPDATE_AUDIENCE,
  UPDATE_MEDIA,
  UPDATE_MESSAGE,
  UPDATE_SHOW_AUDIENCE_MODAL,
} from "../actions/tweetInput.action";

const initialState = {
  message: "",
  audience: "public",
  type: "tweet",
  media: [],
  showAudienceModal: false,
};

export default function tweetInputReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_MESSAGE:
      return {
        ...state,
        message: action.payload,
      };

    case UPDATE_MEDIA:
      return {
        ...state,
        media: action.payload,
      };

    case UPDATE_AUDIENCE:
      return {
        ...state,
        audience: action.payload,
      };

    case UPDATE_SHOW_AUDIENCE_MODAL:
      return {
        ...state,
        showAudienceModal: action.payload,
      };

    default:
      return state;
  }
}
