import React from "react";
import style from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = ({ authInfo, logout }) => {
  return (
    <header className={style.header}>
      <img src="https://www.freelogodesign.org/Content/img/logo-ex-7.png" />
      <div>
        {authInfo.isAuthorized ? (
          <div>
            {authInfo.login} <button onClick={logout}>LogOut</button>
          </div>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
