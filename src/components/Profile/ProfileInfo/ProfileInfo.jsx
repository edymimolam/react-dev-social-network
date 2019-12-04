import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";

export default ({
  isOwner,
  setEditMode,
  profileInfo: {
    aboutMe,
    fullName,
    lookingForAJob,
    lookingForAJobDescription,
    contacts
  }
}) => (
  <List>
    <ListItem>
      <ListItemText primary="About me:" secondary={aboutMe}></ListItemText>
      {/* <b>About me: </b> <span>{aboutMe}</span> */}
    </ListItem>

    <ListItem>
      <ListItemText
        primary="Looking for a job:"
        secondary={lookingForAJob ? "yes" : "no"}
      />
      {/* <b>Looking for a job: </b> <span>{lookingForAJob ? "yes" : "no"}</span> */}
    </ListItem>

    <ListItem>
      <ListItemText
        primary="Job description"
        secondary={lookingForAJobDescription}
      />
      {/* <b>Job description: </b> <span>{lookingForAJobDescription}</span> */}
    </ListItem>
    {/* 
    <div>
      <b>Contacts - </b> */}
    {/* {Object.keys(contacts).map(key => (
      <ListItem key={key}>
        <ListItemText primary={`${key}:`} secondary={contacts[key]} />
      </ListItem>
    ))} */}
    {/* </div> */}

    {isOwner && <button onClick={() => setEditMode(true)}>Edit</button>}
  </List>
);
