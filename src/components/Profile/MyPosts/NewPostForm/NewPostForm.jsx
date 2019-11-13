import React from 'react'
import { Field, reduxForm } from 'redux-form'

const NewPostForm = ({handleSubmit}) => {
  return <form onSubmit={handleSubmit}>
    <Field component='textarea' name='newPostText'/>
    <button type='submit'>Add New Post</button>
  </form>
}

export default reduxForm({ form: 'newPostForm' })(NewPostForm)