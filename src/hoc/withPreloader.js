import React from 'react'
import {connect}  from 'react-redux'
import Preloader from '../components/Preloader/Preloader'

let mapStateToProps = (state) => ({isFetching: state.preloader.isFetching})

const withPreloader = (Component) => {
  debugger
  const PreloaderContainer = (props) => {
    if(props.isFetching) return <Preloader/>
    return <Component {...props}/>
  }
  return connect(mapStateToProps)(PreloaderContainer)
}

export default withPreloader