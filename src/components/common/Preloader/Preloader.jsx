import React from "react";
import style from "./Preloader.module.css";
import { BubbleSpinLoader } from "react-css-loaders";

const Preloader = () => {
  return (
    <div className={style.preloaderContainer}>
      <div className={style.preloader}>
        <BubbleSpinLoader color="#fff" />
      </div>
    </div>
  );
};

export default Preloader;
