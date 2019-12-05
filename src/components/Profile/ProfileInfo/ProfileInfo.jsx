import React from "react";
import SocialButtons from "./ProfileInfoSocialButtons";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import style from "../Profile.module.css";

export default ({
  isOwner,
  setEditMode,
  profileInfo: { aboutMe, lookingForAJob, lookingForAJobDescription, contacts }
}) => (
  <List className={style.list}>
    <ListItem>
      <ListItemText primary="About me:" secondary={aboutMe}></ListItemText>
    </ListItem>

    <ListItem>
      <ListItemText
        primary="Looking for a job:"
        secondary={lookingForAJob ? "yes" : "no"}
      />
    </ListItem>

    <ListItem>
      <ListItemText
        primary="Job description:"
        secondary={lookingForAJobDescription}
      />
    </ListItem>
    <ListItem>
      <SocialButtons contacts={contacts} />
    </ListItem>

    {isOwner && (
      <Button
        variant="outlined"
        onClick={() => setEditMode(true)}
        className={style.editBtn}
      >
        Edit
      </Button>
    )}
  </List>
);
