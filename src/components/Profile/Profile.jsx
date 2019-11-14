import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({ profileInfo, profileStatus, updateProfileStatus, setProfilePhoto, isOwner}) => {
  return <div>

    <ProfileInfo
      profileInfo={profileInfo}
      profileStatus={profileStatus}
      updateProfileStatus={updateProfileStatus}
      setProfilePhoto={setProfilePhoto}
      isOwner={isOwner}
    />

    <MyPostsContainer />

  </div>
}

export default Profile;