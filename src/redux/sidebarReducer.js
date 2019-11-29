const initialState = {
  friends: [
    {
      id: 1,
      imgSrc:
        "https://pbs.twimg.com/profile_images/2961744297/163acffba0bb34c5e9c2b5a7e3dfdbdd.jpeg",
      name: "Ashton"
    },
    {
      id: 2,
      imgSrc:
        "https://i.guim.co.uk/img/static/sys-images/Film/Pix/pictures/2007/11/21/wristcutters_sq.jpg?width=300&quality=85&auto=format&fit=max&s=57a595e431a97a203fad29fe2ccfd453",
      name: "Shannyn"
    },
    {
      id: 3,
      imgSrc:
        "https://www.stylist.co.uk/images/app/uploads/2017/11/29085005/johnny-depp-crop-1511945435-1090x1090.jpg?w=256&h=256&fit=max&auto=format%2Ccompress",
      name: "Johny"
    },
    {
      id: 4,
      imgSrc:
        "https://www.stylist.co.uk/images/app/uploads/2019/08/27124508/resized-lucy-4-256x256.jpg?w=256&h=256&fit=max&auto=format%2Ccompress",
      name: "Natalie"
    }
  ]
};

const sidebarReducer = (state = initialState, action) => {
  return state;
};

export default sidebarReducer;
