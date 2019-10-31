import React from 'react'
import Header from './Header'
import {connect} from 'react-redux'
import {getAuth} from '../../redux/authReducer'

class HeaderContainer extends React.Component {

  componentDidMount() {
    this.props.getAuth()
  }

  render(){ return <Header {...this.props}/> }

}

const mapStateToProps = (state) => ({
  authInfo: state.auth
})

export default connect(mapStateToProps, {getAuth})(HeaderContainer)