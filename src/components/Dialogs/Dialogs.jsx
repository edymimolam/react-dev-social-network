import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

  let dialogsElements =  props.dialogsPage.dialogs.map( d => <DialogItem name={d.name} key={d.id}/> )
  let messagesElements = props.dialogsPage.messages.map( m => <Message message={m.message} key={m.id} /> )

  let onTextAreaChange = (e) => props.onTextAreaChange(e.target.value)
  let onButtonClick = () => props.onButtonClick()

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        { dialogsElements }
      </div>
      <div className={s.messages}>
        { messagesElements }
        <div>
          <textarea cols="30" rows="3" onChange={onTextAreaChange} value={props.dialogsPage.newMessageText}/>
          <div>
            <button onClick={onButtonClick}>Push me</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs