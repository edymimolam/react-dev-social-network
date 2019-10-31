const TOGGLE_PRELOADER = 'TOGGLE_PRELOADER'

let initialState = {
  isFetching: true
}

const preloaderReducer = (state = initialState, action) => {

  switch(action.type) {

    case TOGGLE_PRELOADER:
      return {
        ...state,
        isFetching: action.isFetching
      }

    default:
      return state
  }
}

export const togglePreloader = (isFetching) => ({type: TOGGLE_PRELOADER, isFetching})

export default preloaderReducer