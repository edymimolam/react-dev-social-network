import React from 'react'

class ProfileStatus extends React.Component {

  state = {editMode: false}

  enableStateMode = () => {
    debugger
    this.setState({editMode: true})
    console.log({'this': this})
  }
  disableStateMode = () => this.setState({editMode: false})

  render(){

    return <div>
      { this.state.editMode &&  <input autoFocus type='text' onBlur={this.disableStateMode} value={this.props.status}/> }
      { !this.state.editMode && <span onDoubleClick={this.enableStateMode}>{this.props.status}</span> }  
    </div>
  }

}

export default ProfileStatus