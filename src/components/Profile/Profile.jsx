import React, { useState } from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfileInfoForm from "./ProfileInfo/ProfileInfoForm";
import style from "./Profile.module.css";

import ProfileStatus from "./ProfileStatus/ProfileStatus";
import ProfilePhoto from "./ProfilePhoto/ProfilePhoto";
import Typography from "@material-ui/core/Typography";

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
      <div className={style.leftPane}>
        <ProfilePhoto
          onProfilePhotoUpload={onProfilePhotoUpload}
          isOwner={isOwner}
          photos={photos}
        />
      </div>

      <div className={style.rightPane}>
        <div className={style.nameBlock}>
          <Typography variant="h5">{profileInfo.fullName}</Typography>
          <ProfileStatus
            profileStatus={profileStatus}
            updateProfileStatus={updateProfileStatus}
            isOwner={isOwner}
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
    </div>
  );
};

export default Profile;
