import React from 'react'

const ProfileInfo = ({ isOwner, setEditMode,
  profileInfo: { aboutMe, fullName, lookingForAJob, lookingForAJobDescription, contacts } }) => {

  return <div>

    <div>
      <b>{fullName}</b>
    </div>

    <div>
      <b>About me: </b> <span>{aboutMe}</span>
    </div>

    <div>
      <b>Looking for a job: </b> <span>{lookingForAJob ? 'yes' : 'no'}</span>
    </div>

    <div>
      <b>Job description: </b> <span>{lookingForAJobDescription}</span>
    </div>

    <div>
      <b>Contacts - </b>
      {
        Object.keys(contacts).map(key => <div key={key}>
          <b>{key}: </b> <span>{contacts[key]}</span>
        </div>)
      }
    </div>

    {isOwner && <button onClick={() => setEditMode(true)}>Edit</button>}
  </div>
}

export default ProfileInfo