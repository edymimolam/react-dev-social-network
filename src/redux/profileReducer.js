import { togglePreloader } from './preloaderReducer'
import { profileAPI } from '../API/API'
import { stopSubmit } from 'redux-form'

const ADD_NEW_POST = 'profile/ADD-NEW-POST'
const DELETE_POST = 'profile/DELETE_POST'
const SET_PROFILE_INFO = 'profile/SET_PROFILE_INFO'
const SET_PROFILE_STATUS = 'profile/SET_PROFILE_STATUS'
const UPLOAD_PROFILE_PHOTO_SUCCESS = 'profile/UPLOAD_PROFILE_PHOTO_SUCCESS'
const UPDATE_PROFILE_INFO_SUCCESS = 'profile/UPDATE_PROFILE_INFO_SUCCESS'


const initialState = {
  profileInfo: null,
  updateProfileInfoSuccess: true,
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
        posts: state.posts.filter(p => p.id !== action.id)
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

    case UPLOAD_PROFILE_PHOTO_SUCCESS:
      return {
        ...state,
        profileInfo: { ...state.profileInfo, photos: action.photos }
      }

    case UPDATE_PROFILE_INFO_SUCCESS:
      return {
        ...state,
        updateProfileInfoSuccess: action.payload
      }

    default:
      return state
  }
}

export const addNewPost = (newPost) => ({ type: ADD_NEW_POST, newPost })
export const deletePost = (id) => ({ type: DELETE_POST, id })
const setProfileInfo = (profileInfo) => ({ type: SET_PROFILE_INFO, profileInfo })
const setProfileStatus = (profileStatus) => ({ type: SET_PROFILE_STATUS, profileStatus })
const uploadProfilePhotoSuccess = (photos) => ({ type: UPLOAD_PROFILE_PHOTO_SUCCESS, photos })
const updateProfileInfoSuccess = (payload) => ({type: UPDATE_PROFILE_INFO_SUCCESS, payload})

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

export const setProfilePhoto = (img) => async (dispatch) => {
  dispatch(togglePreloader(true))
  let data = await profileAPI.uploadProfilePhoto(img)
  if (data.resultCode === 0) dispatch(uploadProfilePhotoSuccess(data.data.photos))
  dispatch(togglePreloader(false))
}

export const submitProfileInfo = (values) => (dispatch) => {
  dispatch(togglePreloader(true))
  profileAPI.updateProfileInfo(values).then(data => {
    if (data.resultCode === 0) {
      dispatch(updateProfileInfoSuccess(true))
      dispatch(getProfileInfo(values.userId))
    } else {
      dispatch(updateProfileInfoSuccess(false))
      let message = (data.messages.length > 0) ? data.messages[0] : 'Server error'
      dispatch(stopSubmit('profile-info', { _error: message }))
    }
    dispatch(togglePreloader(false))
  }

  )

}

export default profileReducer