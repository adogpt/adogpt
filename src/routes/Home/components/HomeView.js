import React from 'react'
import './HomeView.scss'
import Content from './Content'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Button from 'material-ui/Button'
// import SearchBar from 'react-search-bar'
import IconButton from 'material-ui/IconButton'
import TextField from 'material-ui/TextField'
import Avatar from 'react-avatar'
// import './SearchBar.scss';
import Select from 'react-select';
import './react-select.scss';
import Creatable from 'react-select';


class HomeView extends React.Component {
  constructor(props) {
    super(props)
    this.logChange = this.logChange.bind(this);
    this.state = {fieldValue: '', searchText: '', searched: false, animal: ''}
  }

  onSearchClick () {
    this.setState({searched: true});

    // update children
    this.setState({searchText: this.state.fieldValue})
  }

  onChange(e) {
  }

  handleSearch(value) {
    if (value) {
      console.info(`Searching "${value}"`);
    }
  }
  handleClear() {
   
  }
  handleChange() {
    
  }
   handleSelection(value) {
    if (value) {
      console.info(`Selected "${value}"`);
    }
  }
  logChange(val) {
    console.log('Selected: ', val.value);
    this.setState({animal: val.value});
  }

  render () {
    
    let content = <Content ref="child"
                           searchText={this.state.searchText}
                           filter={this.state.animal}/>;

    let options = [
      { value: 'cat', label: 'Cat' },
      { value: 'dog', label: 'Dog' },
      { value: 'rabbit', label: 'Rabbit'},
      { value: 'bird', label: 'Bird'},
    ];

    return (
      <div className='content-area'>
        <AppBar position='static' className='header'>
          <div className='row'>
            <div className='col-md-6'>
              <Toolbar className='toolBar' onClick={() => this.refs.child.getAlert()}>
                Find Pets For Adoption Nearby
              </Toolbar>
            </div>

           <div className='col-md-3 avatarBar'>
           
            <Select
              name="form-field-name"
              ignoreCase={true}
              value={this.state.animal}
              options={options}

              onChange={this.logChange}
            />
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
