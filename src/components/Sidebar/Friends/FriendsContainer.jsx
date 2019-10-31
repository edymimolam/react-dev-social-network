import React from 'react'
import Friends from './Friends'
import {connect} from 'react-redux'

const mapStateToProps = (state) => ({friendsState: state.sidebar.friends})
const FriendsContainer = connect(mapStateToProps)(Friends)

export default FriendsContainer