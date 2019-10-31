import React from 'react'
import Profile from './Profile'
import Preloader from '../Preloader/Preloader'
import {connect} from 'react-redux'
import {getProfileInfo} from '../../redux/profileReducer'
import {withRouter} from 'react-router-dom'
import {compose} from 'redux'


class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId
    this.props.getProfileInfo(userId)
  }

  render() {

    if(this.props.isFetching) return <Preloader/>
      return  <Profile {...this.props}/>
  }

}


const mapStateToProps = (state) => ({
  profileInfo: state.profilePage.profileInfo,
  isFetching: state.preloader.isFetching
})

export default compose(connect(mapStateToProps, {getProfileInfo}), withRouter)(ProfileContainer)

// export default connect(mapStateToProps, {getProfileInfo})(withAuthRedirect(withRouter(ProfileContainer)))