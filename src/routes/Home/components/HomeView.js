import React from 'react'
import './HomeView.scss'
import Content from './Content'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import TextField from 'material-ui/TextField'


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
    let content = (<Content searchText={this.state.searchText}/>)

    return (
      <div className='content-area'>
        <AppBar position='static' className='header'>
          <Toolbar className='toolBar'>
            Adogpt
          </Toolbar>
        </AppBar>

        {content}
      </div>
      )
  }
}

export default HomeView
