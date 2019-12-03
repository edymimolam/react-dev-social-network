import React, { Fragment } from "react";
import { connect } from "react-redux";
import Users from "./Users";
import Pagination from "../common/Pagination/Pagination";
import Preloader from "../common/Preloader/Preloader";

import { follow, unfollow, getUsers } from "../../redux/usersReducer";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.usersPerPage);
  }

  onPageClick = pageNum => this.props.getUsers(pageNum);

  onFollowUserClick = id => this.props.follow(id);

  onUnfollowUserClick = id => this.props.unfollow(id);

  render() {
    if (this.props.isFetching) return <Preloader />;
    return (
      <Fragment>
        <Pagination
          usersTotalCount={this.props.usersTotalCount}
          usersPerPage={this.props.usersPerPage}
          currentPage={this.props.currentPage}
          onPageClick={this.onPageClick}
        />
        <Users
          users={this.props.users}
          onFollowUserClick={this.onFollowUserClick}
          onUnfollowUserClick={this.onUnfollowUserClick}
          isAuthorized={this.props.isAuthorized}
        />
        <Pagination
          usersTotalCount={this.props.usersTotalCount}
          usersPerPage={this.props.usersPerPage}
          currentPage={this.props.currentPage}
          onPageClick={this.onPageClick}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = ({
  usersPage: { users, usersTotalCount, usersPerPage, currentPage },
  preloader: { isFetching },
  auth: { isAuthorized }
}) => ({
  users,
  usersTotalCount,
  usersPerPage,
  currentPage,
  isFetching,
  isAuthorized
});

export default connect(mapStateToProps, { follow, unfollow, getUsers })(
  UsersContainer
);
