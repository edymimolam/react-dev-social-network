import { getAuth } from './authReducer'

const INITIALIZING_COMPLETE = 'app/INITIALIZING_COMPLETE'

const initialState = { isInitialized: false }

const appReducer = (state = initialState, action) => {

  switch (action.type) {

    case INITIALIZING_COMPLETE:
      return {
        ...state,
        isInitialized: true
      }

    default:
      return state
  }
}

const initComplete = () => ({ type: INITIALIZING_COMPLETE })

export const initialization = () => async (dispatch) => {
  await dispatch(getAuth())
  dispatch(initComplete())
}


export default appReducer