import React, { Fragment } from "react";
import Avatar from "@material-ui/core/Avatar";
import userIcon from "../../../assets/img/user-icon.png";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
    maxWidth: 500,
    marginLeft: "auto",
    marginRight: "auto"
  },
  avatar: {
    width: "100%",
    height: "100%"
  },
  button: {
    position: "absolute",
    bottom: theme.spacing(1),
    right: theme.spacing(1)
  }
}));

export default ({ isOwner, onProfilePhotoUpload, photos }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Avatar
        src={photos.large || userIcon}
        alt="User Image"
        style={{ width: "100%", height: "100%" }}
        variant="square"
        className={classes.avatar}
      />
      {isOwner && (
        <Fragment>
          <input
            id="profilePhotoUpload"
            onChange={onProfilePhotoUpload}
            type="file"
            name="profilePhotoUpload"
            accept=".jpg, .jpeg, .png"
            style={{ display: "none" }}
          />
          <label htmlFor="profilePhotoUpload" className={classes.button}>
            <Fab color="secondary" component="span" size="small">
              <AddIcon></AddIcon>
            </Fab>
          </label>
        </Fragment>
      )}
    </div>
  );
};
