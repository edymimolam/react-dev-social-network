import React from "react";
import Profile from "./Profile";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../common/Preloader/Preloader";
import { connect } from "react-redux";
import {
  getProfileInfo,
  getProfileStatus,
  updateProfileStatus,
  setProfilePhoto,
  submitProfileInfo
} from "../../redux/profileReducer";
import { withRouter } from "react-router-dom";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  rerenderProfile() {
    let userId = this.props.match.params.userId;
    this.isOwner = !this.props.match.params.userId;
    if (!userId) {
      userId = this.props.auth.id;
    }

    if (!userId || userId === null) {
      this.props.history.push("/login");
    } else {
      this.props.getProfileInfo(userId);
      this.props.getProfileStatus(userId);
    }
  }

  componentDidMount() {
    this.rerenderProfile();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.userId !== prevProps.match.params.userId)
      this.rerenderProfile();
  }

  render() {
    if (this.props.isFetching || !this.props.profileInfo) return <Preloader />;
    return (
      <React.Fragment>
        <Profile isOwner={this.isOwner} {...this.props} />
        <MyPostsContainer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  profileInfo: state.profilePage.profileInfo,
  updateProfileInfoSuccess: state.profilePage.updateProfileInfoSuccess,
  profileStatus: state.profilePage.profileStatus,
  isFetching: state.preloader.isFetching,
  auth: state.auth
});

export default compose(
  connect(mapStateToProps, {
    getProfileInfo,
    getProfileStatus,
    updateProfileStatus,
    setProfilePhoto,
    submitProfileInfo
  }),
  withRouter
)(ProfileContainer);

// export default connect(mapStateToProps, {getProfileInfo})(withAuthRedirect(withRouter(ProfileContainer)))
