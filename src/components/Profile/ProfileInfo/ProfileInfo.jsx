import React from 'react';
import style from './ProfileInfo.module.css'
import userIcon from '../../../assets/img/user-icon.png'
import ProfileStatusViaHooks from './ProfileStatus/ProfileStatusViaHooks'
import Preloader from '../../common/Preloader/Preloader'


const ProfileInfo = ({ profileInfo, profileStatus, updateProfileStatus }) => {

  if(!profileInfo) return <Preloader/>

  return (
    <div>
      <div className={style.descriptionBlock}>
        <img
          src={profileInfo.photos.large ? profileInfo.photos.large : userIcon}
          alt="User Image"
          className={style.userImg}
        />
        <span>{profileInfo.aboutMe}</span>
      </div>
      <div>
        <ProfileStatusViaHooks profileStatus={profileStatus} updateProfileStatus={updateProfileStatus} />
      </div>
    </div>
  )
}

export default ProfileInfo