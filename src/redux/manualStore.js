import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
  _state: {
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Dimych" },
        { id: 2, name: "Andrew" },
        { id: 3, name: "Sveta" },
        { id: 4, name: "Sasha" },
        { id: 5, name: "Viktor" },
        { id: 6, name: "Valera" }
      ],
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How is your it-kamasutra?" },
        { id: 3, message: "Yo" },
        { id: 4, message: "Yo" },
        { id: 5, message: "Yo" },
        { id: 6, message: "How is your it-kamasutra?" }
      ],
      newMessageText: ""
    },
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 12 },
        { id: 2, message: "It's my first post", likesCount: 11 },
        { id: 3, message: "Blabla", likesCount: 11 },
        { id: 4, message: "Dada", likesCount: 11 }
      ],
      newPostText: ""
    },
    sidebar: {
      friends: [
        {
          imgSrc:
            "https://pbs.twimg.com/profile_images/2961744297/163acffba0bb34c5e9c2b5a7e3dfdbdd.jpeg",
          name: "Ashton"
        },
        {
          imgSrc:
            "https://i.guim.co.uk/img/static/sys-images/Film/Pix/pictures/2007/11/21/wristcutters_sq.jpg?width=300&quality=85&auto=format&fit=max&s=57a595e431a97a203fad29fe2ccfd453",
          name: "Shannyn"
        },
        {
          imgSrc:
            "https://www.stylist.co.uk/images/app/uploads/2017/11/29085005/johnny-depp-crop-1511945435-1090x1090.jpg?w=256&h=256&fit=max&auto=format%2Ccompress",
          name: "Johny"
        },
        {
          imgSrc:
            "https://www.stylist.co.uk/images/app/uploads/2019/08/27124508/resized-lucy-4-256x256.jpg?w=256&h=256&fit=max&auto=format%2Ccompress",
          name: "Natalie"
        }
      ]
    }
  },
  _callSubscriber() {
    console.log("there is no subscribers");
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  getState() {
    return this._state;
  },
  dispatch(action) {
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  }
};

export default store;
