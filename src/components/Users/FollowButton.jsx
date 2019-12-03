import React from "react";
import Button from "@material-ui/core/Button";

export default ({ user: { followed, id }, follow, unfollow, ...props }) => {
  if (followed) {
    return (
      <Button onClick={() => unfollow(id)} color="secondary" {...props}>
        Unfollow
      </Button>
    );
  } else {
    return (
      <Button onClick={() => follow(id)} color="primary" {...props}>
        Follow
      </Button>
    );
  }

  // user.followed ? (å
  //   <button className={style.followBtn} onClick={() => unfollow(user.id)}>
  //     Unfollow
  //   </button>
  // ) : (
  //   <button className={style.followBtn} onClick={() => follow(user.id)}>
  //     Follow
  //   </button>
  // );
};
