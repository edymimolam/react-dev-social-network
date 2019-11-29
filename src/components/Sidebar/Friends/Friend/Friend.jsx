import React from "react";
import s from "./Friend.module.css";

const Friend = props => {
  return (
    <div className={s.item}>
      <img className={s.image} src={props.imgSrc} alt="" />
      <h3 className={s.name}>{props.name}</h3>
    </div>
  );
};

export default Friend;
