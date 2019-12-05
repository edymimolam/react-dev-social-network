import React from "react";
import Profile from "./Profile";
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
        {/* <MyPostsContainer /> */}
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({
  profilePage: { profileInfo, updateProfileInfoSuccess, profileStatus },
  preloader: { isFetching },
  auth
}) => ({
  profileInfo,
  updateProfileInfoSuccess,
  profileStatus,
  isFetching,
  auth
});

const mapDispatchToProps = dispatch => ({
  getProfileInfo: userId => dispatch(getProfileInfo(userId)),
  getProfileStatus: userId => dispatch(getProfileStatus(userId)),
  updateProfileStatus: status => dispatch(updateProfileStatus(status)),
  setProfilePhoto: img => dispatch(setProfilePhoto(img)),
  submitProfileInfo: values => dispatch(submitProfileInfo(values))
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(ProfileContainer);
