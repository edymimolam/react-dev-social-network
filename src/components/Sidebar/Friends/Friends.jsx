import React from 'react'
import s from './Friends.module.css'
import Friend from './Friend/Friend'

const Friends = (props) => {


let friendsElements = props.friendsState.map( el => <Friend key={el.id} imgSrc={el.imgSrc} name={el.name}/> )


  return(
    <div className={s.friends}>
      <h2 className={s.title}>Friends</h2>

      <div className={s.container}>
        {friendsElements}
      </div>
    
    </div>
  )
}

export default Friends