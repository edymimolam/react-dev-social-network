import React from 'react'
import Profile from './Profile'
import Preloader from '../common/Preloader/Preloader'
import { connect } from 'react-redux'
import { getProfileInfo, getProfileStatus, updateProfileStatus, setProfilePhoto } from '../../redux/profileReducer'
import { withRouter, Redirect } from 'react-router-dom'
import { compose } from 'redux'

class ProfileContainer extends React.Component {

  rerenderProfile() {
    let userId = this.props.match.params.userId
    this.isOwner = !this.props.match.params.userId
    if (!userId) {
      userId = this.props.auth.id
      if (!userId) this.props.history.push('/login')
    }
    this.props.getProfileInfo(userId)
    this.props.getProfileStatus(userId)
  }

  componentDidMount() {
    this.rerenderProfile()
  }

  componentDidUpdate(prevProps) {
    if(this.props.match.params.userId !== prevProps.match.params.userId) 
      this.rerenderProfile()
  }

  render() {
    if (this.props.isFetching) return <Preloader />
    return <Profile isOwner={this.isOwner} {...this.props} />
  }

}

const mapStateToProps = (state) => ({
  profileInfo: state.profilePage.profileInfo,
  profileStatus: state.profilePage.profileStatus,
  isFetching: state.preloader.isFetching,
  auth: state.auth
})

export default compose(connect(mapStateToProps, { getProfileInfo, getProfileStatus, updateProfileStatus, setProfilePhoto }), withRouter)(ProfileContainer)

// export default connect(mapStateToProps, {getProfileInfo})(withAuthRedirect(withRouter(ProfileContainer)))