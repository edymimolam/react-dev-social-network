import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {

    let postsElements =
        props.profilePage.posts.map( p => <Post key={p.id}  message={p.message} likesCount={p.likesCount}/> )

    let onButtonClick = () => props.onButtonClick()
    let onTextAreaChange = (e) => props.onTextAreaChange(e.target.value)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onTextAreaChange}  value={props.profilePage.newPostText}/>
                </div>
                <div>
                    <button onClick={onButtonClick}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts