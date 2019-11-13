import React from 'react'
import { Field, reduxForm } from 'redux-form'

const NewMessageForm = props => {
  const {handleSubmit} = props
  return <form onSubmit={handleSubmit} >

    <Field name='newMessageText'component='textarea'/>
    
    <button type='submit'>Push me</button>

  </form>
}

export default reduxForm({form: 'newMessage'})(NewMessageForm)