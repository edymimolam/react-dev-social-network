import React, { Fragment } from "react";
import User from "./User";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(3, 0)
  }
}));

const Users = props => {
  const { users, onUnfollowUserClick, onFollowUserClick, isAuthorized } = props;
  const classes = useStyles();

  return (
    <Fragment>
      <div className={classes.root}>
        {users.map(u => (
          <User
            key={u.id}
            user={u}
            follow={onFollowUserClick}
            unfollow={onUnfollowUserClick}
            isAuthorized={isAuthorized}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default Users;
