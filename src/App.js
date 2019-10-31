import React from 'react'
import './App.css'
import HeaderContainer from './components/Header/HeaderContainer'
import Sidebar from './components/Sidebar/Sidebar'
import Login from './components/Login/Login'
import ProfileContainer from './components/Profile/ProfileContainer'
import DialogsContainer from "./components/Dialogs/DialogsContainer"
import UsersContainer from './components/Users/UsersContainer'
import {Route, Switch} from "react-router-dom"

const App = () => {
  return (
    <div className='app-wrapper'>
      <HeaderContainer/>
      <Sidebar/>
      <div className='app-wrapper-content'>
        <Switch>
        <Route path="/login" render={()=> <Login/>}/>
        <Route path="/dialogs" render={() => <DialogsContainer/>}/>
        <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
        <Route path="/users" render={() => <UsersContainer/>}/>
        </Switch>
      </div>
    </div>
  )
}

export default App;