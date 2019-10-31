import React from 'react';
import Dialogs from "./Dialogs"
import {updateNewMesssageTextAreaCreator, addNewMessageCreator} from '../../redux/dialogsReducer'
import {connect} from 'react-redux'
import withAuthRedirect  from '../../hoc/withAuthRedirect'
import {compose} from 'redux'

const mapStateToProps = (state) => ({dialogsPage: state.dialogsPage})

const mapDispatchToProps = (dispatch) => ({
  onTextAreaChange: (text) => dispatch(updateNewMesssageTextAreaCreator(text)),
  onButtonClick: () => dispatch(addNewMessageCreator()) 
})

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs)