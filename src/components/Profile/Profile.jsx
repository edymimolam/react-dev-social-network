import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({ profileInfo, profileStatus, updateProfileStatus }) => {
  return <div>

    <ProfileInfo
      profileInfo={profileInfo}
      profileStatus={profileStatus}
      updateProfileStatus={updateProfileStatus}
    />

    <MyPostsContainer />

  </div>
}

export default Profile;