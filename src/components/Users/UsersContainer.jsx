import React from 'react'
import {connect} from 'react-redux'
import Users from './Users'
import Preloader from '../Preloader/Preloader'
import {follow, unfollow, getUsers } from '../../redux/usersReducer'


class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.usersPerPage)
  }

  onPageClick = (pageNum) => this.props.getUsers(pageNum)

  onFollowUserClick = (id) => this.props.follow(id)

  onUnfollowUserClick = (id) => this.props.unfollow(id)

  render() {
    return <> 
      {this.props.isFetching ? <Preloader/> : null}
      <Users  
        users={this.props.users} 
        usersTotalCount={this.props.usersTotalCount} 
        usersPerPage={this.props.usersPerPage} 
        currentPage={this.props.currentPage} 
        onFollowUserClick={this.onFollowUserClick} 
        onUnfollowUserClick={this.onUnfollowUserClick} 
        onPageClick={this.onPageClick}
      />
    </>
  }

}


const mapStateToProps = (state) => ({
  users: state.usersPage.users,
  usersTotalCount: state.usersPage.usersTotalCount,
  usersPerPage: state.usersPage.usersPerPage,
  currentPage: state.usersPage.currentPage,
  isFetching: state.preloader.isFetching
})

export default connect(mapStateToProps, {follow, unfollow, getUsers})
(UsersContainer)