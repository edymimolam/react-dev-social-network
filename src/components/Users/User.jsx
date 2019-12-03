import React from "react";
import userIcon from "../../assets/img/user-icon.png";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import FollowButton from "./FollowButton";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: theme.spacing(2),
    maxWidth: 600,
    display: "flex",
    overflow: "hidden"
  },
  avatarLink: {
    display: "flex",
    alignItems: "center"
  },
  avatar: {
    width: 150,
    height: 150
  },
  info: {
    marginLeft: theme.spacing(2),
    paddingTop: theme.spacing(2),
    display: "flex",
    flexFlow: "column",
    justifyContent: "space-between",
    width: "100%"
  },
  buttons: {
    alignSelf: "flex-end",
    "& > *": {
      marginLeft: theme.spacing(2)
    }
  }
}));

const User = ({ user, follow, unfollow, isAuthorized }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <NavLink to={`/profile/${user.id}`} className={classes.avatarLink}>
        <Avatar
          alt="avatar"
          src={user.photos.large ? user.photos.large : userIcon}
          className={classes.avatar}
        />
      </NavLink>

      <div className={classes.info}>
        <Typography variant="h5">{user.name}</Typography>
        {/* <h2 className={style.title}>{user.name}</h2> */}
        {/* <p className={style.status}>{user.status}</p> */}
        <Typography variant="subtitle1">{user.status}</Typography>
        {/* <div className={style.location}> */}
        {/* <span className={style.city}>{user.location.city}</span> */}
        {/* <span className={style.country}>{"user.location.country"}</span> */}
        {/* </div> */}
        <div className={classes.buttons}>
          <NavLink
            to={`/profile/${user.id}`}
            style={{ textDecoration: "none" }}
          >
            <Button variant="outlined">Details</Button>
          </NavLink>
          {isAuthorized ? (
            <FollowButton
              className={classes.follow}
              user={user}
              follow={follow}
              unfollow={unfollow}
              variant="contained"
            />
          ) : (
            <Button variant="contained" disabled>
              Login to follow
            </Button>
          )}
        </div>
      </div>
    </Paper>
  );
};

export default User;
