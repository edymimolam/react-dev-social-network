import React from "react";
import Navbar from "./Navbar/Navbar";
import FriendsContainer from "./Friends/FriendsContainer";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Navbar />
      <FriendsContainer />
    </div>
  );
};

export default Sidebar;
