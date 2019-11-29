import React from "react";
import s from "./Post.module.css";

const Post = ({ message, likesCount }) => {
  return (
    <div className={s.item}>
      <img src="https://d2ph5fj80uercy.cloudfront.net/01/cat6447.jpg" />
      {message}
      <div>
        <span>like</span> {likesCount}
      </div>
    </div>
  );
};

export default Post;
