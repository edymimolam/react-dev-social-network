import React from 'react'

class ProfileStatus extends React.Component {

  state = {
    editMode: false,
    status: this.props.profileStatus
  }

  enableEditMode = () => this.setState({ editMode: true })
  disableEditMode = () => this.setState({ editMode: false })

  onInputChange = (e) => this.setState({ status: e.currentTarget.value })
  onInputBlur = () => {
    this.disableEditMode()
    this.props.updateProfileStatus(this.state.status)
  }


  componentDidUpdate(prevProps) {
    if(this.props.profileStatus !== prevProps.profileStatus)
      this.setState({status: this.props.profileStatus})
  }


  render() {
    return <div>
      {
        this.state.editMode && 
          <input 
            autoFocus type='text' 
            onChange={this.onInputChange} 
            onBlur={this.onInputBlur} 
            value={this.state.status} 
          />
      }
      {
        !this.state.editMode && 
          <span onDoubleClick={this.enableEditMode}>
            {(this.state.status !== '') ? this.state.status : 'let\'s set status' }
          </span>
      }
    </div>
  }

}

export default ProfileStatus