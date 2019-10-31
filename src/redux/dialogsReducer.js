const UPDATE_NEW_MESSAGE_TEXT_AREA = 'UPDATE-NEW-MESSAGE-TEXT-AREA'
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE'

const initialState = {
  dialogs: [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrew'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Viktor'},
    {id: 6, name: 'Valera'},
  ],
  messages: [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your it-kamasutra?'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'},
    {id: 6, message: 'How is your it-kamasutra?'},
  ],
  newMessageText: "",
}

const dialogsReducer = (state = initialState, action) => {

  switch(action.type){

    case UPDATE_NEW_MESSAGE_TEXT_AREA:
      return {
        ...state, 
        newMessageText: action.currentNewMessageText
      }

    case ADD_NEW_MESSAGE:
      return {
        ...state, 
        messages: [
          ...state.messages, 
          {
            id: 7, 
            message: state.newMessageText
          }
        ],
        newMessageText: ""
      }

    default:
      return state
  }
}

export const updateNewMesssageTextAreaCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT_AREA,
  currentNewMessageText: text
})
export const addNewMessageCreator = () => ({type: ADD_NEW_MESSAGE})


export default dialogsReducer