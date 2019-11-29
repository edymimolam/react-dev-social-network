import React, { useState, useEffect } from "react";

const ProfileStatusViaHooks = ({ profileStatus, updateProfileStatus }) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(profileStatus);

  useEffect(() => {
    setStatus(profileStatus);
  }, [profileStatus]);

  const enableEditMode = () => setEditMode(true);
  const disableEditMode = () => setEditMode(false);

  const onInputChange = e => setStatus(e.currentTarget.value);
  const onInputBlur = () => {
    disableEditMode();
    updateProfileStatus(status);
  };

  return (
    <div>
      {editMode && (
        <input
          autoFocus
          type="text"
          onChange={onInputChange}
          onBlur={onInputBlur}
          value={status}
        />
      )}
      {!editMode && (
        <span onDoubleClick={enableEditMode}>
          {status !== "" ? status : "let's set status"}
        </span>
      )}
    </div>
  );
};

export default ProfileStatusViaHooks;
