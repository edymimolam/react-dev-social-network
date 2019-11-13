import React from 'react'
import style from './Users.module.css'
import userIcon from '../../assets/img/user-icon.png'
import { NavLink } from 'react-router-dom'

const User = ({ user, follow, unfollow }) => {
  return <div className={style.user}>
    <div>
      <NavLink to={`/profile/${user.id}`}>
        <img src={user.photos.small ? user.photos.small : userIcon} alt="" className={style.userImg} />
      </NavLink>
      {user.followed
        ? <button className={style.followBtn} onClick={() => unfollow(user.id)}>Unfollow</button>
        : <button className={style.followBtn} onClick={() => follow(user.id)}>Follow</button>
      }
    </div>

    <div className={style.info}>
      <h2 className={style.title}>{user.name}</h2>
      <p className={style.status}>{user.status}</p>
      <div className={style.location}>
        <span className={style.city}>{"user.location.city"}</span>
        <span className={style.country}>{"user.location.country"}</span>
      </div>
    </div>
  </div>
}

export default User