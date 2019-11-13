import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import NewMessageForm from './NewMessageForm/NewMessageForm'

const Dialogs = ({ dialogsPage: { dialogs, messages }, addNewMessage }) => {

  return <div className={s.dialogs}>

    <div className={s.dialogsItems}>
      {dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id} />)}
    </div>

    <div className={s.messages}>
      {messages.map(m => <Message message={m.message} key={m.id} />)}
    </div>

    <NewMessageForm onSubmit={({ newMessageText }) => addNewMessage(newMessageText)} />

  </div>
}

export default Dialogs