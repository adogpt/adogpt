import React from 'react'
import './HomeView.scss'
import Content from './Content'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import TextField from 'material-ui/TextField'
import Avatar from 'react-avatar'


class HomeView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {fieldValue: '', searchText: '', searched: false}
  }

  onSearchClick () {
    this.setState({searched: true});

    // update children
    this.setState({searchText: this.state.fieldValue})
  }

  onChange(e) {
    this.setState({fieldValue: e.target.value})
  }


  render () {
    let content = (<Content ref="child" searchText={this.state.searchText}/>)

    return (
      <div className='content-area'>
        <AppBar position='static' className='header'>
          <div className='row'>
            <div className='col-md-9'>
              <Toolbar className='toolBar' onClick={() => this.refs.child.getAlert()}>
                Find Pets For Adoption Nearby
              </Toolbar>
            </div>
          
            <div className='col-md-3'>
              <Toolbar className="avatarBar">
                    <Avatar name="John Smith" size={40} className="avatar" />
                    John Smith
              </Toolbar>
            </div>
          </div>
        </AppBar>

        {content}
      </div>
      )
  }
}

export default HomeView
