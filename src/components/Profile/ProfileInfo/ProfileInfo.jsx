import React, { useState } from 'react';
import style from './ProfileInfo.module.css'
import userIcon from '../../../assets/img/user-icon.png'
import ProfileStatusViaHooks from './ProfileStatus/ProfileStatusViaHooks'
import Preloader from '../../common/Preloader/Preloader'


const ProfileInfo = ({ profileInfo, profileInfo: { aboutMe, photos, fullName }, profileStatus, updateProfileStatus, setProfilePhoto, isOwner }) => {


  const onProfilePhotoUpload = (e) => {
    if (e.target.files.length)
      setProfilePhoto(e.target.files[0])
  } 

  if (!profileInfo) return <Preloader />

  return (
    <div>
      <div className={style.descriptionBlock}>
        <div>
          <img
            src={photos.large || userIcon}
            alt="User Image"
            className={style.userImg}
          />
          {isOwner && <input onChange={onProfilePhotoUpload} type="file" name="profilePhotoUpload" accept=".jpg, .jpeg, .png"></input>}

        </div>
        <span>{aboutMe}</span>
      </div>
      <div>
        <ProfileStatusViaHooks profileStatus={profileStatus} updateProfileStatus={updateProfileStatus} />
      </div>
    </div>
  )
}

export default ProfileInfo