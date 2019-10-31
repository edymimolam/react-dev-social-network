import React from 'react'
import style from './Users.module.css'
import userIcon from '../../assets/img/user-icon.png'
import {NavLink} from 'react-router-dom'




const Users = (props) => {

  let pagesAmount = () => {
    let pagesTotalCount = Math.ceil(props.usersTotalCount / props.usersPerPage)
    let pages = []
    for ( let i = 1; i <= pagesTotalCount; i++){
      pages.push(i)
    }
    return pages
  }

  return (
    <div className={style.usersContainer}> 
      <div className={style.paginationContainer}>
        {
          pagesAmount().map(p => 
            <span 
              key={p}
              className={`${style.page} ${props.currentPage === p ? style.pageActive : ''}`} 
              onClick={(e) => props.onPageClick(p)}
            >
              {p}
            </span>
          )
        }
      </div>
      { 
        props.users.map( u => 
          <div key={u.id} className={style.user}>

            <div>
              <NavLink to={`/profile/${u.id}`}>
                <img src={u.photos.small ? u.photos.small : userIcon} alt="" className={style.userImg}/>
              </NavLink>
              { u.followed ? 
                <button className={style.followBtn} onClick={() => props.onUnfollowUserClick(u.id)}>Unfollow</button>  : 
                <button className={style.followBtn} onClick={() => props.onFollowUserClick(u.id)  }>Follow</button>  
              }
            </div>

            <div className={style.info}>
              <h2 className={style.title}>{u.name}</h2>
              <p className={style.status}>{u.status}</p>
              <div className={style.location}>
                <span className={style.city}>{"u.location.city"}</span>
                <span className={style.country}>{"u.location.country"}</span>
              </div>
            </div>

          </div> 
        )
      }
    </div>
  )
}

export default Users