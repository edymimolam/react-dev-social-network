import React, { useState, useEffect, Fragment } from "react";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    alignItems: "flex-end"
  },
  editIcon: {
    marginLeft: theme.spacing(0.5)
  }
}));

const ProfileStatusViaHooks = ({
  profileStatus,
  updateProfileStatus,
  isOwner
}) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(profileStatus);
  const classes = useStyles();

  useEffect(() => {
    setStatus(profileStatus);
  }, [profileStatus]);

  const enableEditMode = () => setEditMode(true);
  const disableEditMode = () => setEditMode(false);

  const onInputChange = e => setStatus(e.currentTarget.value);
  const inputSubmit = () => {
    disableEditMode();
    updateProfileStatus(status);
  };
  const handleKeyDown = e => {
    if (e.key === "Enter") inputSubmit();
  };

  return (
    <Fragment>
      {editMode && (
        <TextField
          autoFocus
          type="text"
          onChange={onInputChange}
          onBlur={inputSubmit}
          onKeyDown={handleKeyDown}
          value={status}
        />
      )}
      {!editMode && (
        <div className={classes.root}>
          <Typography variant="button">
            {status !== "" ? status : "let's set status"}
          </Typography>
          {isOwner && (
            <IconButton
              size="small"
              onClick={enableEditMode}
              className={classes.editIcon}
            >
              <EditIcon />
            </IconButton>
          )}
        </div>
      )}
    </Fragment>
  );
};

export default ProfileStatusViaHooks;
