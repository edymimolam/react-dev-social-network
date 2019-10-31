import {authAPI} from '../API/API'

const SET_AUTH_DATA = 'SET_AUTH_DATA'

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuthorized: false
}

const  authReducer = (state = initialState, action) => {

  switch(action.type){

    case SET_AUTH_DATA: 
      return {
        ...state,
        ...action.data,
        isAuthorized: true
      }

    default:
      return state
  }
}

export const setAuthData = (id, email, login) => ({type: SET_AUTH_DATA, data: {id, email, login}})

export const getAuth = () => (dispatch) => {
  authAPI.me().then(data => {
    let {id, email, login} = data.data
    if(data.resultCode === 0) dispatch(setAuthData(id, email, login))
  })
}

export default authReducer