import profileReducer, { addNewPost, deletePost } from './profileReducer'


const state  = {
  profileInfo: null,
  posts: [
    { id: 1, message: 'Hi, how are you?', likesCount: 12 },
    { id: 2, message: 'It\'s my first post', likesCount: 11 },
    { id: 3, message: 'Blabla', likesCount: 11 },
    { id: 4, message: 'Dada', likesCount: 11 }
  ],
}


// let newState = profileReducer(initialState, addNewPost('Hi man'))


// it('adds new post', () => {
//   expect(newState.posts.length).toBe(5)
// })

// it('sets new post likesCount to 0', () => {
//   expect(newState.posts[4].likesCount).toBe(0)
// })

// it('sets correct message to new post', () => {
//   expect(newState.posts[4].message).toBe('Hi man')
// }) 



it('decrement posts array length', () => {
  profileReducer(state, deletePost(3)) 
  expect(state.posts.length).toBe(3)
})