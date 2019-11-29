import React, { useState } from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileInfoForm from "./ProfileInfo/ProfileInfoForm";
import style from "./Profile.module.css";
import userIcon from "../../assets/img/user-icon.png";
import ProfileStatusViaHooks from "./ProfileStatus/ProfileStatusViaHooks";

const Profile = props => {
  const {
    profileInfo,
    profileInfo: { photos },
    submitProfileInfo,
    profileStatus,
    updateProfileStatus,
    setProfilePhoto,
    isOwner,
    updateProfileInfoSuccess
  } = props;

  let [editMode, setEditMode] = useState(!updateProfileInfoSuccess);

  const onProfilePhotoUpload = e => {
    if (e.target.files.length) setProfilePhoto(e.target.files[0]);
  };

  return (
    <div className={style.descriptionBlock}>
      <div>
        <img
          src={photos.large || userIcon}
          alt="User Image"
          className={style.userImg}
        />
        {isOwner && (
          <input
            onChange={onProfilePhotoUpload}
            type="file"
            name="profilePhotoUpload"
            accept=".jpg, .jpeg, .png"
          ></input>
        )}
      </div>

      <div>
        <ProfileStatusViaHooks
          profileStatus={profileStatus}
          updateProfileStatus={updateProfileStatus}
        />
      </div>

      {editMode ? (
        <ProfileInfoForm
          initialValues={profileInfo}
          profileInfo={profileInfo}
          submitProfileInfo={submitProfileInfo}
        />
      ) : (
        <ProfileInfo
          profileInfo={profileInfo}
          isOwner={isOwner}
          setEditMode={setEditMode}
        />
      )}
    </div>
  );
};

export default Profile;
