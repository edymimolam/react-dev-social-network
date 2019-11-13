import React from 'react'
import style from './Users.module.css'
import Pagination from '../common/Pagination/Pagination'
import User from './User'

const Users = ({ users, usersTotalCount, usersPerPage, currentPage,
  onPageClick, onUnfollowUserClick, onFollowUserClick }) => {

  return (
    <div className={style.usersContainer}>
      <Pagination
        usersTotalCount={usersTotalCount} usersPerPage={usersPerPage}
        currentPage={currentPage} onPageClick={onPageClick}
      />
      {users.map(
        u => <User key={u.id} user={u} follow={onFollowUserClick} unfollow={onUnfollowUserClick} />
      )}
    </div>
  )
}

export default Users