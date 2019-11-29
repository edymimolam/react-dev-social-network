import React from "react";
import Dialogs from "./Dialogs";
import { addNewMessage } from "../../redux/dialogsReducer";
import { connect } from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import { compose } from "redux";

const mapStateToProps = state => ({ dialogsPage: state.dialogsPage });

export default compose(
  connect(mapStateToProps, { addNewMessage }),
  withAuthRedirect
)(Dialogs);
