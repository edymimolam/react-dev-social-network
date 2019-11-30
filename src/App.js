import React, { lazy, Component } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { initialization } from "./redux/appReducer";
import { connect } from "react-redux";
import { compose } from "redux";
import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./Theme";
import HeaderContainer from "./components/Header/HeaderContainer";
import Sidebar from "./components/Sidebar/Sidebar";
import Preloader from "./components/common/Preloader/Preloader";
import withSuspense from "./hoc/withSuspense";

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
    if (!this.props.isInit) return <Preloader />;

    return (
      <ThemeProvider theme={theme}>
        <div className="app-wrapper">
          <HeaderContainer />
          <Sidebar />
          <div className="app-wrapper-content">
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
          </div>
        </div>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = state => ({ isInit: state.app.isInitialized });

// export default connect(mapStateToProps, {initialization})(App)

export default compose(
  withSuspense,
  withRouter,
  connect(mapStateToProps, { initialization })
)(App);
