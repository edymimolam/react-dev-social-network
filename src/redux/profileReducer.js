import { togglePreloader } from './preloaderReducer'
import { profileAPI } from '../API/API' 

const ADD_NEW_POST = 'profile/ADD-NEW-POST'
const DELETE_POST = 'profile/DELETE_POST'
const SET_PROFILE_INFO = 'profile/SET_PROFILE_INFO'
const SET_PROFILE_STATUS = 'profile/SET_PROFILE_STATUS'


const initialState = {
  profileInfo: null,
  posts: [
    { id: 1, message: 'Hi, how are you?', likesCount: 12 },
    { id: 2, message: 'It\'s my first post', likesCount: 11 },
    { id: 3, message: 'Blabla', likesCount: 11 },
    { id: 4, message: 'Dada', likesCount: 11 }
  ],
  profileStatus: "",
}

const profileReducer = (state = initialState, action) => {

  switch (action.type) {

    case ADD_NEW_POST:
      let newPost = { id: 5, message: action.newPost, likesCount: 0 }
      return {
        ...state,
        posts: [
          ...state.posts,
          newPost
        ]
      }

    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(p => p.id != action.id )
      }

    case SET_PROFILE_INFO:
      return {
        ...state,
        profileInfo: action.profileInfo
      }

    case SET_PROFILE_STATUS:
      return {
        ...state,
        profileStatus: action.profileStatus
      }

    default:
      return state
  }
}

export const addNewPost = (newPost) => ({ type: ADD_NEW_POST, newPost })
export const deletePost = (id) => ({ type: DELETE_POST, id })
export const setProfileInfo = (profileInfo) => ({ type: SET_PROFILE_INFO, profileInfo })
export const setProfileStatus = (profileStatus) => ({ type: SET_PROFILE_STATUS, profileStatus })


export const getProfileInfo = (userId) => async (dispatch) => {
  dispatch(togglePreloader(true))
  let data = await profileAPI.getProfileInfo(userId)
  dispatch(setProfileInfo(data))
  dispatch(togglePreloader(false))
}

export const getProfileStatus = (userId) => async (dispatch) => {
  let data = await profileAPI.getProfileStatus(userId)
  dispatch(setProfileStatus(data))
}

export const updateProfileStatus = (status) => async (dispatch) => {
  let data = await profileAPI.updateProfileStatus(status)
  if (data.resultCode === 0) dispatch(setProfileStatus(status))
}

export default profileReducer