import React from 'react';
import MyPosts from './MyPosts';
import {updateNewPostTextAreaCreator, addNewPostCreator} from '../../../redux/profileReducer'
import {connect} from 'react-redux'

const mapStateToProps = (state) => ({profilePage: state.profilePage})

const mapDispatchToProps = (dispatch) => ({
    onTextAreaChange: (text) => dispatch(updateNewPostTextAreaCreator(text)),
    onButtonClick: () => dispatch(addNewPostCreator())
  })

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;