import React from 'react';
import style from './ProfileInfo.module.css'
import userIcon from '../../../assets/img/user-icon.png'
import ProfileStatus from './ProfileStatus/ProfileStatus'


const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        {/* <img className={style.background} src='http://starkovtattoo.spb.ru/images/000/DSC100074005.jpg'/> */}
      </div>
      <div className={style.descriptionBlock}>
        <img 
          src={props.profileInfo.photos.large ? props.profileInfo.photos.large : userIcon} 
          alt="User Image" 
          className={style.userImg}
        />
        <span>{props.profileInfo.aboutMe}</span>
      </div>
      <div>
       <ProfileStatus status='Test Status'/>
      </div>
    </div>
  )
}

export default ProfileInfo