import React, { lazy, Component } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { initialization } from "./redux/appReducer";
import { logout } from "./redux/authReducer";
import { connect } from "react-redux";
import { compose } from "redux";
import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./Theme";
import Preloader from "./components/common/Preloader/Preloader";
import withSuspense from "./hoc/withSuspense";
import DrawerContainer from "./DrawerContainer";

const UsersContainer = lazy(() => import("./components/Users/UsersContainer"));
const DialogsContainer = lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);
const ProfileContainer = lazy(() =>
  import("./components/Profile/ProfileContainer")
);
const Login = lazy(() => import("./components/Login/Login"));

class App extends Component {
  componentDidMount() {
    this.props.initialization();
  }

  render() {
    const { isInitialized, isAuthorized } = this.props;

    if (!isInitialized) return <Preloader />;

    return (
      <ThemeProvider theme={theme}>
        <DrawerContainer logout={this.props.logout} isAuthorized={isAuthorized}>
          <Switch>
            <Route path="/login" render={() => <Login />} />
            <Route path="/dialogs" render={() => <DialogsContainer />} />
            <Route
              path="/profile/:userId?"
              render={() => <ProfileContainer />}
            />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/" render={() => <Redirect to="/profile" />} />
          </Switch>
        </DrawerContainer>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = ({
  app: { isInitialized },
  auth: { isAuthorized }
}) => ({
  isInitialized,
  isAuthorized
});

export default compose(
  withSuspense,
  withRouter,
  connect(mapStateToProps, { initialization, logout })
)(App);
