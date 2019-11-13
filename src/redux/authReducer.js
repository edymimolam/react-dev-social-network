import { authAPI } from '../API/API'
import { stopSubmit } from 'redux-form'

const SET_AUTH_DATA = 'auth/SET_AUTH_DATA'

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuthorized: false
}

const authReducer = (state = initialState, action) => {

  switch (action.type) {

    case SET_AUTH_DATA:
      return {
        ...state,
        ...action.payload
      }

    default:
      return state
  }
}

export const setAuthData = (id, email, login, isAuthorized) => ({ type: SET_AUTH_DATA, payload: { id, email, login, isAuthorized } })

export const getAuth = () => async (dispatch) => {
  let data = await authAPI.me()
  let { id, email, login } = data.data
  if (data.resultCode === 0) dispatch(setAuthData(id, email, login, true))
  return data
}

export const login = (email, password, rememberMe) => async (dispatch) => {
  let data = await authAPI.login(email, password, rememberMe)
  if (data.resultCode === 0) {
    dispatch(getAuth())
  } else {
    let message = (data.messages.length > 0) ? data.messages[0] : 'Server error'
    dispatch(stopSubmit('login', { _error: message }))
  }
}

export const logout = () => async (dispatch) => {
  let data = await authAPI.logout()
  if (data.resultCode === 0) dispatch(setAuthData(null, null, null, false))
}

export default authReducer