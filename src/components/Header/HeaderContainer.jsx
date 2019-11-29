import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { logout } from "../../redux/authReducer";

const HeaderContainer = props => <Header {...props} />;

const mapStateToProps = state => ({ authInfo: state.auth });

export default connect(mapStateToProps, { logout })(HeaderContainer);
