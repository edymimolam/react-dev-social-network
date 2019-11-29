import React from "react";
import MyPosts from "./MyPosts";
import { addNewPost } from "../../../redux/profileReducer";
import { connect } from "react-redux";

const mapStateToProps = state => ({ posts: state.profilePage.posts });

export default connect(mapStateToProps, { addNewPost })(MyPosts);
