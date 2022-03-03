export const UPDATE_MESSAGE = "UPDATE_MESSAGE"
export const UPDATE_MEDIA = "UPDATE_MEDIA"
export const UPDATE_AUDIENCE = "UPDATE_AUDIENCE"
export const UPDATE_SHOW_AUDIENCE_MODAL = "UPDATE_SHOW_AUDIENCE_MODAL"

export const updateMessage = (message) => {
    return {type: UPDATE_MESSAGE, payload: message}
}

export const updateMedia = (media) => {
    return {type: UPDATE_MEDIA, payload: media}
}

export const updateAudience = (audience) => {
    return {type: UPDATE_AUDIENCE, payload: audience}
}

export const updateShowAudienceModal = (bool) => {
    return{type: UPDATE_SHOW_AUDIENCE_MODAL, payload: bool}
}