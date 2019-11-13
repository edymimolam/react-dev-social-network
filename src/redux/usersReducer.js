import { usersAPI, followAPI } from '../API/API'
import { togglePreloader } from './preloaderReducer'
import {updateObjInArray} from '../utils/helpers'

const FOLLOW = 'users/FOLLOW'
const UNFOLLOW = 'users/UNFOLLOW'
const SET_STATE = 'users/SET_STATE'
const SET_TOTAL_COUNT = 'users/SET_TOTAL_COUNT'
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE'

const initialState = {
  users: [],
  usersTotalCount: 0,
  usersPerPage: 20,
  currentPage: 1,
}

const usersReducer = (state = initialState, action) => {

  switch (action.type) {

    case FOLLOW:
      return {
        ...state,
        users: updateObjInArray(state.users, 'id', action.id, {followed: true})
      }

    case UNFOLLOW:
      return {
        ...state,
        users: updateObjInArray(state.users, 'id', action.id, {followed: false})
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

const followUser = (id) => ({ type: FOLLOW, id: id })
const unfollowUser = (id) => ({ type: UNFOLLOW, id: id })
const setUsersState = (users) => ({ type: SET_STATE, users: users })
const setUsersTotalCount = (count) => ({ type: SET_TOTAL_COUNT, count: count })
const setUsersCurrentPage = (pageNum) => ({ type: SET_CURRENT_PAGE, pageNum: pageNum })

export const getUsers = (
  currentPage = initialState.currentPage,
  usersPerPage = initialState.usersPerPage
) => async (dispatch) => {
  dispatch(togglePreloader(true))
  dispatch(setUsersCurrentPage(currentPage))
  let data = await usersAPI.getUsers(currentPage, usersPerPage)
  dispatch(setUsersState(data.items))
  dispatch(setUsersTotalCount(data.totalCount))
  dispatch(togglePreloader(false))
}

const followUnfollowCreator = async (dispatch, id, apiMethod, actionCreator) => {
  dispatch(togglePreloader(true))
  let data = await apiMethod(id)
  if (data.resultCode === 0) dispatch(actionCreator(id))
  dispatch(togglePreloader(false))
}

export const follow = (id) => (dispatch) => 
followUnfollowCreator(dispatch, id, followAPI.follow.bind(followAPI), followUser)

export const unfollow = (id) => (dispatch) => 
followUnfollowCreator(dispatch, id, followAPI.unfollow.bind(followAPI), unfollowUser)


export default usersReducer