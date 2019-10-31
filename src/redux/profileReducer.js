import {togglePreloader} from './preloaderReducer'
import {profileAPI} from '../API/API'

const UPDATE_NEW_POST_TEXT_AREA = 'UPDATE-NEW-POST-TEXT-AREA'
const ADD_NEW_POST = 'ADD-NEW-POST'
const SET_PROFILE_INFO = 'SET_PROFILE_INFO'

const initilaState = {
  profileInfo: null,
  posts: [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: 'It\'s my first post', likesCount: 11},
    {id: 3, message: 'Blabla', likesCount: 11},
    {id: 4, message: 'Dada', likesCount: 11}
  ],
  newPostText: "",
}

const profileReducer = (state = initilaState, action) => {

  switch(action.type){

  case UPDATE_NEW_POST_TEXT_AREA:
    return {
      ...state,
      newPostText: action.currentNewPostText
    }

  case ADD_NEW_POST:
    let newPost = {id: 5, message: state.newPostText, likesCount: 0}
    return {
      ...state,
      posts: [
        ...state.posts,
        newPost
      ],
      newPostText: ""
    }

    case SET_PROFILE_INFO:
      return {
        ...state,
        profileInfo: action.profileInfo
      }

  default: 
    return state
  }
}

export const updateNewPostTextAreaCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT_AREA,
  currentNewPostText: text
})
export const addNewPostCreator = () => ({type: ADD_NEW_POST})
export const setProfileInfo = (profileInfo) => ({type: SET_PROFILE_INFO, profileInfo})


export const getProfileInfo = (userId = 2) => (dispatch) => {
  dispatch(togglePreloader(true))
  profileAPI.getProfileInfo(userId).then( data => {
    dispatch(setProfileInfo(data))
    dispatch(togglePreloader(false))
  })
}

export default profileReducer