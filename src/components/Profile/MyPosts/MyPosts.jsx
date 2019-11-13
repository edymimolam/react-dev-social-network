import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import NewPostForm from './NewPostForm/NewPostForm'

const MyPosts = React.memo(({ posts, addNewPost }) => {

  return <div className={s.postsBlock}>
    <h3>My posts</h3>

    <NewPostForm onSubmit={({ newPostText }) => addNewPost(newPostText)} />

    <div className={s.posts}>
      {posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />)}
    </div>
  </div>

})


export default MyPosts