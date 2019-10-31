import {usersAPI, followAPI} from '../API/API'
import {togglePreloader} from './preloaderReducer'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_STATE = 'SET_STATE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'

const initialState = {
  users: [],
  usersTotalCount: 0,
  usersPerPage: 20,
  currentPage: 1,
}

const usersReducer = (state = initialState, action) => {

  switch(action.type) {

    case FOLLOW:
      return {
        ...state, 
        users: state.users.map((u) => {
          if(u.id === action.id) u.followed = true 
          return u
        })
      }

    case UNFOLLOW: 
      return {
        ...state,
        users: state.users.map((user) =>{
          if(user.id === action.id) user.followed = false
          return user
        })
      }

    case SET_STATE: 
    return {
      ...state,
      users: action.users
    }

    case SET_TOTAL_COUNT:
      return {
        ...state,
        usersTotalCount: action.count
      }

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.pageNum
      }

    default:
      return state
  }

}

export const followUser = (id) => ({type: FOLLOW, id: id})
export const unfollowUser = (id) => ({type: UNFOLLOW, id: id})
export const setUsersState = (users) => ({type: SET_STATE, users: users})
export const setUsersTotalCount = (count) => ({type: SET_TOTAL_COUNT, count: count})
export const setUsersCurrentPage = (pageNum) => ({type: SET_CURRENT_PAGE, pageNum: pageNum})

export const getUsers = (
  currentPage = initialState.currentPage, 
  usersPerPage = initialState.usersPerPage
) => (dispatch) => {
    dispatch(setUsersCurrentPage(currentPage))
    dispatch(togglePreloader(true))
    usersAPI.getUsers(currentPage, usersPerPage).then((data) => {
      dispatch(togglePreloader(false))
      dispatch(setUsersState(data.items))
      dispatch(setUsersTotalCount(data.totalCount))
    })
}

export const follow = (id) => (dispatch) => {
  dispatch(togglePreloader(true))
  followAPI.follow(id).then(data => { 
    if (data.resultCode === 0) dispatch(followUser(id))
    dispatch(togglePreloader(false))
  })
}

export const unfollow = (id) => (dispatch) => {
  dispatch(togglePreloader(true))
  followAPI.unfollow(id).then(data => {
    if (data.resultCode === 0) dispatch(unfollowUser(id))
    dispatch(togglePreloader(false))
  })
}

export default usersReducer